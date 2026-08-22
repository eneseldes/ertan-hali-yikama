import { services } from '../../data/content'
import { iconMap } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import ParallaxBubbles from '../ParallaxBubbles/ParallaxBubbles'
import './Services.scss'

// Sol/sağ kenar boşluklarında kümelenmiş köpükler (ortada yok, simetrik değil).
// `clamp()` ile büyük ekranda kartlara binmez. Hız burada değil, boyuttan
// ParallaxBubbles içinde otomatik hesaplanır.
const SERVICES_BUBBLES = [
  { id: 's1', top: '55%', left: 'clamp(10px, 2.8%, 55px)', size: 70, opacity: 0.4, blur: 0 },
  { id: 's2', top: '60%', left: 'clamp(22px, 6%, 130px)', size: 80, opacity: 0.46, blur: 1 },

  { id: 's3', top: '48%', right: 'clamp(16px, 4%, 90px)', size: 70, opacity: 0.42, blur: 0 },
  { id: 's4', top: '70%', right: 'clamp(10px, 2.5%, 55px)', size: 75, opacity: 0.4, blur: 1 },
  { id: 's5', top: '88%', right: 'clamp(20px, 5%, 120px)', size: 77, opacity: 0.46, blur: 0 },
]

export default function Services() {
  return (
    <section id="hizmetler" className="services">
      <ParallaxBubbles variant="blue" bubbles={SERVICES_BUBBLES} className="services__bubbles" />

      <div className="services__container">
        <Reveal className="services__header">
          <p className="section-eyebrow">Hizmetlerimiz</p>
          <h2>İhtiyacınız Olan Her Yıkama Hizmeti</h2>
          <p className="section-lead">
            Halıdan yorgana, koltuktan perdeye kadar evinizin tüm tekstil ürünleri
            için profesyonel yıkama ve bakım hizmeti sunuyoruz.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal as="article" key={service.id} delay={(i % 3) * 90} className="service-card">
                <div className="service-card__image">
                  <div className="service-card__image-inner">
                    {/* Yer tutucu: gerçek hizmet fotoğrafı gelince değiştirilecek */}
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <span className="service-card__icon">
                    <Icon width={22} height={22} />
                  </span>
                </div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
