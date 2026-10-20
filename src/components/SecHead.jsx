/**
 * SecHead — the split section heading used across the page.
 * Short label left, large serif heading right. Mirrors the reference's
 * compositional logic without copying its layout.
 */
export default function SecHead({ index, label, title, deck, id }) {
  return (
    <div className="sec-head" data-reveal>
      <p className="sec-head__label">
        <span className="sec-head__index">{index}</span>
        <span>{label}</span>
      </p>
      <div>
        <h2 className="sec-head__title" id={id}>
          {title}
        </h2>
        {deck && <p className="sec-head__deck">{deck}</p>}
      </div>
    </div>
  )
}
