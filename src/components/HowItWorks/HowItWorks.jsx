import { steps } from '../../data/content'
import { stepIconMap } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import './HowItWorks.scss'

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="how">
      <div className="how__container">
        <Reveal className="how__header">
          <p className="section-eyebrow">Nasıl Çalışır?</p>
          <h2>4 Adımda Tertemiz Halı</h2>
        </Reveal>

        <ol className="how__steps">
          {steps.map((step, i) => {
            const Icon = stepIconMap[step.icon]
            return (
              <Reveal as="li" key={step.title} delay={i * 130} className="how-step">
                <Icon className="how-step__icon" aria-hidden="true" />
                <span className="how-step__number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
