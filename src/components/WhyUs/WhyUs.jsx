import { whyUs } from '../../data/content'
import { iconMap } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import './WhyUs.scss'

export default function WhyUs() {
  return (
    <section id="neden-biz" className="why-us">
      <div className="why-us__container">
        <Reveal className="why-us__text">
          <p className="section-eyebrow">Neden Biz?</p>
          <h2>Halınıza Ailemizin Halısı Gibi Bakıyoruz</h2>
          <p className="section-lead">
            Yılların verdiği tecrübeyle, hijyenden hıza kadar her aşamada
            standardımızdan ödün vermiyoruz.
          </p>
        </Reveal>

        <div className="why-us__grid">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <Reveal as="div" key={item.title} delay={i * 90} className="why-card">
                <span className="why-card__icon">
                  <Icon width={26} height={26} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
