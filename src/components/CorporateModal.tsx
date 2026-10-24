import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Info, Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { EMBLEM_DATA_URI } from '../assets/emblem';

export type CorporateTab = 'privacy' | 'terms' | 'about' | 'contact';

interface CorporateModalProps {
  isOpen: boolean;
  initialTab?: CorporateTab;
  onClose: () => void;
}

export const CorporateModal: React.FC<CorporateModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<CorporateTab>(initialTab);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Genel Bilgi / Soru',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    // Mesaj, ziyaretçinin kendi e-posta uygulamasında hazır olarak açılır
    const subject = encodeURIComponent(`[yufixuz.com] ${formData.subject}`);
    const body = encodeURIComponent(`${formData.message}\n\n${formData.name}\n${formData.email}`);
    window.location.href = `mailto:yusuftalibov0892@icloud.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const tabs: { key: CorporateTab; label: string; icon: React.ReactNode }[] = [
    { key: 'privacy', label: 'Gizlilik Politikası', icon: <Shield className="w-4 h-4" /> },
    { key: 'terms', label: 'Kullanım Koşulları', icon: <FileText className="w-4 h-4" /> },
    { key: 'about', label: 'Hakkımızda', icon: <Info className="w-4 h-4" /> },
    { key: 'contact', label: 'İletişim & Destek', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0F0F] border border-[#2B2B2B] text-[#F5F4F0] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#262626] bg-[#141414]">
          <div className="flex items-center gap-3">
            <img
              src={EMBLEM_DATA_URI}
              alt="YufixUz"
              className="w-6 h-6 object-contain invert shrink-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/logo.png';
              }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black uppercase tracking-wider text-[#F5F4F0]">
                  YUFIXUZ KURUMSAL
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 border border-[#333333] text-[#A0A0A0] uppercase">
                  yufixuz.com
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#888888]">
                Resmi Belgeler ve Yasal Bildirimler
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#888888] hover:text-[#F5F4F0] hover:bg-[#222222] transition-colors border border-transparent hover:border-[#333333]"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-[#262626] bg-[#0A0A0A] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setFormSubmitted(false);
                }}
                className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'border-[#F5F4F0] text-[#F5F4F0] bg-[#141414]'
                    : 'border-transparent text-[#888888] hover:text-[#CCCCCC] hover:bg-[#111111]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)] leading-relaxed text-sm text-[#CCCCCC] space-y-6">
          {/* ================= TAB 1: GİZLİLİK POLİTİKASI (ADSENSE COMPLIANT) ================= */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-1">
                  Resmi Yasal Belge
                </span>
                <h3 className="text-2xl font-black uppercase text-[#F5F4F0]">
                  Gizlilik Politikası (Privacy Policy)
                </h3>
                <p className="text-xs font-mono text-[#888888] mt-1">
                  Son Güncelleme: 15 Mart 2026 | Sürüm: 2.1
                </p>
              </div>

              <div className="p-4 bg-[#141414] border border-[#2B2B2B]">
                <p className="text-xs text-[#E5E5E5] leading-relaxed">
                  Bu Gizlilik Politikası, <strong>Yufixuz Studio</strong> (&quot;biz&quot;, &quot;bizim&quot; veya &quot;Yufix&quot;) tarafından işletilen <strong>yufixuz.com</strong> web sitesini ve stüdyomuz bünyesinde sunulan mobil uygulama ve dijital hizmetleri ziyaret eden tüm kullanıcıların gizlilik haklarını korumak amacıyla hazırlanmıştır. Sitemizi kullanarak bu politikada belirtilen koşulları kabul etmiş sayılırsınız.
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  1. Google AdSense ve Reklam Çerezleri Bildirimi
                </h4>
                <p>
                  Sitemizde Google Inc. ve iş ortakları tarafından sağlanan <strong>Google AdSense</strong> reklam hizmetleri kullanılabilir veya ilerleyen süreçte gösterilebilir. Bu kapsamda:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#B5B5B5]">
                  <li>
                    Üçüncü taraf satıcı olarak Google, sitemizde reklam yayınlamak amacıyla çerezlerden (cookies) yararlanır.
                  </li>
                  <li>
                    Google&apos;ın <strong>DoubleClick DART çerezi</strong> kullanımı, Google ve iş ortaklarının kullanıcılarımızın sitemizi ve/veya internetteki diğer web sitelerini ziyaretlerine dayalı olarak reklam sunmasını sağlar.
                  </li>
                  <li>
                    Kullanıcılar, <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline text-[#F5F4F0] hover:text-white">Google Reklam Ayarları (Google Ads Settings)</a> sayfasını ziyaret ederek kişiselleştirilmiş reklamcılık için DART çerezi kullanımını istedikleri zaman devre dışı bırakabilirler.
                  </li>
                  <li>
                    Ayrıca, üçüncü taraf tedarikçilerin kişiselleştirilmiş reklamcılık için çerez kullanımını devre dışı bırakmak isteyen kullanıcılar <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="underline text-[#F5F4F0] hover:text-white">aboutads.info</a> adresini ziyaret edebilir.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  2. Toplanan Bilgiler ve Günlük Dosyaları (Log Files)
                </h4>
                <p>
                  Pek çok standart web sitesinde olduğu gibi, yufixuz.com da günlük dosyalarını (log files) istatistiksel analiz amacıyla kullanır. Bu dosyalar şu verileri kaydedebilir:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#B5B5B5]">
                  <li>İnternet Protokolü (IP) adresi</li>
                  <li>Tarayıcı türü ve sürümü (Browser type)</li>
                  <li>İnternet Servis Sağlayıcısı (ISP)</li>
                  <li>Tarih ve zaman damgası (Date/Time stamp)</li>
                  <li>Yönlendiren / çıkış sayfaları ve tıklama sayıları</li>
                </ul>
                <p className="text-xs">
                  Bu veriler kişisel kimliğinizle doğrudan eşleştirilmez; yalnızca sitenin performansını artırmak, hataları tespit etmek ve kullanıcı deneyimini iyileştirmek için anonim olarak değerlendirilir.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  3. Çerezler (Cookies) ve Çerez Yönetimi
                </h4>
                <p>
                  Sitemiz, ziyaretçilerin tercihlerini kaydetmek, oturumları sürdürmek ve kullanıcı deneyimini kişiselleştirmek amacıyla çerezler kullanabilir.
                </p>
                <p className="text-xs">
                  Tarayıcınızın ayarlarından dilediğiniz zaman tüm çerezleri engelleyebilir veya bir çerez gönderildiğinde uyarı almayı tercih edebilirsiniz. Çerezlerin kapatılması durumunda sitemizin bazı fonksiyonları sınırlı çalışabilir.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  4. KVKK ve GDPR Uyumluluğu (Kullanıcı Hakları)
                </h4>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Genel Veri Koruma Tüzüğü (GDPR) kapsamında her kullanıcı:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#B5B5B5]">
                  <li>Kişisel verisinin işlenip işlenmediğini öğrenme,</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Verilerin silinmesini veya yok edilmesini talep etme hakkına sahiptir.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  5. İletişim & Veri Sorumlusu
                </h4>
                <p className="text-xs">
                  Gizlilik politikamızla ilgili herhangi bir sorunuz, öneriniz veya kişisel veri talebiniz için doğrudan veri sorumlusu ile iletişime geçebilirsiniz:
                </p>
                <div className="p-3 bg-[#141414] border border-[#2B2B2B] text-xs font-mono text-[#F5F4F0]">
                  Veri Sorumlusu: Yusuf Tolibov (Yufixuz Studio)<br />
                  E-Posta: yusuftalibov0892@icloud.com / patifitapp@gmail.com<br />
                  Web Sitesi: https://yufixuz.com
                </div>
              </section>
            </div>
          )}

          {/* ================= TAB 2: KULLANIM KOŞULLARI ================= */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-1">
                  Yasal Hükümler
                </span>
                <h3 className="text-2xl font-black uppercase text-[#F5F4F0]">
                  Kullanım Koşulları (Terms of Service)
                </h3>
                <p className="text-xs font-mono text-[#888888] mt-1">
                  Yürürlük Tarihi: 15 Mart 2026
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  1. Koşulların Kabulü
                </h4>
                <p>
                  <strong>yufixuz.com</strong> alan adlı web sitesine ve Yufixuz Studio tarafından yayınlanan herhangi bir yazılım, mobil uygulama, oyun veya içeriğe erişerek bu belgedeki şartları peşinen kabul etmiş olursunuz. Şartları kabul etmiyorsanız lütfen siteyi ve hizmetleri kullanmayınız.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  2. Fikri Mülkiyet ve Telif Hakları
                </h4>
                <p>
                  Sitede yer alan tüm logolar, amblemler, metinler, grafikler, oyun tasarımları, arayüz bileşenleri, kaynak kodları ve ticari unvanlar (PatiFit, Glow Upp, Odak, Pawsy, Moto Kurye vb.) <strong>Yusuf Tolibov ve Yufixuz Studio</strong>&apos;ya aittir ve ulusal/uluslararası fikri mülkiyet kanunları ile korunmaktadır.
                </p>
                <p className="text-xs text-[#B5B5B5]">
                  Yazılı izin olmaksızın içeriğin kopyalanması, çoğaltılması, tersine mühendislikle çözümlenmesi veya ticari amaçla dağıtılması kesinlikle yasaktır.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  3. Hizmet Kullanım Kuralları
                </h4>
                <p>
                  Kullanıcılar web sitesini ve uygulamaları yalnızca yasal amaçlar doğrultusunda kullanmayı taahhüt eder. Sitenin güvenliğini tehlikeye atacak saldırılar, otomatik veri kazıma (scraping) faaliyetleri veya sunucu kaynaklarını kasıtlı olarak tüketmeye yönelik girişimler yasaktır.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  4. Sorumluluk Reddi (Disclaimer of Warranties)
                </h4>
                <p className="text-xs">
                  yufixuz.com üzerindeki tüm içerikler, duyurular ve yazılımlar &quot;olduğu gibi&quot; (as is) esasına göre sunulmaktadır. Yusuf Tolibov ve Yufixuz Studio, sitedeki bilgilerin kesintisiz, hatasız veya her an erişilebilir olacağını garanti etmez. Uygulama indirme veya harici link tıklamalarından kaynaklanabilecek veri kayıplarından doğacak zararlardan stüdyo sorumlu tutulamaz.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-black uppercase text-[#F5F4F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5F4F0]"></span>
                  5. Değişiklik Hakkı ve Yürürlük
                </h4>
                <p className="text-xs">
                  Yufixuz Studio, bu koşulları önceden bildirim yapmaksızın dilediği zaman güncelleme hakkını saklı tutar. Güncellenen koşullar sitede yayınlandığı andan itibaren geçerlilik kazanır.
                </p>
              </section>
            </div>
          )}

          {/* ================= TAB 3: HAKKIMIZDA ================= */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-1">
                  Stüdyo ve Kurucu
                </span>
                <h3 className="text-2xl font-black uppercase text-[#F5F4F0]">
                  Hakkımızda (About Us)
                </h3>
                <p className="text-xs font-mono text-[#888888] mt-1">
                  Yufixuz Studio & Yusuf Tolibov
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#CCCCCC]">
                <p>
                  <strong>Yufixuz Studio</strong>, genç yazılımcı <strong>Yusuf Tolibov</strong> tarafından kurulan, yenilikçi mobil uygulamalar, oyunlar ve yapay zekâ odaklı verimlilik araçları üreten bağımsız bir teknoloji stüdyosudur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-[#141414] border border-[#2B2B2B]">
                    <span className="text-[11px] font-mono uppercase text-[#888888] block mb-1">
                      Misyonumuz
                    </span>
                    <p className="text-xs font-medium text-[#F5F4F0]">
                      İnsanların spor yapmasını, ders çalışmasını ve problem çözmesini oyunlaştırarak sıkıcı rutinleri eğlenceli ve sürdürülebilir hale getirmek.
                    </p>
                  </div>
                  <div className="p-4 bg-[#141414] border border-[#2B2B2B]">
                    <span className="text-[11px] font-mono uppercase text-[#888888] block mb-1">
                      Vizyonumuz
                    </span>
                    <p className="text-xs font-medium text-[#F5F4F0]">
                      Küresel App Store ve Google Play vitrinlerinde milyonlarca kullanıcıya dokunan, Türkiye menşeili dünya çapında dijital ürünler geliştirmek.
                    </p>
                  </div>
                </div>

                <h4 className="text-base font-black uppercase text-[#F5F4F0] pt-2">
                  Kurucunun Hikayesi
                </h4>
                <p>
                  Yusuf Tolibov 15 yaşında olup yaklaşık iki yıldır yazılım, yapay zekâ modelleri ve mobil uygulama mimarileri üzerine yoğunlaşmaktadır. Hiçbir resmi kursa bağlı kalmadan, kendi araştırmaları, açık kaynak dokümantasyonlar ve modern yapay zekâ araçlarıyla 14 yaşında ilk uygulamasını kodlamıştır.
                </p>
                <p>
                  <strong>Apple Developer Program</strong> bünyesinde aktif bir geliştirici olan Yusuf, stüdyosu çatısı altında fitness uygulaması <em>PatiFit</em>, kalori ve antrenman uygulaması <em>Glow Upp</em>, ders çalışma uygulaması <em>Odak</em>, matematik uygulaması <em>Pawsy Matematik</em> ve kurye oyunu <em>Moto Kurye</em> üzerinde çalışmaktadır. Ayrıca TEKNOFEST için mini insansız denizaltı projeleri gibi ileri mühendislik alanlarında da Ar-Ge çalışmalarını sürdürmektedir.
                </p>

                <h4 className="text-base font-black uppercase text-[#F5F4F0] pt-2">
                  Teknoloji Altyapımız
                </h4>
                <p className="text-xs text-[#B5B5B5]">
                  Projelerimizde JavaScript, TypeScript, React, Capacitor, Supabase ve yapay zekâ araçları kullanılmaktadır.
                </p>
              </div>
            </div>
          )}

          {/* ================= TAB 4: İLETİŞİM & DESTEK ================= */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#888888] block mb-1">
                  Resmi Kanallar
                </span>
                <h3 className="text-2xl font-black uppercase text-[#F5F4F0]">
                  İletişim & Destek (Contact)
                </h3>
                <p className="text-xs font-mono text-[#888888] mt-1">
                  Yufixuz Studio İletişim Masası | Ortalama Yanıt Süresi: 24 Saat
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sol Kolon: Doğrudan İletişim Bilgileri */}
                <div className="space-y-4">
                  <div className="p-4 bg-[#141414] border border-[#2B2B2B] space-y-3">
                    <span className="text-xs uppercase font-mono text-[#888888] block">
                      Resmi E-Posta Adresleri
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#F5F4F0]">yusuftalibov0892@icloud.com</span>
                        <button
                          onClick={() => handleCopy('yusuftalibov0892@icloud.com')}
                          className="p-1 text-[#888888] hover:text-[#F5F4F0]"
                          title="Kopyala"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#F5F4F0]">patifitapp@gmail.com</span>
                        <button
                          onClick={() => handleCopy('patifitapp@gmail.com')}
                          className="p-1 text-[#888888] hover:text-[#F5F4F0]"
                          title="Kopyala"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#141414] border border-[#2B2B2B] space-y-2">
                    <span className="text-xs uppercase font-mono text-[#888888] block">
                      Konum & Menşei
                    </span>
                    <p className="text-xs text-[#E5E5E5]">
                      İstanbul / Türkiye (UTC+3)
                    </p>
                    <p className="text-[11px] text-[#888888]">
                      İş birlikleri, basın bültenleri, reklam ortaklıkları ve kullanıcı hata bildirimleri için tüm e-postalara en geç 24-48 saat içerisinde dönüş sağlanmaktadır.
                    </p>
                  </div>

                  <div className="p-4 bg-[#141414] border border-[#2B2B2B] space-y-2">
                    <span className="text-xs uppercase font-mono text-[#888888] block">
                      Sosyal Medya Kanalları
                    </span>
                    <p className="text-xs text-[#E5E5E5]">
                      Instagram / TikTok / YouTube: <strong>@patifitapp</strong><br />
                      Facebook: <strong>Yufixuz Studio</strong>
                    </p>
                  </div>
                </div>

                {/* Sağ Kolon: İnteraktif İletişim Formu */}
                <div className="p-5 bg-[#141414] border border-[#2B2B2B]">
                  {formSubmitted ? (
                    <div className="py-10 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-[#F5F4F0] mx-auto animate-bounce" />
                      <h4 className="text-lg font-black uppercase text-[#F5F4F0]">
                        E-posta Uygulaman Açıldı
                      </h4>
                      <p className="text-xs text-[#A0A0A0] max-w-xs mx-auto">
                        Mesajın e-posta uygulamanda hazır. Göndere bastığında bana ulaşır. Açılmadıysa doğrudan yusuftalibov0892@icloud.com adresine yazabilirsin.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', email: '', subject: 'Genel Bilgi / Soru', message: '' });
                        }}
                        className="mt-4 px-4 py-2 text-xs font-mono uppercase bg-[#262626] text-[#F5F4F0] hover:bg-[#333333] transition-colors"
                      >
                        Yeni Mesaj Gönder
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <span className="text-xs uppercase font-mono text-[#888888] block mb-1">
                        Hızlı Mesaj Formu
                      </span>

                      <div>
                        <label className="text-[11px] font-mono uppercase text-[#A0A0A0] block mb-1">
                          Adınız Soyadınız *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Örn: Ahmet Yılmaz"
                          className="w-full bg-[#0A0A0A] border border-[#333333] px-3 py-2 text-xs text-[#F5F4F0] focus:border-[#F5F4F0] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase text-[#A0A0A0] block mb-1">
                          E-Posta Adresiniz *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ornek@alanadi.com"
                          className="w-full bg-[#0A0A0A] border border-[#333333] px-3 py-2 text-xs text-[#F5F4F0] focus:border-[#F5F4F0] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase text-[#A0A0A0] block mb-1">
                          Konu
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-[#0A0A0A] border border-[#333333] px-3 py-2 text-xs text-[#F5F4F0] focus:border-[#F5F4F0] outline-none"
                        >
                          <option value="Genel Bilgi / Soru">Genel Bilgi / Soru</option>
                          <option value="İş Birliği & Sponsorluk">İş Birliği & Sponsorluk</option>
                          <option value="Uygulama Hata / Geri Bildirim">Uygulama Hata / Geri Bildirim</option>
                          <option value="Basın & Medya">Basın & Medya</option>
                          <option value="Gizlilik & Veri Talebi">Gizlilik & Veri Talebi</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase text-[#A0A0A0] block mb-1">
                          Mesajınız *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Mesajınızı buraya yazın..."
                          className="w-full bg-[#0A0A0A] border border-[#333333] px-3 py-2 text-xs text-[#F5F4F0] focus:border-[#F5F4F0] outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-[#F5F4F0] text-[#0A0A0A] hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>E-posta açılıyor...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>E-postayla Gönder</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[#262626] bg-[#141414] text-[11px] font-mono text-[#888888]">
          <span>© 2026 Yufixuz Studio — Tüm Hakları Saklıdır.</span>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#F5F4F0] hover:underline"
          >
            Kapat (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
