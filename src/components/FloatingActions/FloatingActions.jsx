import { business } from '../../data/content'
import { useScrollThreshold } from '../../hooks/useScrollThreshold'
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from '../Icons/Icons'
import './FloatingActions.scss'

// Hero geçilince beliren Instagram, arama ve WhatsApp butonları.
export default function FloatingActions() {
  const visible = useScrollThreshold(window.innerHeight * 0.6)

  return (
    <div className={`floating-actions ${visible ? 'floating-actions--visible' : ''}`}>
      <a
        className="floating-actions__btn floating-actions__btn--instagram"
        href={business.social.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram: ${business.social.instagramDisplay}`}
      >
        <InstagramIcon width={26} height={26} />
      </a>
      <a
        className="floating-actions__btn floating-actions__btn--phone"
        href={business.phoneHref}
        aria-label={`Ara: ${business.phoneDisplay}`}
      >
        <PhoneIcon width={24} height={24} />
      </a>
      <a
        className="floating-actions__btn floating-actions__btn--whatsapp"
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yazın"
      >
        <WhatsAppIcon width={26} height={26} />
      </a>
    </div>
  )
}
