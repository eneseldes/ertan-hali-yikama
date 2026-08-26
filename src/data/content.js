// TODO: yer tutucu bilgileri gerçek verilerle değiştir.

export const business = {
  name: 'Ertan Halı Yıkama',
  city: 'Niğde',
  phoneDisplay: '0551 563 03 51',
  phoneHref: 'tel:+905515630351',
  whatsappDisplay: '0551 563 03 51',
  whatsappHref: 'https://wa.me/905515630351',
  address: 'Akpınar Apartmanı, Kale Mah. Deveci Sk. No:13, 51000 Niğde Merkez/Niğde',
  hours: 'Hafta içi 08:30–19:00 · Cumartesi 09:00–18:00',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Ertan+Hal%C4%B1+Y%C4%B1kama+Deveci+Sk.+No%3A13+Kale+Ni%C4%9Fde&output=embed',
  serviceAreas: ['Niğde Merkez', 'Bor', 'Çiftlik', 'Ömer Halisdemir Üniversitesi Çevresi'],
  social: {
    instagramDisplay: 'ertan.haliyikama',
    instagramHref: 'https://www.instagram.com/ertan.haliyikama/',
    facebookHref: 'https://facebook.com/', // TODO
  },
}

// İşletmenin kendi tanıtım metni
export const about = {
  intro:
    'Profesyonel temizlik hizmetleriyle yaşam alanlarınızı ve araçlarınızı daha temiz ve hijyenik hale getiriyoruz.',
  services:
    'Koltuk yıkama, araç koltuğu temizliği, halı ve ev tekstili temizliği gibi hizmetlerimizi titizlikle ve özenle gerçekleştiriyoruz.',
  quality:
    'Kaliteli temizlik ürünleri ve profesyonel ekipmanlarla, kir ve lekelerin giderilmesine yardımcı oluyoruz.',
  promise:
    'Müşteri memnuniyetini ön planda tutarak güvenilir, özenli ve titiz hizmet sunuyoruz.',
  cta: 'Niğde’de temizlik hizmetlerimizden yararlanmak için bizimle iletişime geçebilirsiniz.',
}

export const heroVideo = {
  src: '/media/hero-hali-yikama.mp4',
  poster: '/media/hali-foto.jpeg',
}

export const services = [
  {
    id: 'hali',
    title: 'Halı Yıkama',
    desc: 'Her yüzey tipine uygun, iplik yapısını koruyan derin yıkama.',
    icon: 'carpet',
    image: '/media/hali-foto.jpeg',
  },
  {
    id: 'koltuk',
    title: 'Koltuk Yıkama',
    desc: 'Koltuk, döşeme ve yatak başlıklarında leke ve koku giderici özel işlem.',
    icon: 'sofa',
    image: '/media/koltuk.jpeg',
  },
  {
    id: 'arac-koltugu',
    title: 'Araç Koltuğu',
    desc: 'Aracınızın koltuk ve döşemesi için profesyonel ekipmanla iç temizlik.',
    icon: 'car',
    image: '/media/arac-koltugu.jpeg',
  },
  {
    id: 'kilim',
    title: 'Kilim Yıkama',
    desc: 'El dokuması ve makine kilimler için dokusuna uygun bakım.',
    icon: 'kilim',
    image: '/media/kilim.jpeg',
  },
  {
    id: 'yorgan',
    title: 'Yorgan & Battaniye',
    desc: 'Ev tekstilinizi hijyenik biçimde yıkıyor, tam kurutarak teslim ediyoruz.',
    icon: 'blanket',
    image: '/media/yorgan.jpeg',
  },
  {
    id: 'perde',
    title: 'Stor Perde',
    desc: 'Sökme-takma dahil, yıpratmadan özenli perde yıkama.',
    icon: 'curtain',
    image: '/media/stor-perde.jpeg',
  },
]

export const whyUs = [
  {
    icon: 'truck',
    title: 'Adresinizden Alım & Teslim',
    desc: 'Halınızı ve tekstil ürünlerinizi adresinizden alıyor, temizleyip kapınıza teslim ediyoruz.',
  },
  {
    icon: 'shield',
    title: 'Kaliteli Ürün & Ekipman',
    desc: 'Kaliteli temizlik ürünleri ve profesyonel ekipmanlarla, kir ve lekelerin giderilmesine yardımcı oluyoruz.',
  },
  {
    icon: 'sparkle',
    title: 'Titizlik ve Özen',
    desc: 'Koltuk, araç koltuğu, halı ve ev tekstili temizliğini titizlikle ve özenle gerçekleştiriyoruz.',
  },
  {
    icon: 'heart',
    title: 'Müşteri Memnuniyeti',
    desc: 'Müşteri memnuniyetini ön planda tutarak güvenilir, özenli ve titiz hizmet sunuyoruz.',
  },
]

export const steps = [
  { icon: 'phoneCall', title: 'Bizi Arayın', desc: 'Telefon veya WhatsApp ile hemen iletişime geçin.' },
  { icon: 'truck', title: 'Adresten Alım', desc: 'Halınızı ve tekstil ürünlerinizi adresinizden teslim alıyoruz.' },
  { icon: 'vacuum', title: 'Profesyonel Yıkama', desc: 'Kaliteli ürün ve profesyonel ekipmanlarla titiz yıkama ve kurutma.' },
  { icon: 'check', title: 'Kapınıza Teslim', desc: 'Tertemiz halınız söz verdiğimiz gün elinize ulaşır.' },
]

export const faqs = [
  {
    q: 'Halım ne kadar sürede teslim edilir?',
    a: 'Süre; ürünün cinsine, ölçüsüne ve o günkü yoğunluğa göre değişir. Ürününüzü teslim alırken kesin teslim gününü baştan söylüyoruz.',
  },
  {
    q: 'Adresimden alıp teslim ediyor musunuz?',
    a: 'Evet. Niğde merkez ve hizmet bölgemizdeki adreslerden alım ve teslim yapıyoruz. Alım-teslim şartları için bizi arayabilir ya da WhatsApp’tan yazabilirsiniz.',
  },
  {
    q: 'Araç koltuğu temizliği yapıyor musunuz?',
    a: 'Evet. Araç koltuğu temizliği hizmetlerimiz arasında yer alıyor; aracınızın koltuk ve döşemesini kaliteli temizlik ürünleri ve profesyonel ekipmanlarla temizliyoruz.',
  },
  {
    q: 'Lekeler tamamen çıkar mı?',
    a: 'Kaliteli temizlik ürünleri ve profesyonel ekipmanlarla kir ve lekelerin giderilmesine yardımcı oluyoruz. Sonuç lekenin cinsine ve ne kadar beklediğine göre değişebilir; ürününüzü gördüğümüzde size net bilgi veriyoruz.',
  },
  {
    q: 'Hangi bölgelere hizmet veriyorsunuz?',
    a: 'Niğde merkez, Bor, Çiftlik ve çevresindeki mahallelere hizmet veriyoruz. Bölgenizin kapsamda olup olmadığını öğrenmek için bize ulaşabilirsiniz.',
  },
  {
    q: 'Yün ve el dokuması halılar yıkanıyor mu?',
    a: 'Evet. Yün ve el dokuması hassas halıları, dokusuna uygun temizlik ürünü ve programla titizlikle yıkıyoruz.',
  },
]
