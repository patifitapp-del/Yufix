/**
 * Ayri sayfalar. Her biri build sirasinda kendi HTML dosyasina yazilir (scripts/prerender.mjs),
 * boylece Google icerigi JavaScript calistirmadan da okur.
 */
import React from 'react';
import { ArrowUpRight, ArrowLeft, Apple, Mail } from 'lucide-react';
import { DATA, Header, Home, PatiFitCard, GlowUppCard, Contact, PostCard, useReveal, onSpot } from './App';
import { Privacy, Terms, Block, UPDATED } from './components/CorporateModal';
import { POSTS, postBySlug, fmtDate, readMin, Post, Node } from './content/blog';

const SITE = 'https://yufixuz.com';

/* ---------- ortak iskelet ---------- */
function Footer() {
  const cols: [string, [string, string][]][] = [
    ['Uygulamalar', [['/patifit', 'PatiFit'], ['/glow-upp', 'Glow Upp'], ['/pat-in-ogrencisi', "Pat'in Öğrencisi"]]],
    ['Stüdyo', [['/hakkimizda', 'Hakkımızda'], ['/blog', 'Blog'], ['/iletisim', 'İletişim ve destek']]],
    ['Yasal', [['/gizlilik', 'Gizlilik Politikası'], ['/kullanim-kosullari', 'Kullanım Koşulları']]],
  ];
  return (
    <footer className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-14 pb-12 mt-6 border-t border-rule">
      <div className="grid sm:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href="/" className="flex items-center gap-2.5">
            <img src="/img/emblem-white.png" alt="" className="w-6 h-7 object-contain" />
            <span lang="en" className="display text-2xl leading-none pt-0.5">Yufixuz</span>
          </a>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-[32ch]">{DATA.tagline}</p>
        </div>
        {cols.map(([t, links]) => (
          <nav key={t} aria-label={t}>
            <h2 className="text-sm text-faint">{t}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map(([h, l]) => <li key={h}><a href={h} className="text-muted hover:text-ink transition-colors">{l}</a></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <p className="mt-12 text-sm text-faint">{DATA.footer}</p>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="aurora" aria-hidden><i className="a1" /><i className="a2" /><i className="a3" /></div>
      <div className="grain" aria-hidden />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

/* Ic sayfalarin ust kismi */
function PageHead({ kicker, title, lead, back }: { kicker?: string; title: string; lead?: string; back?: [string, string] }) {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-14">
      {back && (
        <a href={back[0]} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden /> {back[1]}
        </a>
      )}
      {kicker && <p className={`${back ? 'mt-8' : ''} text-sm text-muted`}>{kicker}</p>}
      <h1 className="fade-in mt-2 display text-[15vw] sm:text-[112px] leading-[0.86] max-w-[14ch]">{title}</h1>
      {lead && <p className="fade-in mt-7 max-w-[52ch] text-lg sm:text-xl leading-relaxed text-ink/85">{lead}</p>}
    </section>
  );
}

const Wrap = ({ children, narrow }: { children: React.ReactNode; narrow?: boolean }) => (
  <div className={`max-w-[1200px] mx-auto px-5 sm:px-8 ${narrow ? '' : ''}`}>{children}</div>
);

/* Bilgi bolumu: solda baslik, sagda metin */
function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="reveal grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-12 py-10 border-t border-rule">
      <h2 className="text-2xl sm:text-3xl font-medium leading-tight">{title}</h2>
      <div className="space-y-4 text-lg leading-relaxed text-ink/80 max-w-[60ch]">{children}</div>
    </section>
  );
}

function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="cursor-pointer list-none flex items-start justify-between gap-6 text-lg font-medium">
            {q}<span className="text-muted transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden>+</span>
          </summary>
          <p className="mt-3 text-ink/75 leading-relaxed max-w-[64ch]">{a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- PatiFit ---------- */
const PATI_FAQ: [string, string][] = [
  ['PatiFit ücretli mi?', "PatiFit'i indirmek ve günlük dersleri yapmak ücretsiz. Uygulama içinde isteğe bağlı satın alımlar var: elmas paketleri ve sezonluk MiawPass. Bunlar kostüm ve ekstra ödüller içerir, antrenman içeriğinin kendisi ücretsizdir."],
  ['Hesap açmam gerekiyor mu?', 'Hayır. Misafir olarak hemen başlayabilirsin. İlerlemeni kaybetmemek istersen daha sonra Apple, Google ya da e-posta ile hesabını kaydedebilirsin.'],
  ['Kamera görüntüm bir yere gönderiliyor mu?', 'Hayır. Şınav düellolarında kamera, tekrarları saymak için kullanılır. Görüntü telefonda işlenir, kaydedilmez ve sunucuya gönderilmez.'],
  ['Çocuğum kullanabilir mi?', 'Evet. Ebeveyn koduyla açılan çocuk modunda baskı yaratan bildirimler, reklamla ödül kazanma ve satın alma teşvikleri kapalıdır. Satın alma gibi işlemler ebeveyn kodunu ister.'],
  ['Hangi dilleri destekliyor?', 'Türkçe, İngilizce, Arapça ve Çince.'],
  ['Android sürümü ne zaman çıkacak?', 'Android sürümü test aşamasında. Yayınlandığında bu sayfada ve sosyal medya hesaplarımızda duyuracağız.'],
];

function PatiFitPage() {
  const p = DATA.patifit;
  return (
    <>
      <PageHead kicker="Uygulama · App Store'da yayında" title="PatiFit" lead="Kaslı kedi Pat'le evde, ekipmansız spor. Her gün birkaç dakikalık küçük görevler, kamerayla sayılan şınav düelloları, seriler ve ligler." />
      <Wrap>
        <div className="mb-16"><PatiFitCard /></div>
        <Row title="Nasıl çalışır?">
          <p>PatiFit'i ilk açtığında kısa bir seviye testi yaparsın: kaç şınav, kaç squat yapabildiğin ve ne sıklıkla spor yapmak istediğin. Uygulama buna göre sana özel bir yol haritası hazırlar.</p>
          <p>Yol haritası, birkaç dakikalık derslerden oluşur. Her derste Pat hareketi önce kendisi gösterir, sonra seninle birlikte sayar. Ders bitince elmas ve deneyim puanı kazanırsın, günlük serin bir gün uzar.</p>
        </Row>
        <Row title="Kamerayla şınav düellosu">
          <p>Telefonu yere koy, ön kamera vücudunu takip etsin. PatiFit her tekrarı kendisi sayar; göğüs yeterince aşağı inmeden kalkılan tekrar sayılmaz. Arkadaşına meydan oku, kim daha çok şınav çekecek görün.</p>
          <p>Görüntü tamamen telefonda işlenir. Hiçbir kare kaydedilmez ya da internete gönderilmez.</p>
        </Row>
        <Row title="Seri, lig ve kostümler">
          <p>Her gün en az bir ders yaptığında serin büyür. Belirli gün sayılarına ulaştığında (7, 30, 100, 365 gün) sadece seriyle kazanılan özel kostümler açılır.</p>
          <p>Haftalık liglerde benzer seviyedeki kullanıcılarla puan yarışı yaparsın. Kazandığın elmaslarla Pat'in dolabına yeni kıyafetler ve setler eklersin. Bazı setler Pat'in etrafında parlayan bir aura oluşturur.</p>
        </Row>
        <Row title="Çocuk modu">
          <p>Ebeveyn koduyla açılan çocuk modu, çocuklara uygun daha kısa dersler sunar. Bu modda ilerlemeyi zorlayan bildirimler, reklam izleyerek ödül kazanma ve satın alma teşvikleri gösterilmez.</p>
        </Row>
        <Row title="Gizlilik">
          <p>PatiFit sadece uygulamanın çalışması için gereken verileri işler. Ayrıntılar App Store sayfasındaki “Uygulama Gizliliği” bölümünde ve <a href="/gizlilik" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">gizlilik politikamızda</a> yer alıyor.</p>
        </Row>
        <section className="reveal py-12 border-t border-rule">
          <h2 className="display text-5xl sm:text-6xl leading-none">Sık sorulanlar</h2>
          <div className="mt-8"><Faq items={PATI_FAQ} /></div>
        </section>
        <section className="reveal glass rounded-[32px] p-7 sm:p-12 my-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="display text-5xl leading-none">Pat seni bekliyor</h2>
            <p className="mt-3 text-muted max-w-[44ch]">Evde spora başlamak için rehberimize de göz atabilirsin.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={p.appStoreUrl} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2.5 h-12 px-6 rounded-full bg-ink text-night font-medium hover:bg-white">
              <Apple className="w-5 h-5" aria-hidden /> App Store'dan indir
            </a>
            <a href="/blog/evde-spora-nasil-baslanir" className="press inline-flex items-center gap-2 h-12 px-6 rounded-full glass font-medium hover:border-white/20">Başlangıç rehberi</a>
          </div>
        </section>
      </Wrap>
    </>
  );
}

/* ---------- Glow Upp ---------- */
function GlowUppPage() {
  return (
    <>
      <PageHead kicker="Uygulama · Yakında" title="Glow Upp" lead="15 yaş ve üstü için beslenme ve antrenman uygulaması. Fotoğrafla kalori takibi, yapay zekâ beslenme koçu Glowie ve sesli koşu koçu tek uygulamada." />
      <Wrap>
        <div className="mb-16"><GlowUppCard /></div>
        <Row title="Fotoğrafla kalori takibi">
          <p>Tabağının fotoğrafını çek, Glow Upp yemeği tanısın ve yaklaşık kalori ile besin değerlerini göstersin. Her öğünü tek tek aramak ve gram girmek zorunda kalmadan günün nasıl geçtiğini gör.</p>
          <p>Fotoğraftan yapılan tahminler yaklaşık değerlerdir; istersen porsiyonu elle düzeltebilirsin.</p>
        </Row>
        <Row title="Glowie: beslenme koçun">
          <p>Glowie, sorularını yanıtlayan ve hedeflerine göre öneriler veren yapay zekâ koçu. “Akşam ne yesem?”, “Antrenmandan önce ne yemeliyim?” gibi günlük soruları sorabilirsin.</p>
          <p>Glowie genel bilgi verir; tıbbi bir durumun varsa doktoruna ya da diyetisyenine danışmanın yerini tutmaz.</p>
        </Row>
        <Row title="Sesli koşu koçu">
          <p>Koşarken telefona bakmana gerek yok. Koşu koçu tempon, mesafen ve süren hakkında kulaklığından bilgi verir, ısınma ve soğuma aralarında sana eşlik eder.</p>
        </Row>
        <Row title="Rutin ve tarifler">
          <p>Günlük rutin bölümü su, uyku ve hareket gibi küçük alışkanlıkları takip etmeni sağlar. Sağlıklı tarifler bölümü ise hazırlaması kolay, öğrenci bütçesine uygun öğünler içerir.</p>
        </Row>
        <Row title="Neden 15 yaş ve üstü?">
          <p>Kalori takibi ve beslenme hedefleri, büyüme çağındaki çocuklar için uygun değil. Bu yüzden Glow Upp'ı 15 yaş ve üstü kullanıcılar için tasarladık. Daha küçük yaştakiler için PatiFit'in çocuk modunu öneriyoruz.</p>
        </Row>
        <section className="reveal glass rounded-[32px] p-7 sm:p-12 my-10">
          <h2 className="display text-5xl leading-none">Çıkınca haber verelim</h2>
          <p className="mt-3 text-muted max-w-[52ch]">Glow Upp'ın yayın tarihini sosyal medya hesaplarımızda duyuracağız. Test kullanıcısı olmak istersen bize yaz.</p>
          <a href={`mailto:${DATA.email}?subject=Glow%20Upp%20test`} className="press mt-6 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-night font-medium hover:bg-white">
            <Mail className="w-4 h-4" aria-hidden /> Test kullanıcısı ol
          </a>
        </section>
      </Wrap>
    </>
  );
}

/* ---------- Dizi ---------- */
const CAST: [string, string][] = [
  ['Emre', 'Sınıfta herkesin dalga geçtiği çocuk. PatiFit\'i açtığı gün hayatı değişiyor.'],
  ['Pat', 'Kaslı kedi, PatiFit\'in maskotu ve Emre\'nin sert ama iyi kalpli hocası.'],
  ['Kerem', 'Rakip olarak başlayan, zamanla ekibin parçası olan hırslı sınıf arkadaşı.'],
  ['Deniz', 'Ekibin akıllısı. Kimsenin bilmediği bir sırrı var.'],
  ['Firdevs', 'Şınav düellolarının korkulan ismi. Kolay kolay kaybetmez.'],
  ['Max', 'Ekibin robotu. Her şeyi hesaplar ama her zaman doğru hesaplamaz.'],
];

function SeriesPage() {
  const s = DATA.series;
  return (
    <>
      <PageHead kicker="Stüdyo yapımı animasyon mini dizisi" title="Pat'in Öğrencisi" lead={s.text} />
      <Wrap>
        <div className="reveal flex gap-3 overflow-x-auto scroll-x snap-x -mx-2 px-2 pb-1 mb-16">
          {s.stills.map((st, i) => (
            <figure key={st.src} className={`snap-start shrink-0 w-[46%] sm:w-[23%] ${i % 2 ? 'mt-8' : ''}`}>
              <img src={st.src} alt={`${s.name}: ${st.label}`} loading="lazy" className="w-full aspect-[9/14] object-cover rounded-2xl border border-rule" />
              <figcaption className="mt-2 text-sm text-muted">{st.label}</figcaption>
            </figure>
          ))}
        </div>
        <Row title="Dizinin konusu">
          <p>Emre, sınıfta en zayıf ve en çok dalga geçilen öğrenci. Bir gün telefonundaki PatiFit uygulamasını açtığında ekrandan kaslı kedi Pat çıkıyor ve “Artık ben senin hocanım” diyor. O günden sonra Emre'nin her günü bir antrenman, her bölüm yeni bir meydan okuma.</p>
          <p>Dizi; pes etmemeyi, arkadaşlığı ve küçük adımlarla büyük değişimlerin mümkün olduğunu anlatıyor.</p>
        </Row>
        <Row title="Karakterler">
          <ul className="grid sm:grid-cols-2 gap-3 text-base">
            {CAST.map(([n, d]) => (
              <li key={n} onPointerMove={onSpot} className="spot glass rounded-2xl p-5">
                <span className="block text-lg font-medium text-ink">{n}</span>
                <span className="block mt-1 text-ink/70">{d}</span>
              </li>
            ))}
          </ul>
        </Row>
        <Row title="Hikâyeye sen karar ver">
          <p>Birçok bölüm bir soruyla bitiyor: A mı olsun, B mi? Yorumlarda en çok seçilen seçenek bir sonraki bölümün konusu oluyor. Yani dizinin gidişatını izleyiciler belirliyor.</p>
        </Row>
        <Row title="Nerede izlenir?">
          <p>Yeni bölümler düzenli olarak Instagram, TikTok, YouTube ve Facebook'ta yayınlanıyor.</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {DATA.socials.map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noreferrer" className="press inline-flex items-center gap-1.5 h-10 px-4 rounded-full border border-rule text-sm font-medium hover:border-white/25">
                {x.name} <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            ))}
          </div>
        </Row>
        <Row title="Perde arkası">
          <p>Senaryodan seslendirmeye, çizimden kurguya her bölümün nasıl hazırlandığını <a href="/blog/pat-in-ogrencisi-perde-arkasi" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">blog yazımızda</a> anlattık.</p>
        </Row>
      </Wrap>
    </>
  );
}

/* ---------- Hakkimizda ---------- */
function AboutPage() {
  return (
    <>
      <PageHead kicker="Hakkımızda" title="Yufixuz Studio" lead={DATA.studio[0]} />
      <Wrap>
        <Row title="Ne yapıyoruz?">
          <p>{DATA.studio[1]}</p>
          <p>Şu an üç ürünümüz var: evde spor uygulaması <a href="/patifit" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">PatiFit</a>, beslenme ve antrenman uygulaması <a href="/glow-upp" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">Glow Upp</a> ve PatiFit evreninde geçen animasyon dizisi <a href="/pat-in-ogrencisi" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">Pat'in Öğrencisi</a>.</p>
        </Row>
        <Row title="Nasıl çalışıyoruz?">
          <p>Bir uygulamanın fikrini, tasarımını, kodunu, karakter çizimlerini, animasyonlarını ve tanıtım videolarını kendi bünyemizde üretiyoruz. Bu, bir fikri hızlıca deneyip kullanıcılardan gelen geri bildirime göre aynı hafta içinde değiştirebilmemizi sağlıyor.</p>
          <p>Uygulamalarımızı Türkçe, İngilizce, Arapça ve Çince olmak üzere dört dilde yayınlıyoruz.</p>
        </Row>
        <section className="py-10 border-t border-rule">
          <h2 className="reveal text-2xl sm:text-3xl font-medium">Değerlerimiz</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {DATA.values.map(([t, d]) => (
              <div key={t} onPointerMove={onSpot} className="spot reveal lift glass rounded-3xl p-7">
                <h3 className="text-xl font-medium">{t}</h3>
                <p className="mt-3 text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <Row title="Bize ulaşın">
          <p>İş birliği, basın ya da destek için <a href="/iletisim" className="text-[#C9C1FF] underline decoration-white/25 underline-offset-4">iletişim sayfamızdan</a> bize ulaşabilirsiniz.</p>
        </Row>
      </Wrap>
    </>
  );
}

/* ---------- Iletisim ---------- */
function ContactPage() {
  return (
    <>
      <Wrap>
        <Row title="Destek">
          <p>Uygulamalarımızla ilgili bir sorun yaşıyorsan e-postana cihaz modelini, uygulama sürümünü ve sorunu kısaca yazman yeterli. Genelde 1–2 iş günü içinde dönüyoruz.</p>
          <p>Hesabının ve verilerinin silinmesini istiyorsan PatiFit'te Profil → Ayarlar bölümünden hesabını silebilir ya da bize yazabilirsin.</p>
        </Row>
        <Row title="İş birliği ve basın">
          <p>Reklam, marka iş birliği ve basın talepleri için de aynı adresi kullanabilirsin. Konu satırına talebinin türünü yazarsan daha hızlı dönebiliriz.</p>
        </Row>
        <Row title="Konum">
          <p>İstanbul, Türkiye (UTC+3)</p>
        </Row>
      </Wrap>
      <Contact />
    </>
  );
}

/* ---------- Yasal ---------- */
function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <PageHead kicker={`Son güncelleme: ${UPDATED}`} title={title} />
      <Wrap><div className="max-w-[68ch] pb-10">{children}</div></Wrap>
    </>
  );
}

/* ---------- Blog ---------- */
function BlogIndex() {
  const cats = Array.from(new Set(POSTS.map((p) => p.cat)));
  return (
    <>
      <PageHead kicker="Blog" title="Hareket notları" lead="Evde spora başlamak, doğru teknik, alışkanlık kurmak ve stüdyodan perde arkası. Yufixuz Studio ekibinin yazıları." />
      <Wrap>
        {cats.map((c) => (
          <section key={c} className="pb-14">
            <h2 className="reveal text-2xl font-medium">{c}</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {POSTS.filter((p) => p.cat === c).map((p) => <PostCard key={p.slug} p={p} />)}
            </div>
          </section>
        ))}
      </Wrap>
    </>
  );
}

function NodeView({ n }: { n: Node }) {
  switch (n.t) {
    case 'h': return <h2 className="pt-6 text-2xl sm:text-[28px] font-medium leading-tight text-ink">{n.x}</h2>;
    case 'p': return <p>{n.x}</p>;
    case 'ul': return <ul className="space-y-2.5">{n.x.map((x) => <li key={x} className="flex gap-3"><span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-iris shrink-0" aria-hidden />{x}</li>)}</ul>;
    case 'ol': return <ol className="space-y-2.5">{n.x.map((x, i) => <li key={x} className="flex gap-3"><span className="tnum text-iris font-medium w-6 shrink-0">{i + 1}.</span>{x}</li>)}</ol>;
    case 'note': return <aside className="glass rounded-2xl p-5 text-base text-ink/70">{n.x}</aside>;
  }
}

function BlogPost({ p }: { p: Post }) {
  const more = POSTS.filter((x) => x.slug !== p.slug && x.cat === p.cat).concat(POSTS.filter((x) => x.cat !== p.cat)).slice(0, 3);
  return (
    <>
      <article>
        <header className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20">
          <a href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden /> Tüm yazılar
          </a>
          <p className="mt-8 text-sm text-muted">{p.cat} · {fmtDate(p.date)} · {readMin(p)} dk okuma</p>
          <h1 className="fade-in mt-3 text-4xl sm:text-6xl font-medium leading-[1.08] tracking-tight max-w-[22ch]">{p.title}</h1>
          <p className="fade-in mt-6 max-w-[56ch] text-lg sm:text-xl leading-relaxed text-ink/80">{p.desc}</p>
          <div className="fade-in mt-10 h-[260px] sm:h-[380px] rounded-[28px] overflow-hidden border border-rule bg-gradient-to-br from-indigo/40 via-deep to-cobalt/30 grid place-items-center p-6">
            <img src={p.cover} alt="" className="max-h-full max-w-full object-contain rounded-2xl" />
          </div>
        </header>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          <div className="max-w-[68ch] space-y-5 text-[17px] sm:text-lg leading-[1.75] text-ink/85">
            {p.body.map((n, i) => <NodeView key={i} n={n} />)}
          </div>
          <p className="mt-10 text-sm text-muted">Yazan: Yufixuz Studio</p>
        </div>
      </article>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
        <h2 className="display text-5xl leading-none">Diğer yazılar</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4">{more.map((x) => <PostCard key={x.slug} p={x} />)}</div>
      </section>
    </>
  );
}

function NotFound() {
  return <PageHead title="Sayfa bulunamadı" lead="Aradığın sayfa taşınmış ya da hiç var olmamış olabilir." back={['/', 'Ana sayfaya dön']} />;
}

/* ---------- rota listesi ---------- */
export interface Route { path: string; title: string; desc: string; image?: string; type?: string; render: () => React.ReactNode }

export const ROUTES: Route[] = [
  { path: '/', title: 'Yufixuz Studio — Mobil Uygulama Stüdyosu', desc: 'Yufixuz Studio; PatiFit ve Glow Upp gibi spor, sağlık ve eğlence odaklı mobil uygulamalar geliştiren bağımsız bir stüdyo.', render: () => <Home /> },
  { path: '/patifit', title: 'PatiFit — Kaslı kedi Pat ile evde spor | Yufixuz Studio', desc: "PatiFit; kişiye özel yol haritası, kamerayla şınav düelloları, seriler, ligler ve çocuk modu ile evde ekipmansız spor uygulaması.", render: () => <PatiFitPage /> },
  { path: '/glow-upp', title: 'Glow Upp — Beslenme ve antrenman koçu | Yufixuz Studio', desc: 'Glow Upp; fotoğrafla kalori takibi, yapay zekâ beslenme koçu Glowie ve sesli koşu koçu sunan, 15 yaş ve üstü için uygulama.', render: () => <GlowUppPage /> },
  { path: '/pat-in-ogrencisi', title: "Pat'in Öğrencisi — Animasyon mini dizisi | Yufixuz Studio", desc: "Emre ile kaslı kedi Pat'in hikâyesi. Gidişatına izleyicilerin karar verdiği, Yufixuz Studio yapımı animasyon mini dizisi.", render: () => <SeriesPage /> },
  { path: '/hakkimizda', title: 'Hakkımızda | Yufixuz Studio', desc: 'Yufixuz Studio kimdir, ne yapar ve neye önem verir? Bağımsız mobil uygulama stüdyomuzu tanıyın.', render: () => <AboutPage /> },
  { path: '/iletisim', title: 'İletişim ve destek | Yufixuz Studio', desc: 'Destek, iş birliği ve basın talepleri için Yufixuz Studio ile iletişime geçin.', render: () => <ContactPage /> },
  { path: '/gizlilik', title: 'Gizlilik Politikası | Yufixuz Studio', desc: 'yufixuz.com ve Yufixuz Studio uygulamalarının gizlilik politikası, çerezler ve reklamlar hakkında bilgi.', render: () => <LegalPage title="Gizlilik Politikası"><Privacy /></LegalPage> },
  { path: '/kullanim-kosullari', title: 'Kullanım Koşulları | Yufixuz Studio', desc: 'yufixuz.com ve Yufixuz Studio uygulamalarının kullanım koşulları.', render: () => <LegalPage title="Kullanım Koşulları"><Terms /></LegalPage> },
  { path: '/blog', title: 'Blog — Evde spor ve alışkanlık rehberleri | Yufixuz Studio', desc: 'Evde spora başlama, doğru şınav ve squat tekniği, alışkanlık kurma ve çocuklar için hareket üzerine rehber yazılar.', render: () => <BlogIndex /> },
  ...POSTS.map((p): Route => ({ path: `/blog/${p.slug}`, title: `${p.title} | Yufixuz Studio`, desc: p.desc, image: p.cover, type: 'article', render: () => <BlogPost p={p} /> })),
];
export const NOT_FOUND: Route = { path: '/404', title: 'Sayfa bulunamadı | Yufixuz Studio', desc: 'Aradığın sayfa bulunamadı.', render: () => <NotFound /> };

export const findRoute = (path: string) => {
  const clean = path.replace(/\/+$/, '') || '/';
  return ROUTES.find((r) => r.path === clean) ?? NOT_FOUND;
};

export function Page({ path }: { path: string }) {
  return <Layout>{findRoute(path).render()}</Layout>;
}

export { SITE, postBySlug, Block };
