import { useCallback, useMemo, useRef, useState } from 'react'
import SecHead from './SecHead.jsx'
import TechIcon, { hasIcon } from './TechIcon.jsx'
import { skills } from '../data/content.js'

/**
 * Skills — an editorial technology directory.
 *
 * Structure: a category rail on the left (a real tablist, keyboard
 * navigable) and a panel on the right that swaps with a short 2D transition.
 * Each technology is a ruled row that expands to reveal a one-line
 * description — so the section is scannable at a glance but rewards
 * exploration.
 *
 * No proficiency scores, no percentages, no decorative illustration.
 */
export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id)
  const [openSkill, setOpenSkill] = useState(null)
  const railRef = useRef(null)

  const active = useMemo(
    () => skills.find((c) => c.id === activeId) || skills[0],
    [activeId],
  )

  const selectCategory = useCallback((id) => {
    setActiveId(id)
    setOpenSkill(null)
  }, [])

  // Roving-tabindex keyboard support for the category rail.
  const onRailKeyDown = useCallback(
    (event, currentId) => {
      const i = skills.findIndex((c) => c.id === currentId)
      let next = null
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        next = (i + 1) % skills.length
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        next = (i - 1 + skills.length) % skills.length
      } else if (event.key === 'Home') {
        next = 0
      } else if (event.key === 'End') {
        next = skills.length - 1
      }
      if (next === null) return
      event.preventDefault()
      const target = skills[next]
      selectCategory(target.id)
      railRef.current
        ?.querySelector(`#skilltab-${target.id}`)
        ?.focus()
    },
    [selectCategory],
  )

  const totalSkills = useMemo(
    () => skills.reduce((n, c) => n + c.items.length, 0),
    [],
  )
  const learningCount = useMemo(
    () => skills.reduce((n, c) => n + c.items.filter((i) => i.learning).length, 0),
    [],
  )

  return (
    <section className="band" id="skills" aria-labelledby="skills-title">
      <div className="shell">
        <SecHead
          index="02"
          label="Skills"
          id="skills-title"
          title="A working map of what I build with."
          deck={
            <>
              {totalSkills} technologies across {skills.length} areas. Expand any row to
              read what it is used for. Items marked{' '}
              <span className="skill-row__tag">learning</span> are ones I am actively
              picking up — nothing here is a proficiency score.
            </>
          }
        />

        <div className="skills__layout">
          {/* --- Category rail --- */}
          <div
            className="skill-rail"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Skill categories"
            ref={railRef}
            data-reveal
          >
            {skills.map((cat, i) => {
              const isActive = cat.id === activeId
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`skilltab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls="skill-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={`skill-rail__tab${isActive ? ' is-active' : ''}`}
                  onClick={() => selectCategory(cat.id)}
                  onKeyDown={(event) => onRailKeyDown(event, cat.id)}
                >
                  <span className="skill-rail__idx" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="skill-rail__name">{cat.group}</span>
                  <span className="skill-rail__count" aria-hidden="true">
                    {cat.items.length}
                  </span>
                </button>
              )
            })}
          </div>

          {/* --- Panel --- */}
          <div
            className="skill-panel"
            id="skill-panel"
            role="tabpanel"
            aria-labelledby={`skilltab-${activeId}`}
            tabIndex={-1}
          >
            {/* key forces a fresh element so the swap animation replays */}
            <div className="skill-panel__swap" key={activeId}>
              <div className="skill-panel__head">
                <h3 className="skill-panel__title">{active.group}</h3>
                <p className="skill-panel__summary">{active.summary}</p>
              </div>

              {/* --- Animated technology logo strip --- */}
              <ul className="icon-strip" aria-label={`${active.group} technologies`}>
                {active.items
                  .filter((item) => hasIcon(item.icon))
                  .map((item, i) => (
                    <li
                      className="icon-chip"
                      key={item.name}
                      style={{ '--i': i }}
                      title={item.name}
                    >
                      <TechIcon slug={item.icon} size={26} />
                      <span className="icon-chip__name">{item.name}</span>
                    </li>
                  ))}
              </ul>

              <ul className="skill-rows" style={{ marginTop: '1.1rem' }}>
                {active.items.map((item) => {
                  const key = `${active.id}:${item.name}`
                  const isOpen = openSkill === key
                  return (
                    <li
                      className={`skill-row${isOpen ? ' is-open' : ''}`}
                      key={item.name}
                    >
                      <button
                        type="button"
                        className="skill-row__btn"
                        aria-expanded={isOpen}
                        onClick={() => setOpenSkill(isOpen ? null : key)}
                      >
                        <span className="skill-row__mark" aria-hidden="true" />
                        <span className="skill-row__name">
                          {hasIcon(item.icon) && (
                            <span className="skill-row__icon" aria-hidden="true">
                              <TechIcon slug={item.icon} size={15} />
                            </span>
                          )}
                          {item.name}
                          {item.learning && <span className="skill-row__tag">learning</span>}
                        </span>
                        <span className="skill-row__chev mono" aria-hidden="true">
                          ›
                        </span>
                      </button>
                      <div className="skill-row__detail">
                        <div className="skill-row__detail-inner">
                          <p className="skill-row__note">{item.note}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <p className="skill-foot">
          <span>{totalSkills} technologies</span>
          <span aria-hidden="true">·</span>
          <span>{learningCount} currently learning</span>
          <span aria-hidden="true">·</span>
          <span>{skills.length} areas</span>
        </p>
      </div>
    </section>
  )
}
