/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { EMBLEM_DATA_URI } from './assets/emblem';
import {
  Dumbbell,
  Clock,
  Calculator,
  Sparkles,
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Code2,
  FolderGit2,
  Menu,
  X
} from 'lucide-react';

/**
 * =======================================================================
 * YUSUF TOLIBOV — KİŞİSEL PORTFOLYO VERİLERİ (DATA)
 * 
 * Tüm site içeriği bu tek nesne üzerinden yönetilir.
 * Yeni bir uygulama veya başarı eklemek için aşağıdaki dizilere bir satır
 * eklemeniz yeterlidir. Boş bırakılan alanlar sitede otomatik olarak gizlenir.
 * =======================================================================
 */
export const DATA = {
  // Giriş Bilgileri
  name: "YUSUF TOLIBOV",
  title: "Uygulama geliştiricisi. Yufixuz Studio kurucusu.",
  emblem: EMBLEM_DATA_URI,
  
  // Profil Fotoğrafı (Kişisel fotoğraf kaldırıldı; stüdyo amblemi ve bilgi kartı görüntülenir)
  photo: "",
  
  // Hakkımda Metni
  about: [
    "Merhaba, ben Yusuf Tolibov; 15 yaşındayım. Yaklaşık 2 yıldır yazılım, kodlama ve yapay zeka ile aktif olarak ilgileniyorum ve 14 yaşımda ilk uygulamamı geliştirdim. Hiçbir kursa gitmeden, tamamen kendi kendime araştırıp öğrenerek kod yazıyorum; yapay zekayı en verimli şekilde kullanarak App Store uygulamaları ve modern web sitesi tasarımları yapıyorum.",
    "Şu anda stüdyom Yufixuz Studio çatısı altında 4 farklı proje üzerinde çalışıyorum; bunlardan ilki olan fitness uygulamam PatiFit neredeyse yayınlanmak üzere (hemen aşağıdan detaylarını inceleyebilirsiniz). Apple Developer Program'a kabul edildim ve en büyük amacım insanların spor yapmasını, ders çalışmasını ve öğrenmesini eğlenceli hale getiren uygulamalar üretmek.",
    "Bir yandan yazılım geliştirirken bir yandan sporumu aksatmıyor, okul derslerimi başarıyla sürdürüyorum. Tüm bu disiplini ve projelerimi elbette her an yanımda olan ailemin desteği sayesinde hayata geçiriyorum."
  ],
  
  // İletişim Bilgileri
  email: "yusuftalibov0892@icloud.com",
  phone: "", // Boş bırakılırsa sitede görünmez
  
  // Uygulamalarım
  apps: [
    {
      id: "patifit",
      name: "PatiFit",
      description: "Kaslı kedi Pat ile adım adım spor yaptıran, lig ve seri sistemli fitness uygulaması.",
      status: "Yakında App Store'da",
      appStoreUrl: "", // Boş bırakıldığında buton görünmez; link yazıldığında buton aktif olur
      iconKey: "fitness"
    },
    {
      id: "odak",
      name: "Odak",
      description: "Kırmızı panda Pawsy ile ders çalışma ve sınava hazırlık uygulaması.",
      status: "Geliştiriliyor",
      appStoreUrl: "",
      iconKey: "study"
    },
    {
      id: "pawsy-matematik",
      name: "Pawsy Matematik",
      description: "Çocuklar için açık dünyalı, gençler için yol haritalı matematik öğrenme uygulaması.",
      status: "Geliştiriliyor",
      appStoreUrl: "",
      iconKey: "math"
    },
    {
      id: "glow-upp",
      name: "Glow Upp",
      description: "Fotoğraftan kalori takibi, su ve hedef takibi yapan kişisel gelişim uygulaması.",
      status: "Geliştiriliyor",
      appStoreUrl: "",
      iconKey: "glow"
    }
  ],
  
  // Projeler ve Başarılar (Dikey Zaman Çizelgesi)
  achievements: [
    {
      year: "2025 Son Çeyreği",
      text: "Yazılımla ilk tanıştığım an; kodlama ve yapay zeka dünyasına adım atarak kendi kendime öğrenmeye başladım."
    },
    {
      year: "2026 İlk Çeyreği",
      text: "Kendi başıma 10'dan fazla web sitesi geliştirdim; mobil uygulama geliştirmeyi ilk hedeflediğim dönem."
    },
    {
      year: "2026",
      text: "Apple Developer Program'a kabul edildim."
    },
    {
      year: "2026",
      text: "İlk uygulamam PatiFit'i App Store'a gönderdim."
    },
    {
      year: "2026",
      text: "Yufixuz Studio'yu kurdum."
    },
    {
      year: "2026",
      text: "\"Pat'in Öğrencisi\" animasyon dizisini başlattım, ilk bölümler Instagram'da binlerce izlenme aldı."
    },
    {
      year: "2026",
      text: "TEKNOFEST için insansız mini denizaltı projesi üzerinde çalışıyorum."
    }
  ],
  
  // Sosyal Medya Hesapları (Boş bırakılan linkler sitede görünmez)
  socials: [
    {
      name: "Instagram",
      handle: "@patifitapp",
      url: "https://www.instagram.com/patifitapp?cplk=aDFlZnE5eWM1eDFj&utm_source=qr",
      icon: "instagram"
    },
    {
      name: "TikTok",
      handle: "@patifitapp",
      url: "https://www.tiktok.com/@patifitapp?_r=1&_t=ZN-9AjgfjES3xC",
      icon: "tiktok"
    },
    {
      name: "YouTube",
      handle: "@patifitapp",
      url: "https://youtube.com/@patifitapp?si=TWYAOYcmgcmppfHC",
      icon: "youtube"
    },
    {
      name: "Facebook",
      handle: "Yufixuz Studio",
      url: "https://www.facebook.com/share/19hcLc1DG2/?mibextid=wwXIfr",
      icon: "facebook"
    },
    {
      name: "GitHub",
      handle: "yusuftolibov",
      url: "", // Boş bırakıldığı için otomatik gizlenir; link eklendiğinde görünür
      icon: "github"
    }
  ],
  
  // Altbilgi
  footerText: "© 2026 Yusuf Tolibov · Yufixuz Studio"
};

// Uygulama ikon haritası (minimalist monokrom mat beyaz çizgiler)
function renderAppIcon(iconKey: string) {
  const iconProps = { className: "w-6 h-6 stroke-[1.5] text-[#F5F4F0]" };
  switch (iconKey) {
    case 'fitness':
      return <Dumbbell {...iconProps} />;
    case 'study':
      return <Clock {...iconProps} />;
    case 'math':
      return <Calculator {...iconProps} />;
    case 'glow':
      return <Sparkles {...iconProps} />;
    default:
      return <Code2 {...iconProps} />;
  }
}

// Sosyal medya SVG çizgi ikonları (Minimalist tek renk)
function renderSocialIcon(icon: string) {
  const cls = "w-5 h-5 stroke-[1.5] fill-none stroke-current";
  switch (icon) {
    case 'instagram':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      );
    case 'youtube':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      );
    case 'facebook':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case 'github':
      return (
        <svg className={cls} viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    default:
      return <FolderGit2 className={cls} />;
  }
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sekme ikonunun (favicon) tarayıcı tarafından anında ve önbelleğe takılmadan algılanması için dinamik bağlama
  useEffect(() => {
    try {
      const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon'], link[rel*='apple-touch-icon']");
      if (links.length > 0) {
        links.forEach((link) => {
          link.href = EMBLEM_DATA_URI;
        });
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.type = 'image/png';
        newLink.href = EMBLEM_DATA_URI;
        document.head.appendChild(newLink);
      }
    } catch {
      // ignore
    }
  }, []);

  // Filtrelenmiş sosyal medya hesapları (boş linkler gizlenir)
  const activeSocials = DATA.socials.filter(s => Boolean(s.url && s.url.trim() !== ""));

  const handleCopyEmail = () => {
    if (!DATA.email) return;
    navigator.clipboard.writeText(DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F4F0] font-sans paper-texture selection:bg-[#F5F4F0] selection:text-[#0A0A0A]">
      {/* ================= ÜST MENÜ (TOP BAR CONTRACT) ================= */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Emblem */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-base sm:text-lg font-black tracking-tighter uppercase whitespace-nowrap shrink-0 text-[#F5F4F0] hover:opacity-75 transition-opacity"
          >
            {DATA.emblem && (
              <img
                src={DATA.emblem}
                alt="Yufixuz Studio"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                }}
              />
            )}
            <span>Yusuf Tolibov</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#A3A3A3]">
            <a href="#hakkimda" className="editorial-link hover:text-[#F5F4F0] transition-colors">
              Hakkımda
            </a>
            <a href="#uygulamalar" className="editorial-link hover:text-[#F5F4F0] transition-colors">
              Uygulamalar
            </a>
            <a href="#basarilar" className="editorial-link hover:text-[#F5F4F0] transition-colors">
              Zaman Çizelgesi
            </a>
            {activeSocials.length > 0 && (
              <a href="#sosyal" className="editorial-link hover:text-[#F5F4F0] transition-colors">
                Sosyal
              </a>
            )}
            <a href="#iletisim" className="editorial-link hover:text-[#F5F4F0] transition-colors">
              İletişim
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {DATA.email && (
              <a
                href={`mailto:${DATA.email}`}
                className="px-4 py-2 text-xs uppercase font-bold tracking-wider bg-[#F5F4F0] text-[#0A0A0A] hover:bg-white transition-colors whitespace-nowrap"
              >
                İletişime Geç
              </a>
            )}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F4F0] hover:opacity-70"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobil Navigasyon Paneli */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#262626] bg-[#0A0A0A] px-6 py-5 flex flex-col gap-4 text-xs uppercase font-bold tracking-wider text-[#F5F4F0]">
            <a
              href="#hakkimda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A3A3A3]"
            >
              Hakkımda
            </a>
            <a
              href="#uygulamalar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A3A3A3]"
            >
              Uygulamalar
            </a>
            <a
              href="#basarilar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A3A3A3]"
            >
              Zaman Çizelgesi
            </a>
            {activeSocials.length > 0 && (
              <a
                href="#sosyal"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#A3A3A3]"
              >
                Sosyal Medya
              </a>
            )}
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#A3A3A3]"
            >
              İletişim
            </a>
          </div>
        )}
      </header>

      {/* Ana Konteyner */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ================= BÖLÜM 1: GİRİŞ (HERO) ================= */}
        <section className="pt-16 sm:pt-24 pb-16 md:pb-24 border-b border-[#262626]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sol / Ana Alan: Ekranı kaplayan dev mat beyaz başlık ve açıklama */}
            <div className="space-y-8 lg:col-span-7 xl:col-span-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-mono text-[#888888] block">
                  Portfolyo · 2026
                </span>
                
                {/* Çok büyük, 900 ağırlıkta mat beyaz başlık - açılışta yumuşak belirme */}
                <h1 className="animate-fade-in text-5xl sm:text-7xl md:text-8xl xl:text-[7.25rem] font-black uppercase tracking-tighter leading-[0.88] text-[#F5F4F0] text-balance break-words">
                  {DATA.name}
                </h1>
              </div>

              {/* Alt Metin */}
              {DATA.title && (
                <p className="animate-fade-in-delayed text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#D4D4D4] max-w-2xl leading-snug">
                  {DATA.title}
                </p>
              )}

              {/* Hızlı eylemler */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs uppercase font-bold tracking-wider">
                <a
                  href="#uygulamalar"
                  className="editorial-link inline-flex items-center gap-1.5 text-[#F5F4F0] hover:opacity-80"
                >
                  <span>Uygulamaları Keşfet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {DATA.email && (
                  <a
                    href={`mailto:${DATA.email}`}
                    className="editorial-link inline-flex items-center gap-1.5 text-[#888888] hover:text-[#F5F4F0]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{DATA.email}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Sağ Alan: Sade Kimlik ve Bilgi Kartı ("İkinci şey") - Koyu mat tema */}
            <div className="lg:col-span-5 xl:col-span-4 lg:pt-2">
              <div className="border border-[#262626] bg-[#121212] p-6 sm:p-7 relative shadow-[4px_4px_0px_0px_#262626]">
                {/* 1. Logo (Amblem) */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1A1A1A] border border-[#262626] p-2 flex items-center justify-center shrink-0">
                    <img
                      src={DATA.emblem}
                      alt="Logo"
                      className="w-full h-full object-contain invert"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_e2250dd1.png';
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888] font-bold">
                    Yufixuz Studio
                  </span>
                </div>

                {/* Sadece İstenen 5 Bilgi */}
                <div className="divide-y divide-[#262626] text-sm">
                  {/* İsim Soyisim */}
                  <div className="pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
                      İsim Soyisim
                    </span>
                    <span className="text-base sm:text-lg font-black tracking-tight text-[#F5F4F0]">
                      Yusuf Tolibov
                    </span>
                  </div>

                  {/* Yaş */}
                  <div className="py-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
                      Yaş
                    </span>
                    <span className="text-sm sm:text-base font-bold font-mono text-[#F5F4F0]">
                      15
                    </span>
                  </div>

                  {/* Meslek */}
                  <div className="py-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
                      Meslek
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#F5F4F0]">
                      Bağımsız Yazılım ve Mobil Uygulama Geliştiricisi
                    </span>
                  </div>

                  {/* Şu Anki Eğitim Durumu */}
                  <div className="py-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block">
                      Şu Anki Eğitim Durumu
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#F5F4F0]">
                      Lise Öğrencisi
                    </span>
                  </div>

                  {/* Aktif Projeler */}
                  <div className="pt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block mb-2">
                      Aktif Projeler
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {DATA.apps.map((app) => (
                        <span
                          key={app.id}
                          className="px-2.5 py-1 text-xs font-mono font-bold border border-[#262626] bg-[#1A1A1A] text-[#F5F4F0]"
                        >
                          {app.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BÖLÜM 2: HAKKIMDA ================= */}
        {DATA.about && (
          <section id="hakkimda" className="py-20 md:py-28 border-b border-[#262626]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                  01 / Özet
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F4F0]">
                  Hakkımda
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6">
                {Array.isArray(DATA.about) ? (
                  DATA.about.map((paragraph, idx) => (
                    <p key={idx} className="text-lg sm:text-xl md:text-2xl font-light text-[#D4D4D4] leading-relaxed tracking-tight text-balance">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-[#D4D4D4] leading-relaxed tracking-tight text-balance">
                    {DATA.about}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ================= BÖLÜM 3: UYGULAMALARIM ================= */}
        {DATA.apps && DATA.apps.length > 0 && (
          <section id="uygulamalar" className="py-20 md:py-28 border-b border-[#262626]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                  02 / Portfolyo
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F4F0]">
                  Uygulamalarım
                </h2>
              </div>
              <span className="text-xs font-mono text-[#888888] tracking-wider uppercase">
                Toplam {DATA.apps.length} Proje
              </span>
            </div>

            {/* Kartlar Izgarası: Keskin köşeli, koyu mat tema */}
            <div className="grid grid-cols-1 md:grid-cols-2 border border-[#262626]">
              {DATA.apps.map((app, index) => {
                const hasAppStoreLink = Boolean(app.appStoreUrl && app.appStoreUrl.trim() !== "");
                return (
                  <div
                    key={app.id || index}
                    className="p-8 sm:p-10 flex flex-col justify-between border-b md:odd:border-r border-[#262626] bg-[#111111] hover:bg-[#161616] transition-colors"
                  >
                    <div>
                      {/* Üst Kısım: İkon ve Durum */}
                      <div className="flex items-center justify-between gap-4 mb-8">
                        <div className="p-3 border border-[#262626] bg-[#1A1A1A]">
                          {renderAppIcon(app.iconKey)}
                        </div>
                        {app.status && (
                          <span className="text-xs font-mono tracking-wider uppercase text-[#A3A3A3] border-b border-[#262626] pb-0.5">
                            {app.status}
                          </span>
                        )}
                      </div>

                      {/* Başlık */}
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5F4F0] mb-3">
                        {app.name}
                      </h3>

                      {/* Tek Cümle Açıklama */}
                      <p className="text-base text-[#A3A3A3] leading-relaxed mb-8">
                        {app.description}
                      </p>
                    </div>

                    {/* Alt Kısım: App Store Linki (SADECE link doluysa buton görünür) */}
                    <div>
                      {hasAppStoreLink ? (
                        <a
                          href={app.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between w-full sm:w-auto gap-4 px-5 py-3 text-xs uppercase font-bold tracking-wider bg-[#F5F4F0] text-[#0A0A0A] hover:bg-white transition-colors"
                        >
                          <span>App Store'da İncele</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#737373] border-t border-[#262626]">
                          <span>iOS / Yufixuz Studio</span>
                          <span>{app.status}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================= BÖLÜM 4: PROJELER VE BAŞARILAR (DİKEY ZAMAN ÇİZELGESİ) ================= */}
        {DATA.achievements && DATA.achievements.length > 0 && (
          <section id="basarilar" className="py-20 md:py-28 border-b border-[#262626]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                  03 / Yolculuk
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F4F0]">
                  Projeler ve Başarılar
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg text-[#888888] max-w-xl">
                  Geliştirme yolculuğumda kaydettiğim önemli adımlar ve üzerinde çalıştığım bağımsız projeler.
                </p>
              </div>
            </div>

            {/* Dikey Zaman Çizelgesi */}
            <div className="border-t border-[#262626]">
              {DATA.achievements.map((item, index) => (
                <div
                  key={index}
                  className="py-8 border-b border-[#262626] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline hover:bg-[#141414] transition-colors px-2 sm:px-4"
                >
                  {/* Yıl */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#F5F4F0] inline-block shrink-0"></span>
                    <span className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#F5F4F0]">
                      {item.year}
                    </span>
                  </div>

                  {/* Başarı Metni */}
                  <div className="md:col-span-9">
                    <p className="text-lg sm:text-xl font-medium text-[#E5E5E5] leading-snug tracking-tight">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= BÖLÜM 5: SOSYAL MEDYA ================= */}
        {activeSocials.length > 0 && (
          <section id="sosyal" className="py-20 md:py-28 border-b border-[#262626]">
            <div className="mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                04 / Topluluk
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F4F0]">
                Sosyal Medya
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#262626]">
              {activeSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 sm:p-8 flex flex-col justify-between border-b sm:odd:border-r lg:border-r border-[#262626] bg-[#111111] hover:bg-[#F5F4F0] hover:text-[#0A0A0A] text-[#F5F4F0] transition-colors group"
                >
                  <div className="flex items-center justify-between gap-4 mb-10">
                    <span className="text-[#F5F4F0] group-hover:text-[#0A0A0A] transition-colors">
                      {renderSocialIcon(social.icon)}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-[#0A0A0A] transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-[#F5F4F0] group-hover:text-[#0A0A0A] transition-colors">
                      {social.name}
                    </h3>
                    {social.handle && (
                      <span className="text-xs font-mono opacity-60 text-[#888888] group-hover:text-[#333333] transition-colors">
                        {social.handle}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ================= BÖLÜM 6: İLETİŞİM ================= */}
        <section id="iletisim" className="py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-2">
                05 / Bağlantı
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F4F0] mb-6">
                Birlikte Üretelim
              </h2>
              <p className="text-base sm:text-lg text-[#888888] leading-relaxed max-w-md">
                Yeni bir uygulama fikri, iş birliği veya sadece selam vermek için istediğiniz zaman bana e-posta gönderebilirsiniz.
              </p>

              {DATA.phone && DATA.phone.trim() !== '' && (
                <div className="mt-6 text-sm font-mono text-[#F5F4F0]">
                  Telefon: <a href={`tel:${DATA.phone}`} className="editorial-link font-bold">{DATA.phone}</a>
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              {DATA.email && (
                <div className="border border-[#262626] p-8 sm:p-12 bg-[#111111] space-y-8">
                  <div>
                    <span className="text-xs uppercase font-mono text-[#888888] tracking-wider block mb-2">
                      Doğrudan E-Posta
                    </span>
                    <a
                      href={`mailto:${DATA.email}`}
                      className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#F5F4F0] break-all editorial-link hover:text-white"
                    >
                      {DATA.email}
                    </a>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={`mailto:${DATA.email}`}
                      className="px-6 py-3.5 text-xs uppercase font-bold tracking-wider bg-[#F5F4F0] text-[#0A0A0A] hover:bg-white transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>E-Posta Gönder</span>
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="px-6 py-3.5 text-xs uppercase font-bold tracking-wider border border-[#333333] text-[#F5F4F0] hover:bg-[#1A1A1A] transition-colors inline-flex items-center gap-2"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Kopyalandı</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Adresi Kopyala</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ================= ALTBİLGİ (FOOTER) ================= */}
      <footer className="border-t border-[#262626] py-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <div className="flex items-center gap-2">
            {DATA.emblem && (
              <img
                src={DATA.emblem}
                alt="Yufixuz Studio"
                className="w-5 h-5 object-contain shrink-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                }}
              />
            )}
            <span>{DATA.footerText}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F5F4F0] transition-colors">
              Başa Dön ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
