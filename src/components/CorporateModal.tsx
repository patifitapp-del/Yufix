import React, { useState, useEffect, useRef } from 'react';
import { X, Shield, FileText, Info, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export type CorporateTab = 'privacy' | 'terms' | 'about' | 'contact';

interface CorporateModalProps {
  isOpen: boolean;
  initialTab?: CorporateTab;
  onClose: () => void;
}

const EMAIL = 'yusuftalibov0892@icloud.com';
export const UPDATED = '14 Kasım 2026';

const TABS: { key: CorporateTab; label: string; Icon: typeof Shield }[] = [
  { key: 'privacy', label: 'Gizlilik', Icon: Shield },
  { key: 'terms', label: 'Kullanım Koşulları', Icon: FileText },
  { key: 'about', label: 'Hakkımızda', Icon: Info },
  { key: 'contact', label: 'İletişim', Icon: Mail },
];

/* Baslik + paragraf blogu */
export function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-6 border-t border-rule first:border-t-0 first:pt-0">
      <h3 className="text-lg font-medium text-ink">{title}</h3>
      <div className="mt-2.5 space-y-3 text-[15px] leading-relaxed text-ink/75">{children}</div>
    </section>
  );
}
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4 hover:decoration-[#C9C1FF]">{children}</a>
);

export function Privacy() {
  return (
    <>
      <Block title="Kısaca">
        <p>yufixuz.com'u gezmek için hesap açman ya da bilgi vermen gerekmez. Sitede reklam gösterildiği için Google çerez kullanabilir. Bu sayfa hangi verinin neden toplandığını ve nasıl kapatabileceğini anlatır.</p>
      </Block>
      <Block title="Reklamlar ve çerezler">
        <p>Sitede Google AdSense reklamları yer alır. Google ve iş ortakları, sana bu sitedeki ve başka sitelerdeki ziyaretlerine göre reklam göstermek için çerez kullanabilir.</p>
        <p>Kişiselleştirilmiş reklamları <A href="https://adssettings.google.com">Google Reklam Ayarları</A> sayfasından, diğer reklam şirketlerininkini <A href="https://www.aboutads.info/choices/">aboutads.info</A> adresinden kapatabilirsin. Tarayıcı ayarlarından tüm çerezleri de engelleyebilirsin.</p>
      </Block>
      <Block title="Otomatik kaydedilen bilgiler">
        <p>Sitemizi barındıran sunucu, her web sitesinde olduğu gibi IP adresi, tarayıcı türü, ziyaret zamanı ve geldiğin sayfa gibi teknik kayıtlar tutar. Bu kayıtlar sadece sitenin çalışması, güvenliği ve hataların bulunması için kullanılır; kimseye satılmaz.</p>
      </Block>
      <Block title="Uygulamalarımız">
        <p>PatiFit ve Glow Upp'ın hangi verileri işlediği, App Store sayfalarındaki “Uygulama Gizliliği” bölümünde ve uygulama içindeki gizlilik metninde açıklanır. PatiFit'te hareket saymak için kullanılan kamera görüntüsü telefonda işlenir, sunucuya gönderilmez.</p>
      </Block>
      <Block title="Hakların">
        <p>KVKK ve GDPR kapsamında hakkında veri işlenip işlenmediğini öğrenebilir, bu verilerin düzeltilmesini ya da silinmesini isteyebilirsin. Bunun için <a href={`mailto:${EMAIL}`} className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">{EMAIL}</a> adresine yazman yeterli.</p>
      </Block>
    </>
  );
}

export function Terms() {
  return (
    <>
      <Block title="Kabul">
        <p>yufixuz.com'u ve Yufixuz Studio uygulamalarını kullanarak bu koşulları kabul etmiş olursun. Uygulamaların kendi koşulları varsa öncelik onlarındır.</p>
      </Block>
      <Block title="Telif hakları">
        <p>Sitedeki logolar, Pat karakteri, ekran görüntüleri, animasyonlar, metinler ve PatiFit, Glow Upp, Pat'in Öğrencisi adları Yufixuz Studio'ya aittir. İzin almadan kopyalanamaz, çoğaltılamaz ya da ticari amaçla kullanılamaz.</p>
      </Block>
      <Block title="Kullanım kuralları">
        <p>Siteyi ve uygulamaları yasal amaçlarla kullanmalısın. Siteye saldırmak, otomatik olarak veri toplamak ya da sunucuyu bilerek yormak yasaktır.</p>
      </Block>
      <Block title="Sorumluluk">
        <p>Site ve uygulamalar “olduğu gibi” sunulur; her zaman kesintisiz ya da hatasız çalışacakları garanti edilmez. Uygulamalardaki spor ve beslenme önerileri genel bilgi amaçlıdır, doktor tavsiyesinin yerini tutmaz.</p>
      </Block>
      <Block title="Değişiklikler">
        <p>Bu koşullar zaman zaman güncellenebilir. Güncel hali her zaman bu sayfadadır.</p>
      </Block>
    </>
  );
}

function About() {
  return (
    <>
      <Block title="Biz kimiz">
        <p>Yufixuz Studio, spor yapmayı, öğrenmeyi ve sağlıklı yaşamayı eğlenceli hale getiren mobil uygulamalar geliştiren bağımsız bir stüdyo. Fikirden tasarıma, animasyondan yayına kadar her şeyi kendimiz yapıyoruz.</p>
      </Block>
      <Block title="Ürünlerimiz">
        <ul className="space-y-3">
          <li><span className="text-ink font-medium">PatiFit</span> — Kaslı kedi Pat'le evde spor. App Store'da yayında, Android yakında.</li>
          <li><span className="text-ink font-medium">Glow Upp</span> — Beslenme, antrenman ve koşu koçu. Yakında.</li>
          <li><span className="text-ink font-medium">Pat'in Öğrencisi</span> — PatiFit evreninde geçen animasyon mini dizisi.</li>
        </ul>
      </Block>
      <Block title="Neye önem veriyoruz">
        <p>İnsanlar sevdikleri şeye geri döner; o yüzden her ürünü önce eğlenceli olsun diye tasarlıyoruz. Her yaşa uygun, güvenli ve gereğinden fazla veri istemeyen uygulamalar yapıyoruz. Uygulamalarımızı Türkiye'den dünyaya, dört dilde yayınlıyoruz.</p>
      </Block>
    </>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const t = useRef<number | undefined>(undefined);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); window.clearTimeout(t.current); t.current = window.setTimeout(() => setCopied(false), 1800); } catch { /* desteklenmiyor */ }
  };
  return (
    <>
      <Block title="E-posta">
        <p>İş birliği, reklam, basın, hata bildirimi ya da veri talebi için bize yaz. Genelde 1-2 gün içinde dönüyoruz.</p>
        <div className="flex flex-wrap gap-2.5 pt-1">
          <a href={`mailto:${EMAIL}`} className="press inline-flex items-center gap-2 h-11 px-5 rounded-full bg-ink text-night text-sm font-medium hover:bg-white">
            <Mail className="w-4 h-4" aria-hidden /> {EMAIL}
          </a>
          <button onClick={copy} className="press inline-flex items-center gap-2 h-11 px-4 rounded-full glass text-sm font-medium text-ink" aria-live="polite">
            {copied ? <><Check className="w-4 h-4" aria-hidden /> Kopyalandı</> : <><Copy className="w-4 h-4" aria-hidden /> Kopyala</>}
          </button>
        </div>
      </Block>
      <Block title="Sosyal medya">
        <ul className="grid sm:grid-cols-2 gap-2">
          {[
            ['Instagram', 'https://www.instagram.com/patifitapp'],
            ['TikTok', 'https://www.tiktok.com/@patifitapp'],
            ['YouTube', 'https://youtube.com/@patifitapp'],
            ['Facebook', 'https://www.facebook.com/share/19hcLc1DG2/'],
          ].map(([n, u]) => (
            <li key={n}>
              <a href={u} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-rule px-4 py-3 hover:border-white/20 transition-colors">
                <span className="text-ink">{n}</span>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Block>
      <Block title="Konum">
        <p>İstanbul, Türkiye (UTC+3)</p>
      </Block>
    </>
  );
}

const TITLES: Record<CorporateTab, string> = {
  privacy: 'Gizlilik Politikası',
  terms: 'Kullanım Koşulları',
  about: 'Hakkımızda',
  contact: 'İletişim',
};

export const CorporateModal: React.FC<CorporateModalProps> = ({ isOpen, initialTab = 'privacy', onClose }) => {
  const [tab, setTab] = useState<CorporateTab>(initialTab);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => { setTab(initialTab); }, [initialTab, isOpen]);
  useEffect(() => { body.current?.scrollTo({ top: 0 }); }, [tab]);

  useEffect(() => {
    if (!isOpen) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-night/70 backdrop-blur-md modal-fade" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="legal-title">
      <div onClick={(e) => e.stopPropagation()}
        className="modal-pop relative w-full max-w-4xl h-[92vh] sm:h-[min(760px,88vh)] flex flex-col sm:flex-row overflow-hidden rounded-t-[28px] sm:rounded-[28px] border border-white/10 bg-[#0B0A17]/95 shadow-[0_40px_120px_rgba(0,0,0,.6)]">
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-indigo opacity-30 blur-[110px]" />

        {/* Sol menu (masaustu) / ust sekmeler (telefon) */}
        <aside className="relative shrink-0 sm:w-60 sm:border-r border-b sm:border-b-0 border-rule p-4 sm:p-6 flex sm:flex-col gap-4">
          <div className="hidden sm:flex items-center gap-2.5">
            <img src="/img/emblem-white.png" alt="" className="w-5 h-6 object-contain" />
            <span lang="en" className="display text-xl leading-none pt-0.5">Yufixuz</span>
          </div>
          <nav className="flex sm:flex-col gap-1.5 overflow-x-auto scroll-x -mx-1 px-1 sm:mt-6" aria-label="Kurumsal sayfalar">
            {TABS.map(({ key, label, Icon }) => (
              <button key={key} onClick={() => setTab(key)} aria-current={tab === key ? 'page' : undefined}
                className={`press shrink-0 flex items-center gap-2.5 h-10 px-3.5 rounded-full sm:rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${tab === key ? 'bg-white/10 text-ink' : 'text-muted hover:text-ink hover:bg-white/5'}`}>
                <Icon className="w-4 h-4" aria-hidden />{label}
              </button>
            ))}
          </nav>
          <p className="hidden sm:block mt-auto text-xs text-faint leading-relaxed">© 2026 Yufixuz Studio</p>
        </aside>

        {/* Icerik */}
        <div className="relative flex-1 min-h-0 flex flex-col">
          <header className="flex items-start justify-between gap-4 px-6 sm:px-10 pt-6 sm:pt-9 pb-5">
            <div>
              <h2 id="legal-title" className="display text-4xl sm:text-5xl leading-[0.9]">{TITLES[tab]}</h2>
              {(tab === 'privacy' || tab === 'terms') && <p className="mt-2 text-sm text-muted">Son güncelleme: {UPDATED}</p>}
            </div>
            <button onClick={onClose} className="press shrink-0 w-10 h-10 grid place-items-center rounded-full glass text-muted hover:text-ink" aria-label="Kapat">
              <X className="w-5 h-5" />
            </button>
          </header>
          <div ref={body} key={tab} className="tab-in flex-1 overflow-y-auto overscroll-contain px-6 sm:px-10 pb-10 max-w-[68ch]">
            {tab === 'privacy' && <Privacy />}
            {tab === 'terms' && <Terms />}
            {tab === 'about' && <About />}
            {tab === 'contact' && <Contact />}
          </div>
        </div>
      </div>
    </div>
  );
};
