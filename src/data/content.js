// TODO: yer tutucu bilgileri gerçek verilerle değiştir.

export const business = {
  name: 'Ertan Halı Yıkama',
  city: 'Niğde',
  phoneDisplay: '0388 000 00 00', // TODO: gerçek telefon
  phoneHref: 'tel:+903880000000', // TODO: gerçek telefon (E.164)
  whatsappDisplay: '0500 000 00 00', // TODO: gerçek WhatsApp
  whatsappHref: 'https://wa.me/905000000000', // TODO: gerçek WhatsApp (ülke kodlu, boşluksuz)
  address: 'Bucakçayır Mah. Örnek Sokak No:0, Niğde', // TODO: gerçek adres
  hours: 'Hafta içi 08:30–19:00 · Cumartesi 09:00–18:00',
  foundedYear: 2012, // TODO: gerçek kuruluş yılı
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Ni%C4%9Fde&output=embed', // TODO: gerçek adresle Google Maps embed linki
  serviceAreas: ['Niğde Merkez', 'Bor', 'Çiftlik', 'Ömer Halisdemir Üniversitesi Çevresi'],
  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
  },
}

// Pexels stok fotoğrafları — gerçek görseller gelince değiştirilecek.
const pexels = (id, w = 800) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const heroVideo = {
  src: '/videos/hero-hali-yikama.mp4', // TODO: gerçek video ekle
  poster: pexels(37881662, 1600),
}

export const services = [
  {
    id: 'hali',
    title: 'Halı Yıkama',
    desc: 'Her yüzey tipine uygun, iplik yapısını koruyan derin yıkama.',
    icon: 'droplet',
    image: pexels(37881662),
  },
  {
    id: 'kilim',
    title: 'Kilim Yıkama',
    desc: 'El dokuması ve makine kilimler için özel bakım programı.',
    icon: 'sparkle',
    image: pexels(3957601),
  },
  {
    id: 'yorgan',
    title: 'Yorgan & Battaniye',
    desc: 'Antibakteriyel yıkama, tam kuruma, alerjenlerden arındırma.',
    icon: 'blanket',
    image: pexels(19814913),
  },
  {
    id: 'koltuk',
    title: 'Koltuk & Döşeme',
    desc: 'Yerinde veya tesiste, leke ve koku giderici özel işlem.',
    icon: 'sofa',
    image: pexels(4401538),
  },
  {
    id: 'perde',
    title: 'Stor Perde',
    desc: 'Sökme-takma dahil, yıpratmadan hızlı perde yıkama.',
    icon: 'curtain',
    image: pexels(33839793),
  },
  {
    id: 'yatak',
    title: 'Yatak Yıkama',
    desc: 'Toz akarı ve leke temizliği ile sağlıklı uyku ortamı.',
    icon: 'bed',
    image: pexels(4469180),
  },
]

export const whyUs = [
  {
    icon: 'truck',
    title: 'Ücretsiz Al-Getir',
    desc: 'Halınızı adresinizden alıyor, temizleyip kapınıza kadar teslim ediyoruz.',
  },
  {
    icon: 'shield',
    title: 'Antibakteriyel Yıkama',
    desc: 'Sağlığınızı önceliklendiren, hijyenik ve derinlemesine temizlik.',
  },
  {
    icon: 'clock',
    title: 'Hızlı Teslim',
    desc: 'Standart süreçlerde birkaç gün içinde halınız kapınızda.',
  },
  {
    icon: 'tag',
    title: 'Uygun Fiyat',
    desc: 'Şeffaf fiyatlandırma, sürpriz ek ücret yok.',
  },
]

export const steps = [
  { icon: 'phoneCall', title: 'Bizi Arayın', desc: 'Telefon veya WhatsApp ile hemen iletişime geçin.' },
  { icon: 'truck', title: 'Adresten Alım', desc: 'Halınızı kapınızdan ücretsiz teslim alıyoruz.' },
  { icon: 'washer', title: 'Profesyonel Yıkama', desc: 'Yıkama, durulama ve tam kurutma işlemi.' },
  { icon: 'check', title: 'Kapınıza Teslim', desc: 'Tertemiz halınız zamanında elinize ulaşır.' },
]

export const faqs = [
  {
    q: 'Halım ne kadar sürede teslim edilir?',
    a: 'Standart yıkama süreci genellikle 2-4 iş günü içinde tamamlanır ve halınız kapınıza teslim edilir.',
  },
  {
    q: 'Al-getir servisi ücretli mi?',
    a: 'Hayır, Niğde merkez ve hizmet bölgemizdeki tüm adreslerden alım ve teslim tamamen ücretsizdir.',
  },
  {
    q: 'Hangi bölgelere hizmet veriyorsunuz?',
    a: 'Niğde merkez, Bor, Çiftlik ve çevresindeki tüm mahallelere hizmet veriyoruz.',
  },
  {
    q: 'Yün ve el dokuması halılar yıkanıyor mu?',
    a: 'Evet, yün ve el dokuması hassas halılar için özel yıkama programımız bulunuyor.',
  },
]
