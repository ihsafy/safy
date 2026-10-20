import { contact } from '../data/content.js'

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact__top">
          <div>
            <p className="contact__eyebrow">Contact</p>
            <h2 className="contact__title" id="contact-title">
              {contact.heading}
            </h2>
          </div>
          <div>
            <p className="contact__deck">{contact.deck}</p>
            <a
              className="contact__cta"
              href={contact.methods[0]?.href || '#contact'}
              target={contact.methods[0]?.href?.startsWith('http') ? '_blank' : undefined}
              rel={
                contact.methods[0]?.href?.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
            >
              {contact.cta || 'Send an email'}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <ul className="contact__grid">
          {contact.methods.map((method) => (
            <li className="contact__cell" key={method.label} data-reveal>
              <span className="contact__cell-k">{method.label}</span>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {method.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
