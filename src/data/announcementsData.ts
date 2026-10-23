import { AnnouncementItem } from '../types/announcements';

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'patifit-v1-launch',
    title: 'PatiFit v1.0 — App Store Çıkış Sürümü Hazır!',
    category: 'Mobil Uygulama',
    date: 'Mart 2026',
    version: 'v1.0.0 (RC-2)',
    badge: 'Yeni Sürüm',
    status: 'İncelemede',
    summary:
      'Kaslı kedi Pat rehberliğinde spor yapmayı oyunlaştıran PatiFit, App Store inceleme sürecine girdi. Seri sistemi, haftalık ligler ve Apple HealthKit entegrasyonu ile spor alışkanlığını kalıcı kılmaya geliyor.',
    highlights: [
      'Kişiselleştirilmiş günlük egzersiz kartları ve dinamik sayaç motoru',
      'Pat karakteri ile sesli motivasyon, komik tepkiler ve başarı animasyonları',
      'Seri (streak) koruma mekanizması ve küresel haftalık lig tabloları',
      'Tamamen çevrimdışı (offline) çalışma modu ve HealthKit senkronizasyonu'
    ],
    actionLabel: 'Sürüm Detaylarını Oku',
    fullDetails: {
      overview:
        'PatiFit, geleneksel sıkıcı fitness uygulamalarından farklı olarak spor yapmayı bir RPG oyunu mekaniğine dönüştürür. Uygulamanın maskotu olan kaslı kedi Pat, kullanıcının her antrenmanında yanında olur, esprili ve motive edici diyaloglarla egzersizleri yönlendirir. Yusuf Tolibov tarafından 2 yıllık yoğun yazılım çalışmasının sonucu olarak Swift ve modern iOS mimarileriyle baştan sona inşa edilmiştir.',
      keyFeatures: [
        {
          title: 'Dinamik Egzersiz Algoritması',
          desc: 'Kullanıcının kondisyon seviyesine ve haftalık hedeflerine göre otomatik ayarlanan 15 farklı vücut ağırlığı antrenman programı.'
        },
        {
          title: 'Lig & Seviye Atlama Sistemi',
          desc: 'Bronz, Gümüş, Altın ve Elmas liglerinde haftalık sıralama mücadelesi vererek sporu bir tutku haline getirin.'
        },
        {
          title: 'Gizlilik Odaklı Sağlık Entegrasyonu',
          desc: 'Tüm sağlık ve kalori verileri kullanıcının kendi cihazında güvenle işlenir, üçüncü taraflarla paylaşılmaz.'
        },
        {
          title: 'İnteraktif Karakter Tepkileri',
          desc: 'Antrenmanı aksattığınızda tatlı tatlı sitem eden, tamamladığınızda ise kutlayan Pat animasyonları.'
        }
      ],
      changelog: [
        'App Store iOS 17+ ve iOS 18 uyumluluğu tamamlandı',
        'HealthKit arka plan veri senkronizasyonu eklendi',
        'Antrenman esnasında ekranın kapanmasını önleyen uyanık kalma modu entegre edildi',
        'Hafif ve koyu tema için optimize edilmiş arayüz renkleri düzenlendi'
      ],
      specs: [
        { label: 'Platform', value: 'iOS 17.0 veya üstü (iPhone / iPad)' },
        { label: 'Geliştirme Dili', value: 'Swift & SwiftUI' },
        { label: 'Veri Saklama', value: 'Apple CoreData & HealthKit' },
        { label: 'Fiyatlandırma', value: 'Ücretsiz (İsteğe Bağlı Premium Destekçi Paketi)' }
      ],
      developerNote:
        'PatiFit benim ilk göz ağrım ve stüdyomuzun amiral gemisi. Bu uygulamayı yaparken amacım kimsenin "yarın başlarım" demeyeceği kadar eğlenceli bir fitness deneyimi sunmaktı. Apple Developer Program kabulünün ardından ilk büyük sürümümüzü sunmanın gururunu yaşıyoruz.'
    }
  },
  {
    id: 'yufix-runner-3d',
    title: 'Yufix Runner 3D — Hızlı Tempolu Sonsuz Koşu Oyunu Duyurusu',
    category: 'Oyun',
    date: 'Şubat 2026',
    version: 'v0.5.0 (Alpha)',
    badge: 'Yeni Oyun',
    status: 'Geliştiriliyor',
    summary:
      'Yufix Studio imzasını taşıyan ilk 3D mobil aksiyon oyunu Yufix Runner, siberpunk İstanbul sokaklarında geçen dinamik parkur dinamikleri ve 60 FPS akıcı oyun zevki sunuyor.',
    highlights: [
      '60 FPS akıcı koşu, kayma, zıplama ve duvar tırmanışı mekanikleri',
      'Siberpunk ve fütüristik şehir manzaralı dinamik prosedürel seviye üretimi',
      'Düşük poligonlu (low-poly) yüksek performanslı grafik motoru',
      'Kilidi açılabilir özel karakter kaplamaları ve haftalık küresel skor tablosu'
    ],
    actionLabel: 'Oyun Geliştirme Notları',
    fullDetails: {
      overview:
        'Yufix Runner 3D, reflekslere dayalı, adrenalin dozu yüksek bir mobil arcade koşu oyunudur. Oyuncular, fütüristik engeller, lazer bariyerleri ve hareketli platformlar arasından sıyrılarak en yüksek skoru elde etmeye çalışır. Mobil cihazlarda pil tasarrufu sağlayan hafif yapısı ile akıcı bir performans vadeder.',
      keyFeatures: [
        {
          title: 'Sonsuz Prosedürel Parkur',
          desc: 'Her oyunda tamamen rastgele ve dinamik olarak harmanlanan engel dizilimleri ile asla tekrara düşmeyen deneyim.'
        },
        {
          title: 'Yufix Boosters & Magnet Sistemi',
          desc: 'Parkurda toplanan neon kristalleriyle enerji kalkanı, süper zıplama ve puan katlayıcı güçlendirmeleri açın.'
        },
        {
          title: 'Gelişmiş Haptik Geri Bildirim',
          desc: 'Her zıplama ve engele sürtünmede parmak ucunuzda hissettiğiniz hassas titreşim teknolojisi.'
        },
        {
          title: 'Özel Müzik ve Ses Tasarımı',
          desc: 'Tempolu synthwave tınıları eşliğinde yüksek odaklanma sağlayan oyun içi ses efektleri.'
        }
      ],
      changelog: [
        'Karakter kontrol fizik motoru baştan aşağı yenilendi',
        'Dokunmatik kaydırma (swipe) hassasiyet ayarları eklendi',
        'Gölge ve ışıklandırma shader optimizasyonları yapıldı',
        'Game Center liderlik tablosu entegrasyonu başlatıldı'
      ],
      specs: [
        { label: 'Platform', value: 'iOS & Android (Çapraz Platform)' },
        { label: 'Oyun Motoru', value: 'Hafif 3D WebGL / Metal Render Mimarisi' },
        { label: 'Hedef Kare Hızı', value: 'Stabil 60 FPS / 120 FPS ProMotion' },
        { label: 'Çıkış Hedefi', value: '2026 Q3 Açık Beta' }
      ],
      developerNote:
        'Mobil oyun sektöründe aşırı reklamla boğulmamış, saf yetenek ve refleks odaklı bir oyun yapmak istedim. Erken aşama testlerimiz inanılmaz keyifli geçiyor!'
    }
  },
  {
    id: 'odak-ai-v2',
    title: 'Odak AI v2.0 — Akıllı Pomodoro ve Sınav Koçu Güncellemesi',
    category: 'Yapay Zekâ',
    date: 'Şubat 2026',
    version: 'v2.0.0',
    badge: 'Büyük Güncelleme',
    status: 'Geliştiriliyor',
    summary:
      'Kırmızı panda Pawsy ile dikkat dağınıklığını önleyen, yapay zekâ destekli çalışma planlayıcısı ve derin odaklanma sayacı yepyeni algoritmalarla yenilendi.',
    highlights: [
      'Ders bazlı dinamik 25/5 ve 50/10 Pomodoro döngüleri ve derin odak modu',
      'Yapay zekâ ile kişiye özel ders çalışma çizelgesi ve konu analizi',
      'Günlük ve haftalık verimlilik analitiği, başarı ısı haritası',
      'Pawsy karakterinin çalışma durumuna göre değişen canlı animasyonları'
    ],
    actionLabel: 'Yenilikleri İncele',
    fullDetails: {
      overview:
        'Öğrencilerin ve yoğun çalışanların dikkat sürelerini maksimum seviyeye çıkarmak için tasarlanan Odak AI, Pomodoro tekniğini yapay zekâ ile birleştirir. Kırmızı panda Pawsy, çalışma boyunca masanızda bir dost gibi oturur ve dikkatinizi toplamanıza rehberlik eder.',
      keyFeatures: [
        {
          title: 'Akıllı Dinlenme Molaları',
          desc: 'Zihinsel yorgunluk seviyenize göre mola sürelerini esneten adaptif biyolojik ritim hesaplayıcısı.'
        },
        {
          title: 'Ekran Süresi & Dikkat Koruması',
          desc: 'Çalışma esnasında bildirimlerin sizi bölmesini önleyen tam ekran odaklanma arayüzü.'
        },
        {
          title: 'Hedef & Konu Takip Çizelgesi',
          desc: 'Hangi derse veya projeye ne kadar süre harcadığınızı gösteren minimalist grafikler ve ısı haritaları.'
        },
        {
          title: 'Sesli Beyaz Gürültü (Ambient)',
          desc: 'Yağmur sesi, kütüphane fısıltısı ve kahve dükkanı arka plan sesleriyle odaklanma atmosferi.'
        }
      ],
      changelog: [
        'Pawsy için 8 yeni animasyon durumu eklendi',
        'Yapay zekâ çalışma öneri motoru entegre edildi',
        'Haftalık PDF verimlilik karnesi çıkarma özelliği eklendi',
        'Minimalist karanlık mod arayüzü AdSense ve modern standartlara uyarlandı'
      ],
      specs: [
        { label: 'Platform', value: 'Web & iOS Entegre' },
        { label: 'AI Altyapısı', value: 'Yerel ve Bulut Hibrit Analiz' },
        { label: 'Senkronizasyon', value: 'Uçtan Uca Şifreli Bulut Eşitleme' },
        { label: 'Erişilebilirlik', value: 'Yüksek Kontrast & Sesli Rehber' }
      ],
      developerNote:
        'Kendi okul derslerimde ve kod yazarken yaşadığım odaklanma zorluklarını aşmak için geliştirdiğim bir araçtı. Artık binlerce öğrencinin kullanımına hazır hale getiriyoruz.'
    }
  },
  {
    id: 'pawsy-matematik-roadmap',
    title: 'Pawsy Matematik — Eğlenceli Sayı Dünyası Yol Haritası',
    category: 'Araç & Verimlilik',
    date: 'Ocak 2026',
    version: 'v0.9.0',
    badge: 'Yol Haritası',
    status: 'Geliştiriliyor',
    summary:
      'Matematik korkusunu maceralı bir açık dünya keşfine dönüştüren, problem çözme mantığını görsel ipuçlarıyla kavratan yeni nesil eğitim platformumuz.',
    highlights: [
      'Temel dört işlemden mantık bulmacalarına ve geometriye uzanan aşamalar',
      'Adım adım interaktif görsel çözüm laboratuvarı ve formül kartları',
      'Öğrencinin anlama hızına göre zorluğu dinamik değiştiren sistem',
      'Veliler için haftalık gelişim ve konu kavrama raporlama paneli'
    ],
    actionLabel: 'Proje Detayları',
    fullDetails: {
      overview:
        'Pawsy Matematik, çocukların ve gençlerin matematik öğrenirken ezber yerine neden-sonuç ilişkisini kavramalarını sağlar. Eğlenceli karakterler ve interaktif bulmacalar eşliğinde matematik adeta bir macera oyununa dönüşür.',
      keyFeatures: [
        {
          title: 'Görselleştirilmiş Matematik',
          desc: 'Soyut denklemleri ve kesirleri görsel pizza dilimleri, geometrik bloklar ve tartılarla somutlaştıran anlatım.'
        },
        {
          title: 'Kendi Hızında İlerleme',
          desc: 'Yanlış cevaplarda ceza vermek yerine ipucu sunan destekleyici pedagogik yaklaşım.'
        },
        {
          title: 'Günlük Matematik Görevleri',
          desc: 'Her gün 10 dakikalık eğlenceli beyin jimnastiği görevleriyle kalıcı zihinsel pratik.'
        },
        {
          title: 'Ödüllü Rozet Koleksiyonu',
          desc: 'Tamamlanan her konu ve çözülen her zorlu bulmaca için kazanılan özel başarı rozetleri.'
        }
      ],
      changelog: [
        'Geometri ve alan hesaplama bölümü tamamlandı',
        'Sesli soru okuma ve işitsel rehber desteği eklendi',
        'Tabletler için kalem ve serbest çizim alanı geliştirildi'
      ],
      specs: [
        { label: 'Hedef Kitle', value: 'İlkokul, Ortaokul ve Lise Başlangıcı' },
        { label: 'Müfredat Uyumu', value: 'MEB & Uluslararası STEM Standartları' },
        { label: 'Cihaz Desteği', value: 'iPad, Tablet, Web & Mobil' },
        { label: 'Erişim Modeli', value: 'Temel Konular Ücretsiz' }
      ],
      developerNote:
        'Matematik bir kabus değil, kainatın dilidir. Pawsy ile bunu her yaştan arkadaşıma göstermek için var gücümüzle çalışıyoruz.'
    }
  }
];
