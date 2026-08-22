import { business } from '../../data/content'
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from '../Icons/Icons'
import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">{business.name}</span>
          <p>
            {business.city} ve çevresinde profesyonel halı, koltuk ve yorgan yıkama
            hizmeti. {business.foundedYear}&apos;den bu yana hizmetinizdeyiz.
          </p>
        </div>

        <div className="footer__col">
          <h4>İletişim</h4>
          <ul>
            <li>
              <PhoneIcon width={16} height={16} />
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </li>
            <li>
              <WhatsAppIcon width={16} height={16} />
              <a href={business.whatsappHref}>{business.whatsappDisplay}</a>
            </li>
            <li>
              <MapPinIcon width={16} height={16} />
              <span>{business.address}</span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Hızlı Linkler</h4>
          <ul className="footer__links">
            <li><a href="#hizmetler">Hizmetlerimiz</a></li>
            <li><a href="#neden-biz">Neden Biz?</a></li>
            <li><a href="#nasil-calisir">Nasıl Çalışır?</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} {business.name}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
