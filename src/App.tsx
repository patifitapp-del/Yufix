/**
 * Yufixuz Studio — kurumsal site (yufixuz.com)
 * Tum icerik DATA nesnesinde. Bos birakilan linkler sitede gizlenir.
 * Renk kurali: sitenin rengi gece mavisi + koyu mor-mavi isik. Uygulama renkleri
 * (PatiFit kirmizisi, Glow Upp lavantasi) sadece kendi kartlarinin icinde kalir.
 */
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown, Mail, Copy, Check, Menu, X, Apple } from 'lucide-react';
import { CorporateModal, CorporateTab } from './components/CorporateModal';

export const DATA = {
  email: 'yusuftalibov0892@icloud.com',
  tagline: 'Hareket ettiren, öğreten ve eğlendiren mobil uygulamalar geliştiren bağımsız bir stüdyo.',

  facts: [
    ['PatiFit', "App Store'da yayında"],
    ["Pat'in Öğrencisi", '19 bölüm yayında'],
    ['Diller', 'Türkçe, İngilizce, Arapça, Çince'],
  ],

  patifit: {
    name: 'PatiFit',
    icon: '/img/patifit-icon.png',
    status: "App Store'da",
    soon: 'Android yakında',
    appStoreUrl: '', // App Store linki yazilinca buton cikar
    text: 'Evde spor yapmayı her gün küçük görevlere bölen fitness uygulaması. Kaslı kedi Pat her hareketi önce gösteriyor, sonra seninle birlikte sayıyor.',
    highlights: [
      'Seviye testiyle başlayan, kişiye özel yol haritası',
      'Telefon kamerasıyla şınav sayan düellolar',
      'Günlük seri, ligler ve ana ekran widget’ı',
      'Ebeveyn kodlu çocuk modu',
    ],
    shots: ['/img/tr-06-yol.webp', '/img/tr-09-sayac.webp', '/img/tr-13-lig.webp'],
  },

  glowupp: {
    name: 'Glow Upp',
    icon: '/img/glowupp-icon.png',
    status: 'Yakında',
    text: '15 yaş ve üstü için beslenme ve antrenman uygulaması. Fotoğrafla kalori takibi, yapay zekâ beslenme koçu Glowie ve sesli koşu koçu.',
    chips: ['Fotoğrafla kalori', 'Glowie koç', 'Koşu koçu', 'Günlük rutin', 'Sağlıklı tarifler'],
  },

  series: {
    name: "Pat'in Öğrencisi",
    text: "Sınıfta herkesin dalga geçtiği Emre, PatiFit'i açınca Pat ona “Artık ben senin hocanım” diyor. Senaryo, seslendirme, animasyon ve kurgusu stüdyoda yapılan bir mini dizi; bölümlerin gidişatına izleyiciler karar veriyor.",
    stills: [
      { src: '/img/ep1.jpg', label: 'Rövanş' },
      { src: '/img/ep2.jpg', label: 'Yeni Ortak' },
      { src: '/img/ep3.jpg', label: "Deniz'in Sırrı" },
      { src: '/img/ep4.jpg', label: 'Sen karar ver' },
    ],
  },

  studio: [
    'Yufixuz Studio, fikirden tasarıma, animasyondan yayına kadar her aşamayı kendi bünyesinde yürüten bağımsız bir mobil uygulama stüdyosu.',
    'Amacımız spor yapmayı, öğrenmeyi ve sağlıklı yaşamayı eğlenceli hale getiren ürünler geliştirmek. Uygulamalarımızı Türkiye’den dünyaya, dört dilde yayınlıyoruz.',
  ],
  values: [
    ['Önce eğlence', 'İnsanlar sevdikleri şeye geri döner. Her ürünü önce eğlenceli olsun diye tasarlıyoruz.'],
    ['Herkes için', 'Çocuk modundan yaş kurallarına kadar, her yaşa uygun ve güvenli deneyim.'],
    ['Gizliliğe saygı', 'Kamera görüntüsü telefonda işlenir, gereğinden fazla veri toplamayız.'],
  ],

  socials: [
    { name: 'Instagram', handle: '@patifitapp', url: 'https://www.instagram.com/patifitapp' },
    { name: 'TikTok', handle: '@patifitapp', url: 'https://www.tiktok.com/@patifitapp' },
    { name: 'YouTube', handle: '@patifitapp', url: 'https://youtube.com/@patifitapp' },
    { name: 'Facebook', handle: 'Yufixuz Studio', url: 'https://www.facebook.com/share/19hcLc1DG2/' },
  ],
  footer: '© 2026 Yufixuz Studio',
};

const NAV = [
  ['#uygulamalar', 'Uygulamalar'],
  ['#dizi', 'Dizi'],
  ['#studyo', 'Stüdyo'],
  ['#iletisim', 'İletişim'],
];

/* Ekrana girince yumusakca belirme */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('on')); return; }
    const io = new IntersectionObserver((list) => list.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
/* Imlecin oldugu yerde kart icinde isik */
const onSpot = (e: React.PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

function Header({ onLegal }: { onLegal: (t: CorporateTab) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled || open ? 'bg-night/70 backdrop-blur-xl border-b border-rule' : 'border-b border-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Yufixuz Studio, başa dön">
          <img src="/img/emblem-white.png" alt="" className="w-7 h-8 object-contain" />
          <span lang="en" className="display text-2xl leading-none pt-0.5">Yufixuz</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-muted" aria-label="Ana menü">
          {NAV.map(([h, l]) => <a key={h} href={h} className="hover:text-ink transition-colors">{l}</a>)}
        </nav>
        <a href={`mailto:${DATA.email}`} className="press hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-full glass text-sm font-medium hover:border-white/20">
          İletişime geç
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden -mr-2 w-11 h-11 grid place-items-center" aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={open}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rule px-5 py-4 flex flex-col">
          {NAV.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="display text-4xl py-2">{l}</a>)}
          <button onClick={() => { setOpen(false); onLegal('privacy'); }} className="text-left text-sm text-muted py-3">Gizlilik ve koşullar</button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 sm:pt-28 pb-20 sm:pb-28">
      <img src="/img/emblem-white.png" alt="" aria-hidden className="pointer-events-none select-none absolute right-2 sm:right-10 top-10 w-40 sm:w-72 opacity-[0.06] float" />
      <h1 className="display text-[22vw] sm:text-[168px] leading-[0.82]">
        <span className="block overflow-hidden"><span className="rise">Yufixuz</span></span>
        <span className="block overflow-hidden"><span className="rise rise-2 bg-gradient-to-r from-ink via-[#C9C1FF] to-[#8FA8FF] bg-clip-text text-transparent pr-3">Studio</span></span>
      </h1>
      <p className="fade-in mt-8 max-w-[34ch] text-xl sm:text-2xl leading-snug text-ink/90">{DATA.tagline}</p>
      <div className="fade-in mt-9 flex flex-wrap gap-3">
        <a href="#uygulamalar" className="press inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-night font-medium hover:bg-white">
          Uygulamaları gör <ArrowDown className="w-4 h-4" aria-hidden />
        </a>
        <a href={`mailto:${DATA.email}`} className="press inline-flex items-center gap-2 h-12 px-6 rounded-full glass font-medium hover:border-white/20">
          <Mail className="w-4 h-4" aria-hidden /> İletişime geç
        </a>
      </div>
      <dl className="fade-in mt-16 sm:mt-24 grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-rule bg-rule">
        {DATA.facts.map(([k, v]) => (
          <div key={k} className="bg-night/80 backdrop-blur px-5 py-4">
            <dt className="text-xs text-faint">{k}</dt>
            <dd className="mt-1 font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function PatiFitCard() {
  const p = DATA.patifit;
  return (
    <article onPointerMove={onSpot} style={{ ['--spot' as string]: 'rgba(200,16,46,.18)' }}
      className="spot reveal lift relative overflow-hidden rounded-[32px] border border-rule bg-[#0E0A0D]">
      {/* PatiFit'in kendi dunyasi: kirmizi isik sadece bu kartin icinde */}
      <div aria-hidden className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-[#C8102E] opacity-25 blur-[100px]" />
      <div aria-hidden className="absolute -left-20 bottom-[-140px] w-[340px] h-[340px] rounded-full bg-[#7A0A1C] opacity-30 blur-[100px]" />
      <div className="relative grid lg:grid-cols-[1fr_1.05fr] gap-10 p-7 sm:p-12">
        <div>
          <div className="flex items-center gap-4">
            <img src={p.icon} alt="" className="w-[72px] h-[72px] rounded-[20px] shadow-[0_10px_40px_rgba(200,16,46,.35)]" />
            <div>
              <h3 className="display text-5xl leading-none">{p.name}</h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <span className="live-dot relative w-2 h-2 rounded-full bg-[#FF3B57] text-[#FF3B57]" aria-hidden />
                <span className="text-[#FF8A9B] font-medium">{p.status}</span>
                <span className="text-muted">· {p.soon}</span>
              </p>
            </div>
          </div>
          <p className="mt-7 text-lg leading-relaxed text-ink/85 max-w-[46ch]">{p.text}</p>
          <ul className="mt-6 space-y-2.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px] text-ink/80">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#FF3B57] shrink-0" aria-hidden />{h}
              </li>
            ))}
          </ul>
          {p.appStoreUrl && (
            <a href={p.appStoreUrl} target="_blank" rel="noreferrer" className="press mt-8 inline-flex items-center gap-2.5 h-12 px-6 rounded-full bg-ink text-night font-medium hover:bg-white">
              <Apple className="w-5 h-5" aria-hidden /> App Store'dan indir
            </a>
          )}
        </div>
        <div className="relative h-[420px] sm:h-[480px]" aria-label="PatiFit ekran görüntüleri">
          {p.shots.map((s, i) => (
            <img key={s} src={s} alt="" loading="lazy"
              className={`float ${i === 1 ? 'float-2' : i === 2 ? 'float-3' : ''} absolute top-1/2 w-[38%] max-w-[190px] rounded-[26px] border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,.55)]`}
              style={{
                left: i === 0 ? '4%' : i === 1 ? '31%' : '58%',
                translate: `0 ${i === 1 ? '-56%' : '-44%'}`,
                rotate: i === 0 ? '-6deg' : i === 2 ? '6deg' : '0deg',
                zIndex: i === 1 ? 2 : 1,
              }} />
          ))}
        </div>
      </div>
    </article>
  );
}

function GlowUppCard() {
  const g = DATA.glowupp;
  return (
    <article onPointerMove={onSpot} style={{ ['--spot' as string]: 'rgba(169,155,255,.22)' }}
      className="spot reveal lift relative overflow-hidden rounded-[32px] border border-rule bg-[#F6F4FF] text-[#141225]">
      {/* Glow Upp'in kendi dunyasi: beyaz zemin + lavanta parilti */}
      <div aria-hidden className="absolute -left-24 -top-28 w-[420px] h-[420px] rounded-full bg-[#A99BFF] opacity-60 blur-[90px]" />
      <div aria-hidden className="absolute right-[-120px] bottom-[-120px] w-[320px] h-[320px] rounded-full bg-[#FF9EC4] opacity-25 blur-[100px]" />
      <div className="relative p-7 sm:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <img src={g.icon} alt="" className="float w-28 h-28 sm:w-36 sm:h-36 rounded-[30px] shadow-[0_20px_50px_rgba(91,71,224,.35)]" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="display text-5xl leading-none">{g.name}</h3>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#5B47E0] text-white">{g.status}</span>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-[#141225]/80 max-w-[52ch]">{g.text}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {g.chips.map((c) => (
              <li key={c} className="text-sm font-medium px-3.5 py-1.5 rounded-full bg-white/70 border border-white text-[#3A2F8F]">{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Apps() {
  return (
    <section id="uygulamalar" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <h2 className="reveal display text-6xl sm:text-8xl leading-[0.9]">Uygulamalar</h2>
      <p className="reveal mt-4 text-muted text-lg max-w-[48ch]">Her ürünün kendi karakteri, kendi rengi var.</p>
      <div className="mt-12 space-y-6">
        <PatiFitCard />
        <GlowUppCard />
      </div>
    </section>
  );
}

function Series() {
  const s = DATA.series;
  return (
    <section id="dizi" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="reveal glass rounded-[32px] p-7 sm:p-12 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
        <div>
          <p className="text-sm text-muted">Stüdyo yapımı animasyon dizisi</p>
          <h2 className="mt-2 display text-6xl sm:text-7xl leading-[0.88]">{s.name}</h2>
          <p className="mt-6 text-ink/80 leading-relaxed max-w-[46ch]">{s.text}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {DATA.socials.slice(0, 3).map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-1.5 h-10 px-4 rounded-full border border-rule text-sm font-medium hover:border-white/25">
                {x.name}’da izle <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto scroll-x snap-x -mx-2 px-2 pb-1">
          {s.stills.map((st, i) => (
            <figure key={st.src} className={`snap-start shrink-0 w-[46%] sm:w-[30%] ${i % 2 ? 'mt-8' : ''}`}>
              <img src={st.src} alt={`${s.name}: ${st.label}`} loading="lazy" className="w-full aspect-[9/14] object-cover rounded-2xl border border-rule" />
              <figcaption className="mt-2 text-sm text-muted">{st.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studyo" className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <h2 className="reveal display text-6xl sm:text-8xl leading-[0.88]">Stüdyo</h2>
        <div className="reveal space-y-5 text-lg leading-relaxed text-ink/85">
          {DATA.studio.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-4">
        {DATA.values.map(([t, d]) => (
          <div key={t} onPointerMove={onSpot} className="spot reveal lift glass rounded-3xl p-7">
            <h3 className="text-xl font-medium">{t}</h3>
            <p className="mt-3 text-muted leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ onLegal }: { onLegal: (t: CorporateTab) => void }) {
  const [copied, setCopied] = useState(false);
  const t = useRef<number | undefined>(undefined);
  const copy = async () => {
    try { await navigator.clipboard.writeText(DATA.email); setCopied(true); window.clearTimeout(t.current); t.current = window.setTimeout(() => setCopied(false), 1800); } catch { /* kopyalama desteklenmiyor */ }
  };
  return (
    <section id="iletisim" className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-10">
      <h2 className="reveal display text-[18vw] sm:text-[150px] leading-[0.82]">Birlikte<br />üretelim</h2>
      <p className="reveal mt-7 text-lg text-ink/80 max-w-[44ch]">İş birliği, reklam, basın ya da sadece bir fikir için bize yazın.</p>
      <div className="reveal mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${DATA.email}`} className="press inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-night font-medium hover:bg-white">
          <Mail className="w-4 h-4" aria-hidden /> {DATA.email}
        </a>
        <button onClick={copy} className="press inline-flex items-center gap-2 h-12 px-5 rounded-full glass font-medium hover:border-white/20" aria-live="polite">
          {copied ? <><Check className="w-4 h-4" aria-hidden /> Kopyalandı</> : <><Copy className="w-4 h-4" aria-hidden /> Adresi kopyala</>}
        </button>
      </div>
      <ul className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-rule">
        {DATA.socials.filter((s) => s.url).map((s) => (
          <li key={s.name} className="border-b border-rule">
            <a href={s.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-2 py-5 pr-4">
              <span>
                <span className="block font-medium">{s.name}</span>
                <span className="block text-sm text-muted">{s.handle}</span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
      <footer className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-sm text-muted">
        <div className="flex items-center gap-2.5">
          <img src="/img/emblem-white.png" alt="" className="w-5 h-6 object-contain opacity-80" />
          <span>{DATA.footer}</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Yasal">
          {([['privacy', 'Gizlilik Politikası'], ['terms', 'Kullanım Koşulları'], ['about', 'Hakkımızda'], ['contact', 'İletişim ve Destek']] as [CorporateTab, string][]).map(([k, l]) => (
            <button key={k} onClick={() => onLegal(k)} className="hover:text-ink transition-colors">{l}</button>
          ))}
        </nav>
      </footer>
    </section>
  );
}

export default function App() {
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState<CorporateTab>('privacy');
  const openLegal = (t: CorporateTab) => { setTab(t); setModal(true); };
  useReveal();

  // Eski linkler calismaya devam etsin: #gizlilik, #kullanim-kosullari, #hakkimizda, #destek
  useEffect(() => {
    const map: Record<string, CorporateTab> = { '#gizlilik': 'privacy', '#kullanim-kosullari': 'terms', '#kosullar': 'terms', '#hakkimizda': 'about', '#iletisim-destek': 'contact', '#destek': 'contact' };
    const h = () => { const t = map[window.location.hash]; if (t) openLegal(t); };
    h(); window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="aurora" aria-hidden><i className="a1" /><i className="a2" /><i className="a3" /></div>
      <div className="grain" aria-hidden />
      <div className="relative z-10">
        <Header onLegal={openLegal} />
        <main>
          <Hero />
          <Apps />
          <Series />
          <Studio />
          <Contact onLegal={openLegal} />
        </main>
      </div>
      <div className="legal-scope relative z-50">
        <CorporateModal isOpen={modal} initialTab={tab} onClose={() => setModal(false)} />
      </div>
    </div>
  );
}
