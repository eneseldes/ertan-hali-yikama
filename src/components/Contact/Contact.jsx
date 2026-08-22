import { business } from '../../data/content'
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import './Contact.scss'

export default function Contact() {
  return (
    <section id="iletisim" className="contact">
      <div className="contact__container">
        <Reveal className="contact__info">
          <p className="section-eyebrow">İletişim</p>
          <h2>Bize Her Zaman Ulaşabilirsiniz</h2>
          <p className="section-lead">
            Sorularınız ve halı, koltuk, yorgan yıkama talepleriniz için aşağıdaki
            numaralardan bize ulaşabilir ya da doğrudan adresimize gelebilirsiniz.
            Size yardımcı olmaktan mutluluk duyarız.
          </p>

          <ul className="contact__details">
            <li>
              <PhoneIcon />
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </li>
            <li>
              <WhatsAppIcon />
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
                {business.whatsappDisplay}
              </a>
            </li>
            <li>
              <MapPinIcon />
              <span>{business.address}</span>
            </li>
            <li>
              <ClockIcon />
              <span>{business.hours}</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
