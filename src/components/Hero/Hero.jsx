import { business, heroVideo } from '../../data/content'
import { PhoneIcon, WhatsAppIcon } from '../Icons/Icons'
import ParallaxBubbles, { HERO_BUBBLES } from '../ParallaxBubbles/ParallaxBubbles'
import Reveal from '../Reveal/Reveal'
import './Hero.scss'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media" aria-hidden="true">
        {/* TODO: public/videos/hero-hali-yikama.mp4 ile değiştir. Yoksa poster kalır. */}
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideo.poster}
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
        <div className="hero__tint" />
      </div>

      <ParallaxBubbles variant="white" bubbles={HERO_BUBBLES} className="hero__bubbles" growIn />

      <div className="hero__container">
        {/* İçerik köpükler büyüdükten sonra (~1.6sn) gelsin diye gecikmeli. */}
        <Reveal delay={1550} className="hero__text">
          <p className="hero__eyebrow">{business.city} · Halı, Koltuk &amp; Yorgan Yıkama</p>
          <h1>
            Niğde&apos;de Güvenilir
            <br />
            Halı Yıkama Merkezi
          </h1>
          <p className="hero__lead">
            Halınızı kapınızdan alıyor, antibakteriyel yöntemlerle tertemiz yıkayıp
            zamanında geri teslim ediyoruz. Al-getir servisi tamamen ücretsiz.
          </p>

          <div className="hero__actions">
            <a className="btn-primary" href={business.phoneHref}>
              <PhoneIcon width={20} height={20} />
              Hemen Ara
            </a>
            <a
              className="btn-outline"
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width={20} height={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
