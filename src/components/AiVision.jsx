import SecHead from './SecHead.jsx'
import { aiVision } from '../data/content.js'

export default function AiVision() {
  const total = aiVision.reduce((n, c) => n + c.items.length, 0)

  return (
    <section className="band" id="ai" aria-labelledby="ai-title">
      <div className="shell">
        <SecHead
          index="04"
          label="AI & Vision"
          id="ai-title"
          title="Where machine learning meets pixels."
          deck={`${total} directions I have studied and built in — grounded in real projects, datasets, and papers rather than aspirations.`}
        />

        <div className="ai__grid">
          {aiVision.map((column, ci) => (
            <div className="ai__col" key={column.title}>
              <h3 className="ai__col-title">
                {column.title}
                <span>{String(column.items.length).padStart(2, '0')}</span>
              </h3>
              <ul>
                {column.items.map((item, i) => (
                  <li
                    className="ai__item"
                    key={item.term}
                    data-reveal
                    data-delay={ci * 80 + i * 45}
                  >
                    <span className="ai__bullet" aria-hidden="true" />
                    <div>
                      <p className="ai__term">{item.term}</p>
                      <p className="ai__note">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
