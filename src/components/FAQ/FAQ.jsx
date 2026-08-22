import { useState } from 'react'
import { faqs } from '../../data/content'
import { ChevronDownIcon } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import './FAQ.scss'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="sss" className="faq">
      <div className="faq__container">
        <Reveal className="faq__header">
          <p className="section-eyebrow">Sık Sorulan Sorular</p>
          <h2>Merak Ettikleriniz</h2>
        </Reveal>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal
                as="div"
                key={item.q}
                delay={i * 90}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenIndex(isOpen ? null : i)
                  }
                }}
              >
                <div className="faq-item__question">
                  <span>{item.q}</span>
                  <ChevronDownIcon className="faq-item__chevron" aria-hidden="true" />
                </div>
                <div className="faq-item__answer-wrap">
                  <p className="faq-item__answer">{item.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
