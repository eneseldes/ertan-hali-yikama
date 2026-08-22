import { useEffect, useState } from 'react'
import { business } from '../../data/content'
import { PhoneIcon, WhatsAppIcon } from '../Icons/Icons'
import './FloatingActions.scss'

// Hero geçilince beliren arama + WhatsApp butonları.
export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`floating-actions ${visible ? 'floating-actions--visible' : ''}`}>
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
