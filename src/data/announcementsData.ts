import { AnnouncementItem } from '../types/announcements';

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'patifit-app-review',
    title: 'PatiFit App Store İncelemesinde',
    category: 'Mobil Uygulama',
    date: 'Ekim 2026',
    version: 'v1.0',
    badge: 'İlk Uygulama',
    status: 'İncelemede',
    summary:
      'Kaslı kedi Pat ile adım adım spor yaptıran ilk uygulamam PatiFit, App Store’a gönderildi ve Apple’ın incelemesinde. Onaylandığı gün buradan duyuracağım.',
    highlights: [
      'Seviye testiyle başlayan, sana özel yol haritası',
      'Pat her hareketi önce animasyonla gösteriyor, sonra sayaç başlıyor',
      'XP, elmas, seri ve Bronz’dan Pro’ya ligler',
      '4–12 yaş için ebeveyn kodlu çocuk modu'
    ],
    actionLabel: 'Detayları Gör',
    fullDetails: {
      overview:
        'PatiFit, spor yapmayı her gün küçük görevlere bölen bir fitness uygulaması. Başta kısa bir seviye testi yapılıyor (kaç şınav, kaç squat), sonra seviyene göre adım adım zorlaşan bir yol haritası çıkıyor. Uygulamanın maskotu kaslı kedi Pat, her hareketi önce animasyonla gösteriyor.',
      keyFeatures: [
        { title: 'Seviye Testi ve Yol Haritası', desc: 'Ekipmanına ve testteki sonucuna göre sana özel, adım adım ilerleyen görevler.' },
        { title: 'Animasyonlu Hareketler', desc: 'Pat her hareketi göreve başlamadan önce gösteriyor; görevde sayaç seninle birlikte sayıyor.' },
        { title: 'Ligler, XP ve Elmas', desc: 'Görevlerden XP ve elmas kazan, serini koru, Bronz’dan Pro’ya liglerde yüksel.' },
        { title: 'Mağaza ve Dolap', desc: 'Elmaslarla Pat’e kıyafet al, satın almadan önce dolapta üzerinde dene. MiawPass sezon kartı da var.' },
        { title: 'Çocuk Modu', desc: '4–12 yaş için zıplama ve dans hareketleri. Ebeveyn koduyla açılıyor, günlük süre sınırı var.' },
        { title: 'Dört Dil', desc: 'Türkçe, İngilizce, Arapça ve Çince.' }
      ],
      changelog: [
        'İlk sürüm App Store incelemesine gönderildi',
        'Uygulama içi satın alımlar (elmas, MiawPass) uygulamayla birlikte inceleniyor'
      ],
      specs: [
        { label: 'Platform', value: 'iPhone (iOS)' },
        { label: 'Diller', value: 'Türkçe, İngilizce, Arapça, Çince' },
        { label: 'Fiyat', value: 'Ücretsiz, uygulama içi satın alma var' },
        { label: 'Yaş', value: '13+ (4–12 yaş için ayrı çocuk modu)' }
      ],
      developerNote:
        'PatiFit benim ilk uygulamam. Amacım spor yapmayı “yarın başlarım” denmeyecek kadar eğlenceli hale getirmekti. İlk sürüm olduğu için birkaç hata çıkabilir; bulursan bana yaz.'
    }
  },
  {
    id: 'patin-ogrencisi',
    title: 'Pat’in Öğrencisi: Animasyon Dizisi',
    category: 'Video',
    date: 'Ekim 2026',
    version: 'Bölüm 1–4',
    badge: 'Dizi',
    status: 'Yayında',
    summary:
      'Sınıfta herkesin dalga geçtiği Emre, PatiFit’i açınca Pat ona “Artık ben senin hocanım” diyor. Her bölümde Emre’nin forma girme macerası devam ediyor.',
    highlights: [
      '@patifitapp hesabında yayında',
      'Seslendirme, animasyon ve kurgu stüdyoda yapılıyor',
      'Dördüncü bölüm: “Salata Savaşı”',
      'Sıradaki bölüm: “Sabah Koşusu”'
    ],
    actionLabel: 'Detayları Gör',
    actionUrl: 'https://www.instagram.com/patifitapp',
    fullDetails: {
      overview:
        'Pat’in Öğrencisi, PatiFit’in hikâyesini anlatan kısa bir animasyon dizisi. Emre’nin Pat’le birlikte spora başlamasını, zorlandığı ve vazgeçmek istediği anları komik bir dille anlatıyor.',
      keyFeatures: [
        { title: 'Kısa Bölümler', desc: 'Her bölüm yaklaşık bir dakika, telefon ekranı için dikey çekiliyor.' },
        { title: 'Karakterler', desc: 'Emre, kaslı kedi Pat ve hikâyeyi anlatan bir anlatıcı.' }
      ],
      changelog: [
        'Bölüm 1–4 yayınlandı',
        'Bölüm 5 “Sabah Koşusu” hazırlanıyor'
      ],
      specs: [
        { label: 'Format', value: 'Dikey kısa video' },
        { label: 'Kanal', value: '@patifitapp' }
      ],
      developerNote:
        'Diziyi PatiFit’i tanıtmak için başlattım ama hikâyeyi yazmak en az uygulamayı yapmak kadar eğlenceli oldu.'
    }
  },
  {
    id: 'glow-upp-redesign',
    title: 'Glow Upp Baştan Tasarlandı',
    category: 'Mobil Uygulama',
    date: 'Ekim 2026',
    version: 'Tasarım',
    badge: 'Yeni Tasarım',
    status: 'Geliştiriliyor',
    summary:
      'Glow Upp, 15 yaş ve üstü için kalori ve antrenman uygulaması olarak yeniden tasarlandı: krem, yeşil ve koyu tonlar, yeni bir logo ve daha olgun bir görünüm.',
    highlights: [
      'Hedefe göre plan: kilo vermek, kilo almak ya da kas kazanmak',
      'Fotoğraftan, barkoddan ya da aramayla yemek ekleme; gramı sen seçiyorsun',
      'Her gün farklı antrenman programı ve “Ne yesem?” önerileri',
      'Adım sayısı ve akşam özeti'
    ],
    actionLabel: 'Detayları Gör',
    fullDetails: {
      overview:
        'Glow Upp, yediğini, adımını ve antrenmanını tek yerde takip etmek için yapılıyor. Başta isim, yaş, boy, kilo ve hedef soruluyor; uygulama planı buna göre kuruyor.',
      keyFeatures: [
        { title: 'Kolay Yemek Kaydı', desc: 'Fotoğraf, barkod ya da arama ile ekle, gramı kendin seç.' },
        { title: 'Günlük Antrenman', desc: 'Görev yerine her gün hedefine göre farklı bir antrenman programı.' },
        { title: 'Ne Yesem?', desc: 'Farklı yemek önerileri, sağlıksız bir şey eklediğinde uyarı.' },
        { title: 'Yaşa Uygun Kurallar', desc: '15 yaş altı kullanamıyor; 15–17 yaş için kilo hedefi ayrıca kontrol ediliyor.' }
      ],
      changelog: [
        'Yeni logo, renkler ve ekranlar',
        'Giriş ekranında dil menüsü, profil ekranında yeni düzen'
      ],
      specs: [
        { label: 'Platform', value: 'iPhone (iOS)' },
        { label: 'Yaş', value: '15+' }
      ],
      developerNote:
        'İlk Glow Upp daha eğlenceli ve renkliydi; yetişkinlerin de severek kullanacağı, sade bir spor uygulaması olsun istedim.'
    }
  },
  {
    id: 'moto-kurye',
    title: 'Moto Kurye: İlk Oyunum',
    category: 'Oyun',
    date: 'Ekim 2026',
    version: 'İlk sürüm',
    badge: 'Oyun',
    status: 'Geliştiriliyor',
    summary:
      'Motosikletinle açık şehir haritasında paket taşıdığın bir kurye oyunu. Yatay ekranda oynanıyor, ilk sürümü hazır.',
    highlights: [
      'Açık şehir haritası',
      'Yatay ekran',
      'Türkçe, İngilizce, Arapça ve Çince'
    ],
    actionLabel: 'Detayları Gör',
    fullDetails: {
      overview:
        'Moto Kurye, kendi yaşıtlarım için yaptığım ilk oyun. Şehirde siparişleri alıp zamanında teslim etmeye çalışıyorsun.',
      keyFeatures: [
        { title: 'Açık Şehir', desc: 'Siparişlerin peşinde serbestçe dolaşabileceğin bir şehir haritası.' },
        { title: 'Dört Dil', desc: 'Türkçe, İngilizce, Arapça ve Çince.' }
      ],
      changelog: ['İlk sürüm tamamlandı'],
      specs: [
        { label: 'Platform', value: 'iPhone (iOS)' },
        { label: 'Ekran', value: 'Yatay' }
      ],
      developerNote: 'Bir gün çıkış tarihini burada duyuracağım.'
    }
  },
  {
    id: 'yufixuz-studio',
    title: 'Yufixuz Studio Kuruldu',
    category: 'Stüdyo',
    date: 'Ekim 2026',
    version: 'yufixuz.com',
    badge: 'Stüdyo',
    status: 'Yayında',
    summary:
      'Yaptığım bütün uygulamalar, oyunlar ve videolar artık tek bir çatı altında: Yufixuz Studio.',
    highlights: [
      'PatiFit, Glow Upp, Odak, Pawsy Matematik ve Moto Kurye',
      'Pat’in Öğrencisi animasyon dizisi',
      'Stüdyo tanıtım videosu yayında'
    ],
    actionLabel: 'Detayları Gör',
    fullDetails: {
      overview:
        'Yufixuz Studio, uygulamalarımı ve oyunlarımı yayınladığım stüdyom. Tasarımı, kodu, videoları ve yayınlamayı kendim yapıyorum.',
      keyFeatures: [
        { title: 'Uygulamalar', desc: 'Spor yapmayı, ders çalışmayı ve öğrenmeyi eğlenceli hale getiren iPhone uygulamaları.' },
        { title: 'Oyunlar', desc: 'İlk oyunum Moto Kurye üzerinde çalışıyorum.' }
      ],
      changelog: ['Stüdyo kuruldu, yufixuz.com yayına alındı'],
      specs: [
        { label: 'Kurucu', value: 'Yusuf Tolibov' },
        { label: 'İletişim', value: 'yusuftalibov0892@icloud.com' }
      ],
      developerNote: 'Fikirlerinizi ve bulduğunuz hataları bana yazın; hepsini okuyorum.'
    }
  }
];
