import zlib
import struct
import math
import base64

def unfilter_scanlines(raw_data, width, height, bpp=4):
    stride = width * bpp
    img = bytearray(width * height * bpp)
    
    src_pos = 0
    dst_pos = 0
    
    for y in range(height):
        filter_type = raw_data[src_pos]
        src_pos += 1
        
        scanline = raw_data[src_pos : src_pos + stride]
        src_pos += stride
        
        prev_row_start = dst_pos - stride if y > 0 else None
        
        for x in range(stride):
            val = scanline[x]
            left = img[dst_pos - bpp] if x >= bpp else 0
            up = img[prev_row_start + x] if prev_row_start is not None else 0
            diag = img[prev_row_start + x - bpp] if (prev_row_start is not None and x >= bpp) else 0
            
            if filter_type == 0:
                filtered = val
            elif filter_type == 1:
                filtered = (val + left) & 0xFF
            elif filter_type == 2:
                filtered = (val + up) & 0xFF
            elif filter_type == 3:
                filtered = (val + ((left + up) >> 1)) & 0xFF
            elif filter_type == 4:
                p = left + up - diag
                pa = abs(p - left)
                pb = abs(p - up)
                pc = abs(p - diag)
                if pa <= pb and pa <= pc:
                    pr = left
                elif pb <= pc:
                    pr = up
                else:
                    pr = diag
                filtered = (val + pr) & 0xFF
            else:
                filtered = val
                
            img[dst_pos] = filtered
            dst_pos += 1
            
    return img

def write_png_bytes(width, height, rgba_bytes):
    stride = width * 4
    raw_lines = bytearray()
    for y in range(height):
        raw_lines.append(0)
        raw_lines.extend(rgba_bytes[y * stride : (y + 1) * stride])
        
    compressed = zlib.compress(bytes(raw_lines), 9)
    
    def chunk(chunk_type, chunk_data):
        c = chunk_type + chunk_data
        crc = zlib.crc32(c) & 0xFFFFFFFF
        return struct.pack('>I', len(chunk_data)) + c + struct.pack('>I', crc)
        
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    png.extend(chunk(b'IHDR', ihdr_data))
    png.extend(chunk(b'IDAT', compressed))
    png.extend(chunk(b'IEND', b''))
    return bytes(png)

def write_png(path, width, height, rgba_bytes):
    b = write_png_bytes(width, height, rgba_bytes)
    with open(path, 'wb') as f:
        f.write(b)

def load_png(path):
    with open(path, 'rb') as f:
        data = f.read()
    assert data[:8] == b'\x89PNG\r\n\x1a\n'
    w, h, depth, ctype = struct.unpack('>LLBB', data[16:26])
    assert depth == 8 and ctype == 6, "Expected 8-bit RGBA"
    
    pos = 8
    idat = b''
    while pos < len(data):
        length, = struct.unpack('>I', data[pos:pos+4])
        ctype = data[pos+4:pos+8]
        if ctype == b'IDAT':
            idat += data[pos+8:pos+8+length]
        pos += 8 + length + 4
        
    raw = zlib.decompress(idat)
    rgba = unfilter_scanlines(raw, w, h, 4)
    return w, h, rgba

orig_w, orig_h, orig_rgba = load_png('public/logo.png')

# Badge with dark background #0A0A0A and white strokes
def render_favicon_badge(out_size, padding_ratio=0.10, corner_radius_ratio=0.22):
    out = bytearray(out_size * out_size * 4)
    r_corner = out_size * corner_radius_ratio
    
    for y in range(out_size):
        for x in range(out_size):
            idx = (y * out_size + x) * 4
            dx = max(0, max(r_corner - x, x - (out_size - 1 - r_corner)))
            dy = max(0, max(r_corner - y, y - (out_size - 1 - r_corner)))
            dist_sq = dx*dx + dy*dy
            
            if dist_sq > (r_corner + 0.5)**2:
                out[idx] = 0
                out[idx+1] = 0
                out[idx+2] = 0
                out[idx+3] = 0
            elif dist_sq > (r_corner - 0.5)**2:
                alpha = int(255 * (1.0 - (math.sqrt(dist_sq) - (r_corner - 0.5))))
                out[idx] = 10
                out[idx+1] = 10
                out[idx+2] = 10
                out[idx+3] = max(0, min(255, alpha))
            else:
                is_border = (x == 0 or x == out_size - 1 or y == 0 or y == out_size - 1 or
                             abs(math.sqrt(dist_sq) - r_corner) < 1.5)
                c = 38 if is_border else 10
                out[idx] = c
                out[idx+1] = c
                out[idx+2] = c
                out[idx+3] = 255

    pad = int(out_size * padding_ratio)
    inner_size = out_size - 2 * pad
    
    for y in range(inner_size):
        src_y = int(y * orig_h / inner_size)
        dst_y = y + pad
        for x in range(inner_size):
            src_x = int(x * orig_w / inner_size)
            dst_x = x + pad
            
            src_idx = (src_y * orig_w + src_x) * 4
            orig_alpha = orig_rgba[src_idx + 3]
            orig_lum = (orig_rgba[src_idx] + orig_rgba[src_idx+1] + orig_rgba[src_idx+2]) // 3
            
            if orig_alpha > 10:
                stroke_intensity = (255 - orig_lum) * (orig_alpha / 255.0)
                if stroke_intensity > 15:
                    dst_idx = (dst_y * out_size + dst_x) * 4
                    weight = stroke_intensity / 255.0
                    
                    cur_r = out[dst_idx]
                    cur_g = out[dst_idx+1]
                    cur_b = out[dst_idx+2]
                    
                    out[dst_idx] = int(cur_r * (1 - weight) + 245 * weight)
                    out[dst_idx+1] = int(cur_g * (1 - weight) + 244 * weight)
                    out[dst_idx+2] = int(cur_b * (1 - weight) + 240 * weight)
                    out[dst_idx+3] = 255

    return out

# 1. Favicon 192x192
fav192 = render_favicon_badge(192, padding_ratio=0.08)
write_png('public/favicon.png', 192, 192, fav192)

# 2. Apple Touch Icon 180x180
fav180 = render_favicon_badge(180, padding_ratio=0.08)
write_png('public/apple-touch-icon.png', 180, 180, fav180)

# 3. Favicon ICO (48x48 and 32x32)
fav48 = render_favicon_badge(48, padding_ratio=0.06)
write_png('public/favicon-48.png', 48, 48, fav48)

fav32 = render_favicon_badge(32, padding_ratio=0.05)
write_png('public/favicon-32.png', 32, 32, fav32)

with open('public/favicon-48.png', 'rb') as f:
    png48_data = f.read()
with open('public/favicon-32.png', 'rb') as f:
    png32_data = f.read()

ico_header = struct.pack('<HHH', 0, 1, 2)
offset = 6 + 16 * 2
entry48 = struct.pack('<BBBBHHII', 48, 48, 0, 0, 1, 32, len(png48_data), offset)
entry32 = struct.pack('<BBBBHHII', 32, 32, 0, 0, 1, 32, len(png32_data), offset + len(png48_data))

with open('public/favicon.ico', 'wb') as f:
    f.write(ico_header + entry48 + entry32 + png48_data + png32_data)

# 4. Transparent white emblem PNG for SVG embedding & high-res usage
def render_transparent_white_emblem(size):
    out = bytearray(size * size * 4)
    for y in range(size):
        src_y = int(y * orig_h / size)
        for x in range(size):
            src_x = int(x * orig_w / size)
            src_idx = (src_y * orig_w + src_x) * 4
            orig_alpha = orig_rgba[src_idx + 3]
            orig_lum = (orig_rgba[src_idx] + orig_rgba[src_idx+1] + orig_rgba[src_idx+2]) // 3
            
            if orig_alpha > 10:
                stroke_intensity = (255 - orig_lum) * (orig_alpha / 255.0)
                if stroke_intensity > 10:
                    dst_idx = (y * size + x) * 4
                    out[dst_idx] = 245
                    out[dst_idx+1] = 244
                    out[dst_idx+2] = 240
                    out[dst_idx+3] = int(stroke_intensity)
    return out

white_emblem_256 = render_transparent_white_emblem(256)
white_emblem_bytes = write_png_bytes(256, 256, white_emblem_256)
white_b64 = base64.b64encode(white_emblem_bytes).decode('ascii')

# 5. public/favicon.svg
svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="100%" height="100%">
  <rect width="192" height="192" rx="42" fill="#0A0A0A" />
  <rect x="1.5" y="1.5" width="189" height="189" rx="40.5" fill="none" stroke="#262626" stroke-width="2" />
  <image href="data:image/png;base64,{white_b64}" x="16" y="16" width="160" height="160" />
</svg>'''

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

# 6. public/og-image.png (1200x630 dark editorial social preview card with large emblem)
og_w, og_h = 1200, 630
og = bytearray(og_w * og_h * 4)

for i in range(0, len(og), 4):
    og[i] = 10
    og[i+1] = 10
    og[i+2] = 10
    og[i+3] = 255

# Border #262626 inside 40px
for y in range(og_h):
    for x in range(og_w):
        if (x in (40, og_w - 41) and 40 <= y < og_h - 40) or (y in (40, og_h - 41) and 40 <= x < og_w - 40):
            idx = (y * og_w + x) * 4
            og[idx] = 38
            og[idx+1] = 38
            og[idx+2] = 38

# Composite 340x340 emblem in center
emblem_size = 340
emblem_pad_x = (og_w - emblem_size) // 2
emblem_pad_y = (og_h - emblem_size) // 2

for y in range(emblem_size):
    src_y = int(y * orig_h / emblem_size)
    dst_y = y + emblem_pad_y
    for x in range(emblem_size):
        src_x = int(x * orig_w / emblem_size)
        dst_x = x + emblem_pad_x
        
        src_idx = (src_y * orig_w + src_x) * 4
        orig_alpha = orig_rgba[src_idx + 3]
        orig_lum = (orig_rgba[src_idx] + orig_rgba[src_idx+1] + orig_rgba[src_idx+2]) // 3
        
        if orig_alpha > 10:
            stroke_intensity = (255 - orig_lum) * (orig_alpha / 255.0)
            if stroke_intensity > 15:
                dst_idx = (dst_y * og_w + dst_x) * 4
                weight = stroke_intensity / 255.0
                og[dst_idx] = int(10 * (1 - weight) + 245 * weight)
                og[dst_idx+1] = int(10 * (1 - weight) + 244 * weight)
                og[dst_idx+2] = int(10 * (1 - weight) + 240 * weight)

write_png('public/og-image.png', og_w, og_h, og)
print("Updated all icons, favicon.svg, and og-image.png successfully!")
