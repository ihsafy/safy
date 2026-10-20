import { useEffect, useState } from 'react'

/**
 * Reveal system — fail-safe by construction.
 *
 * The previous implementation hid elements via CSS and relied on an
 * IntersectionObserver adding `.is-in`. If an element was never wired to the
 * observer (or the observer never fired), that element stayed invisible
 * forever. That is exactly how the hero headline disappeared.
 *
 * This version inverts the logic:
 *   - Content is VISIBLE by default. There is no CSS rule that can hide it
 *     on first paint.
 *   - The hook waits until the browser is actually painting, then opts in to
 *     the hidden-then-reveal animation by adding `reveal-armed` to <html>.
 *   - Every `[data-reveal]` element that is ALREADY on screen at that moment
 *     is revealed immediately (never hidden), so above-the-fold content —
 *     including the hero — cannot flash or stay blank.
 *   - A hard timeout reveals everything, so a broken observer can never trap
 *     content in a hidden state.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement

    const revealAll = () => {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('is-in'))
    }

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // No animation: make sure everything is simply visible, then stop.
    if (reduced || !('IntersectionObserver' in window)) {
      revealAll()
      return undefined
    }

    // Anything within this many px of the current viewport is treated as
    // "already visible" and is shown immediately without animating in.
    const EAGER_MARGIN = 120

    const isOnScreen = (el) => {
      const r = el.getBoundingClientRect()
      return (
        r.top < window.innerHeight + EAGER_MARGIN && r.bottom > -EAGER_MARGIN
      )
    }

    const pending = []
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (isOnScreen(el)) {
        el.classList.add('is-in') // visible now, no animation
      } else {
        pending.push(el)
      }
    })

    // Only now do we arm the CSS that can hide below-the-fold elements.
    if (pending.length) root.classList.add('reveal-armed')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = Number(entry.target.dataset.delay || 0)
          if (delay > 0) {
            window.setTimeout(() => entry.target.classList.add('is-in'), delay)
          } else {
            entry.target.classList.add('is-in')
          }
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )

    pending.forEach((el) => observer.observe(el))

    // Safety net: after 2.5s, reveal anything still hidden no matter what.
    const failsafe = window.setTimeout(revealAll, 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
      root.classList.remove('reveal-armed')
    }
  }, [])
}

/** Tracks the section currently in view for nav highlighting. */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids.join('|')])

  return active
}

/** True once the page has scrolled past the top — used for the header rule. */
export function useStuckHeader(offset = 12) {
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return stuck
}

/** Current time in Dhaka, shown once in the footer. */
export function useDhakaClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Dhaka',
          }).format(new Date()),
        )
      } catch {
        setTime('')
      }
    }
    tick()
    const id = window.setInterval(tick, 30_000)
    return () => window.clearInterval(id)
  }, [])

  return time
}
