import { useState } from 'react'
import { about, business, heroVideo } from '../../data/content'
import { PhoneIcon, WhatsAppIcon } from '../Icons/Icons'
import ParallaxBubbles, { HERO_BUBBLES } from '../ParallaxBubbles/ParallaxBubbles'
import Reveal from '../Reveal/Reveal'
import './Hero.scss'

// Loop başa sararken kesme hissi olmasın diye videonun son saniyeleri sönerek
// biter. Hero.scss > $video-fade-duration ile aynı olmalı.
const LOOP_FADE_SECONDS = 1.2

export default function Hero() {
  // Video hazır olunca (ya da yüklenemeyince poster'la) yumuşak geçişle belirir.
  const [mediaReady, setMediaReady] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)
  const showMedia = () => setMediaReady(true)

  const handleTimeUpdate = (e) => {
    const { currentTime, duration } = e.currentTarget
    if (!duration) return
    setFadingOut(duration - currentTime <= LOOP_FADE_SECONDS)
  }

  return (
    <section id="top" className="hero">
      <div className="hero__media" aria-hidden="true">
        <video
          className={`hero__video ${mediaReady ? 'hero__video--ready' : ''} ${fadingOut ? 'hero__video--fading' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          tabIndex={-1}
          poster={heroVideo.poster}
          onCanPlay={showMedia}
          onError={showMedia}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
        <div className="hero__tint" />
      </div>

      <ParallaxBubbles variant="white" bubbles={HERO_BUBBLES} className="hero__bubbles" growIn />

      <div className="hero__container">
        {/* Köpükler büyüdükten sonra gelsin diye gecikmeli; header da aynı anda
            insin diye styles/_transitions.scss > $delay-hero-entrance ile eşleşir. */}
        <Reveal delay={800} className="hero__text">
          <p className="hero__eyebrow">Temizlikte Fark Yaratan Dokunuş</p>
          <h1>
            Niğde&apos;de Güvenilir
            <br />
            Halı Yıkama Hizmeti
          </h1>
          <p className="hero__lead">
            {about.intro} Halı, koltuk ve araç koltuğu temizliği — titizlikle ve
            özenle.
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
