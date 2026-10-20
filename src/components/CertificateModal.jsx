import { useCallback, useEffect, useRef, useState } from 'react'
import { certificate } from '../data/content.js'

/**
 * CertificateModal — an accessible lightbox for the ICIDA 2025 certificate.
 *
 * Behaviour:
 *   - Opens from a real button anywhere on the page (see Research.jsx).
 *   - Traps Tab inside the dialog, closes on Escape or backdrop click, and
 *     restores focus to the element that opened it.
 *   - Renders the certificate at its natural aspect ratio; never stretched.
 *   - The image is supplementary: every fact it conveys is already written out
 *     in text beside the preview.
 */
export default function CertificateModal({ open, onClose }) {
  const frameRef = useRef(null)
  const closeRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // Focus the close button when opened; restore focus on close.
  useEffect(() => {
    if (!open) return undefined
    // Capture the element that triggered the dialog so focus can return to it.
    const previouslyFocused =
      document.activeElement instanceof HTMLElement && document.activeElement !== document.body
        ? document.activeElement
        : document.querySelector('.award__zoom')
    setLoaded(false)
    // Move focus into the dialog on the next frame.
    const raf = window.requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      window.cancelAnimationFrame(raf)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open])

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      // Simple focus trap: keep Tab inside the dialog frame.
      if (event.key === 'Tab' && frameRef.current) {
        const focusables = frameRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  const onBackdrop = useCallback(
    (event) => {
      if (event.target === event.currentTarget) onClose()
    },
    [onClose],
  )

  if (!open) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.label} — ${certificate.conference}`}
      onClick={onBackdrop}
    >
      <div className="lightbox__frame" ref={frameRef}>
        <img
          className="lightbox__img"
          src={certificate.image}
          alt={certificate.imageAlt}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 300ms ease' }}
        />
        <div className="lightbox__bar">
          <span>
            {certificate.label} · ICIDA 2025 · {certificate.dates}
          </span>
          <button
            type="button"
            className="lightbox__close"
            onClick={onClose}
            ref={closeRef}
          >
            Close
            <span aria-hidden="true">✕</span>
          </button>
        </div>
      </div>
    </div>
  )
}
