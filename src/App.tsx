/**
 * Yusuf Tolibov — kisisel site (yufixuz.com)
 * Tum icerik DATA nesnesinde. Yeni uygulama, bolum ya da basari eklemek icin
 * ilgili diziye bir satir eklemen yeterli. Bos birakilan linkler sitede gizlenir.
 */
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Copy, Check, Menu, X } from 'lucide-react';
import { CorporateModal, CorporateTab } from './components/CorporateModal';

export const DATA = {
  name: ['YUSUF', 'TOLIBOV'],
  title: "15 yaşında, kendi kendine öğrenen uygulama geliştiricisi. Yufixuz Studio'nun kurucusu.",
  email: 'yusuftalibov0892@icloud.com',

  about: [
    'Merhaba, ben Yusuf Tolibov; 15 yaşındayım. Yaklaşık 2 yıldır yazılım, kodlama ve yapay zeka ile aktif olarak ilgileniyorum ve 14 yaşımda ilk uygulamamı geliştirdim. Hiçbir kursa gitmeden, tamamen kendi kendime araştırıp öğrenerek kod yazıyorum; yapay zekayı en verimli şekilde kullanarak App Store uygulamaları ve modern web sitesi tasarımları yapıyorum.',
    "Şu anda stüdyom Yufixuz Studio çatısı altında 5 farklı proje üzerinde çalışıyorum; bunlardan ilki olan fitness uygulamam PatiFit, App Store incelemesinde. Apple Developer Program'a kabul edildim ve en büyük amacım insanların spor yapmasını, ders çalışmasını ve öğrenmesini eğlenceli hale getiren uygulamalar üretmek.",
    'Bir yandan yazılım geliştirirken bir yandan sporumu aksatmıyor, okul derslerimi başarıyla sürdürüyorum. Tüm bu disiplini ve projelerimi elbette her an yanımda olan ailemin desteği sayesinde hayata geçiriyorum.',
  ],

  // Vitrindeki uygulama
  featured: {
    name: 'PatiFit',
    icon: '/img/patifit-icon.png',
    status: 'App Store incelemesinde',
    appStoreUrl: '', // link yazilinca "App Store'da indir" butonu cikar
    text: 'Spor yapmayı her gün küçük görevlere bölen bir fitness uygulaması. Kısa bir seviye testinden sonra sana özel bir yol haritası çıkıyor; maskot kaslı kedi Pat her hareketi önce animasyonla gösteriyor, sonra sayaç seninle birlikte sayıyor.',
    highlights: [
      'Seviye testiyle başlayan, sana özel yol haritası',
      'Kamerayla şınav sayan canlı düellolar',
      "XP, elmas, seri ve Bronz'dan Pro'ya ligler",
      '4–12 yaş için ebeveyn kodlu çocuk modu',
    ],
    specs: [
      ['Platform', 'iPhone'],
      ['Diller', 'Türkçe, İngilizce, Arapça, Çince'],
      ['Fiyat', 'Ücretsiz, uygulama içi satın alma var'],
    ],
    shots: ['/img/tr-06-yol.webp', '/img/tr-09-sayac.webp', '/img/tr-13-lig.webp'],
  },

  // Yoldaki diger uygulamalar
  apps: [
    { name: 'Odak', text: 'Kırmızı panda Pawsy ile ders çalışma ve sınava hazırlık uygulaması.', status: 'Geliştiriliyor' },
    { name: 'Pawsy Matematik', text: 'Çocuklar için açık dünyalı, gençler için yol haritalı matematik öğrenme uygulaması.', status: 'Geliştiriliyor' },
    { name: 'Glow Upp', text: '15 yaş ve üstü için kalori, antrenman ve “Ne yesem?” önerileri sunan spor uygulaması.', status: 'Geliştiriliyor' },
    { name: 'Moto Kurye', text: 'Açık şehir haritasında motosikletle paket taşıdığın kurye oyunu.', status: 'Geliştiriliyor' },
  ],

  series: {
    name: "Pat'in Öğrencisi",
    text: "Sınıfta herkesin dalga geçtiği Emre, PatiFit'i açınca Pat ona “Artık ben senin hocanım” diyor. Her bölümde Emre'nin forma girme macerası devam ediyor; seslendirme, animasyon ve kurgu stüdyoda yapılıyor.",
    episodes: 11,
    stills: [
      { src: '/img/ep1.jpg', label: 'Bölüm 8 · Rövanş' },
      { src: '/img/ep2.jpg', label: 'Bölüm 10 · Yeni Ortak' },
      { src: '/img/ep3.jpg', label: "Bölüm 11 · Deniz'in Sırrı" },
      { src: '/img/ep4.jpg', label: 'Sen karar ver: A mı, B mi?' },
    ],
  },

  timeline: [
    ['2025 sonu', 'Yazılımla tanıştım; kodlama ve yapay zekayı kendi kendime öğrenmeye başladım.'],
    ['2026 başı', "Kendi başıma 10'dan fazla web sitesi geliştirdim; mobil uygulamaya geçmeye karar verdim."],
    ['Ekim 2026', "Apple Developer Program'a kabul edildim."],
    ['Ekim 2026', "İlk uygulamam PatiFit'i App Store'a gönderdim."],
    ['Ekim 2026', "Yufixuz Studio'yu kurdum."],
    ['Ekim 2026', "“Pat'in Öğrencisi” animasyon dizisini başlattım; ilk bölümler Instagram'da binlerce izlenme aldı."],
    ['2026', 'TEKNOFEST için insansız mini denizaltı projesi üzerinde çalışıyorum.'],
  ],

  socials: [
    { name: 'Instagram', handle: '@patifitapp', url: 'https://www.instagram.com/patifitapp' },
    { name: 'TikTok', handle: '@patifitapp', url: 'https://www.tiktok.com/@patifitapp' },
    { name: 'YouTube', handle: '@patifitapp', url: 'https://youtube.com/@patifitapp' },
    { name: 'Facebook', handle: 'Yufixuz Studio', url: 'https://www.facebook.com/share/19hcLc1DG2/' },
    { name: 'GitHub', handle: 'yusuftolibov', url: '' },
  ],
  footer: '© 2026 Yusuf Tolibov · Yufixuz Studio',
};

const NAV = [
  ['#uygulamalar', 'Uygulamalar'],
  ['#dizi', 'Dizi'],
  ['#hakkimda', 'Hakkımda'],
  ['#iletisim', 'İletişim'],
];

function Header({ onLegal }: { onLegal: (t: CorporateTab) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-rule">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Yufixuz Studio, başa dön">
          <img src="/img/emblem.png" alt="" className="w-8 h-8 object-contain" />
          <span lang="en" className="display text-2xl leading-none pt-0.5">Yufixuz</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-muted" aria-label="Ana menü">
          {NAV.map(([h, l]) => <a key={h} href={h} className="hover:text-ink transition-colors">{l}</a>)}
        </nav>
        <a href={`mailto:${DATA.email}`} className="press hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-red">
          E-posta yaz
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
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 sm:pt-16">
      <div>
        <div className="min-w-0">
          <h1 className="display text-[clamp(5.2rem,17vw,14rem)] leading-[0.8]">
            {DATA.name.map((w, n) => (
              <span key={w} className="block overflow-x-visible overflow-y-clip pb-[0.06em] pr-[0.1em]"><span className={`rise ${n ? 'rise-2' : ''}`}>{w}</span></span>
            ))}
          </h1>
          <p className="fade-in mt-6 max-w-[34ch] text-xl sm:text-2xl leading-snug text-ink/80">{DATA.title}</p>
        </div>
      </div>
      <div className="fade-in mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-ink">
        {[
          ['PatiFit', DATA.featured.status, true],
          ["Pat'in Öğrencisi", `${DATA.series.episodes} bölüm yayında`, false],
          ['Yufixuz Studio', `${DATA.apps.length + 1} proje üzerinde çalışıyor`, false],
        ].map(([a, b, live], n) => (
          <div key={n} className={`py-5 ${n ? 'sm:pl-6 sm:border-l border-t sm:border-t-0 border-rule' : ''}`}>
            <p className="text-sm text-muted">{a}</p>
            <p className="mt-1 text-lg font-medium flex items-center gap-2.5">
              {live && <span className="live-dot relative w-2.5 h-2.5 rounded-full bg-red shrink-0" />}
              {b}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  const f = DATA.featured;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
      <div>
        <div className="flex items-center gap-5">
          <img src={f.icon} alt="" width={88} height={88} className="w-[88px] h-[88px] rounded-[22px] shadow-[0_8px_24px_-10px_rgba(200,16,46,.6)]" />
          <div>
            <h3 lang="en" className="display text-6xl sm:text-7xl leading-none">{f.name}</h3>
            <p className="mt-2 inline-flex items-center gap-2 text-[15px] font-medium text-red">
              <span className="live-dot relative w-2 h-2 rounded-full bg-red" />{f.status}
            </p>
          </div>
        </div>
        <p className="mt-7 text-lg leading-relaxed text-ink/80 max-w-[52ch]">{f.text}</p>
        <ul className="mt-7 space-y-3">
          {f.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[17px]">
              <svg className="w-5 h-5 mt-0.5 shrink-0 text-red" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {h}
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-rule pt-6">
          {f.specs.map(([k, v]) => <div key={k}><dt className="text-sm text-muted">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>)}
        </dl>
        {f.appStoreUrl && (
          <a href={f.appStoreUrl} target="_blank" rel="noopener noreferrer" className="press mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-paper font-medium hover:bg-red">
            App Store'da indir <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="relative h-[420px] sm:h-[560px]" aria-label="PatiFit ekran görüntüleri">
        {f.shots.map((s, n) => (
          <div
            key={s}
            className="absolute top-1/2 left-1/2 w-[38%] sm:w-[46%] max-w-[240px] rounded-[30px] bg-ink p-[6px] shadow-[0_24px_50px_-20px_rgba(17,17,17,.55)]"
            style={{ transform: `translate(calc(-50% + ${(n - 1) * 62}%), calc(-50% + ${n === 1 ? -4 : 6}%)) rotate(${(n - 1) * 6}deg)`, zIndex: n === 1 ? 3 : 1 }}
          >
            <img src={s} alt="" loading="lazy" width={420} height={908} className="w-full h-auto rounded-[24px] block" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Apps() {
  return (
    <section id="uygulamalar" className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-28 sm:pt-36">
      <h2 className="display text-6xl sm:text-8xl leading-[0.85] mb-14">Uygulamalar</h2>
      <Featured />
      <h3 className="mt-24 text-lg font-medium text-muted">Sırada olanlar</h3>
      <ul className="mt-4 border-t border-ink">
        {DATA.apps.map((a) => (
          <li key={a.name} className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr_auto] gap-x-10 gap-y-2 items-baseline py-7 border-b border-rule">
            <span lang={a.name === 'Moto Kurye' ? 'tr' : 'en'} className="display text-4xl sm:text-5xl leading-none">{a.name}</span>
            <span className="text-[17px] leading-relaxed text-ink/75 max-w-[56ch]">{a.text}</span>
            <span className="text-sm text-muted whitespace-nowrap">{a.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Series() {
  const s = DATA.series;
  const links = DATA.socials.filter((x) => x.url && ['Instagram', 'TikTok', 'YouTube'].includes(x.name));
  return (
    <section id="dizi" className="mt-28 sm:mt-36 bg-night text-paper py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-[15px] text-night-muted">Animasyon dizisi · {s.episodes} bölüm</p>
          <h2 className="display text-6xl sm:text-8xl leading-[0.85] mt-3">{s.name}</h2>
          <p className="mt-7 text-lg leading-relaxed text-paper/80 max-w-[46ch]">{s.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {links.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="press inline-flex items-center gap-2 h-11 px-5 rounded-full border border-paper/25 text-[15px] font-medium hover:bg-paper hover:text-ink">
                {l.name}{({ Instagram: "'da", TikTok: "'ta", YouTube: "'da" } as Record<string, string>)[l.name]} izle <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="scroll-x -mx-5 px-5 sm:mx-0 sm:px-0 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-5 sm:scroll-pl-0">
          {s.stills.map((e) => (
            <figure key={e.src} className="snap-start shrink-0 w-[58%] sm:w-[calc(33.333%-11px)] lg:w-[calc(33.333%-11px)]">
              <img src={e.src} alt={e.label} loading="lazy" width={480} height={853} className="w-full h-auto rounded-2xl outline outline-1 -outline-offset-1 outline-white/10" />
              <figcaption className="mt-3 text-sm text-night-muted">{e.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkimda" className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-28 sm:pt-36">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
        <h2 className="display text-6xl sm:text-8xl leading-[0.85]">Hakkımda</h2>
        <div className="space-y-6 text-xl leading-relaxed text-ink/85 max-w-[60ch]">
          {DATA.about.map((p, n) => <p key={n}>{p}</p>)}
        </div>
      </div>
      <h3 className="mt-24 text-lg font-medium text-muted">Yolculuk</h3>
      <ol className="mt-4 border-t border-ink">
        {DATA.timeline.map(([y, t], n) => (
          <li key={n} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-10 gap-y-1 py-5 border-b border-rule">
            <span className="text-[15px] font-medium text-muted tnum">{y}</span>
            <span className="text-lg leading-snug">{t}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact({ onLegal }: { onLegal: (t: CorporateTab) => void }) {
  const [copied, setCopied] = useState(false);
  const socials = DATA.socials.filter((s) => s.url);
  const copy = () => { navigator.clipboard?.writeText(DATA.email); setCopied(true); setTimeout(() => setCopied(false), 2200); };
  return (
    <section id="iletisim" className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16">
      <h2 className="display text-[clamp(4rem,12vw,9.5rem)] leading-[0.82]">Birlikte<br />üretelim</h2>
      <p className="mt-7 text-xl leading-relaxed text-ink/80 max-w-[44ch]">Yeni bir uygulama fikri, iş birliği ya da sadece selam vermek için bana yazabilirsin.</p>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <a href={`mailto:${DATA.email}`} className="press inline-flex items-center gap-3 h-14 px-7 rounded-full bg-ink text-paper text-base sm:text-lg font-medium hover:bg-red">
          <Mail className="w-5 h-5 shrink-0" />{DATA.email}
        </a>
        <button onClick={copy} className="press inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full border border-ink/25 font-medium hover:bg-ink/5">
          {copied ? <><Check className="w-5 h-5" />Kopyalandı</> : <><Copy className="w-5 h-5" />Adresi kopyala</>}
        </button>
      </div>
      <ul className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-ink">
        {socials.map((s) => (
          <li key={s.name} className="border-b border-rule">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-3 py-6 pr-4">
              <span><span className="block text-xl font-medium">{s.name}</span><span className="text-[15px] text-muted">{s.handle}</span></span>
              <ArrowUpRight className="w-5 h-5 mt-1 text-muted group-hover:text-red transition-colors" />
            </a>
          </li>
        ))}
      </ul>
      <footer className="mt-20 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[15px] text-muted">
        <div className="flex items-center gap-3">
          <img src="/img/emblem.png" alt="" className="w-7 h-7 object-contain" />
          <span>{DATA.footer}</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Yasal">
          {([['privacy', 'Gizlilik Politikası'], ['terms', 'Kullanım Koşulları'], ['about', 'Hakkımızda'], ['contact', 'İletişim ve Destek']] as [CorporateTab, string][]).map(([t, l]) => (
            <button key={t} onClick={() => onLegal(t)} className="hover:text-ink transition-colors">{l}</button>
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

  // Eski linkler calismaya devam etsin: #gizlilik, #kullanim-kosullari, #hakkimizda, #destek
  useEffect(() => {
    const map: Record<string, CorporateTab> = { '#gizlilik': 'privacy', '#kullanim-kosullari': 'terms', '#kosullar': 'terms', '#hakkimizda': 'about', '#iletisim-destek': 'contact', '#destek': 'contact' };
    const h = () => { const t = map[window.location.hash]; if (t) openLegal(t); };
    h(); window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header onLegal={openLegal} />
      <main>
        <Hero />
        <Apps />
        <Series />
        <About />
        <Contact onLegal={openLegal} />
      </main>
      <CorporateModal isOpen={modal} initialTab={tab} onClose={() => setModal(false)} />
    </div>
  );
}
