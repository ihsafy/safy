/**
 * SplitWords — staggers a headline word-by-word.
 *
 * Words stay in the normal text flow (spaces preserved as real text), so the
 * content remains readable, selectable, and correctly announced by screen
 * readers. The visual stagger is purely CSS-driven and is skipped entirely
 * when the user prefers reduced motion.
 */
export default function SplitWords({ text, start = 0, step = 70, className }) {
  const words = String(text).split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="split-word"
          style={{ '--word-delay': `${start + i * step}ms` }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}
