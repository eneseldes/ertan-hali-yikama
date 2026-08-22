import { business } from '../../data/content'
import { MapPinIcon } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import './ServiceArea.scss'

export default function ServiceArea() {
  return (
    <section id="hizmet-bolgesi" className="service-area">
      <div className="service-area__container">
        <Reveal className="service-area__text">
          <p className="section-eyebrow">Hizmet Bölgesi</p>
          <h2>Niğde&apos;nin Her Noktasındayız</h2>
          <p className="section-lead">
            Merkez ve çevre ilçelerin tamamına ücretsiz al-getir servisiyle hizmet
            veriyoruz.
          </p>
          <ul className="service-area__list">
            {business.serviceAreas.map((area) => (
              <li key={area}>
                <MapPinIcon width={18} height={18} />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="service-area__map">
          {/* TODO: gerçek adresle Google Maps embed linkini content.js > mapsEmbedSrc içine gir */}
          <iframe
            title="Ertan Halı Yıkama hizmet bölgesi haritası"
            src={business.mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
