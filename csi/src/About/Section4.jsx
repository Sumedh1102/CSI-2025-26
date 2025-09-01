import { useEffect, useRef, useState } from "react"

export default function HistoryTimeline({
  headingLabel,
  headingTitle,
  description,
  milestones,
  brandColor = "#C5FF6D",
  darkBackground = true,
}) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const count = milestones.length

  const onKeyDownDots = (e) => {
    if (!count) return
    if (e.key === "ArrowRight") {
      e.preventDefault()
      setActiveIndex((prev) => {
        const next = prev == null ? 0 : (prev + 1) % count
        return next
      })
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      setActiveIndex((prev) => {
        const next = prev == null ? count - 1 : (prev - 1 + count) % count
        return next
      })
    } else if (e.key === "Escape") {
      setActiveIndex(null)
    }
  }

  const ttId = (i) => `milestone-tt-${i}`

  const bg = darkBackground ? "bg-black" : "bg-white"
  const panelStyle = { backgroundColor: brandColor }

  const linePoints = milestones
    .map((_, i) => {
      const left = count > 1 ? (i / (count - 1)) * 85 + 7.5 : 50
      const top = count > 1 ? 50 - (i / (count - 1)) * 20 + 10 : 50
      return `${left},${top}`
    })
    .join(" ")

  return (
    <section
      ref={sectionRef}
      className={`w-full ${bg} py-16 px-4 font-sans`}
      aria-label="Company history timeline section"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="rounded-3xl p-8 md:p-16 relative overflow-hidden"
          style={panelStyle}
          role="group"
          aria-labelledby="history-heading"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-16 gap-8">
            <div
              className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              <div className="text-sm font-medium text-black/70 uppercase tracking-wider mb-2">{headingLabel}</div>
              <h1 id="history-heading" className="text-4xl md:text-6xl font-bold text-black leading-none text-balance">
                {headingTitle}
              </h1>
            </div>
            {description ? (
              <div
                className={`max-w-md text-center md:text-right transition-all duration-700 ease-out ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: "280ms" }}
              >
                <p className="text-black/80 text-base leading-relaxed">{description}</p>
              </div>
            ) : null}
          </div>

          {/* Desktop/Tablet: Diagonal timeline */}
          <div
            className="relative hidden md:block h-72 lg:h-80"
            onKeyDown={onKeyDownDots}
            role="list"
            aria-label="Timeline milestones"
            tabIndex={0}
          >
            {/* Diagonal line */}
            <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline
                  points={linePoints}
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: inView ? 0 : 400,
                    transition: "stroke-dashoffset 1000ms ease-out",
                  }}
                />
              </svg>
            </div>

            {/* Dots + Labels */}
            {milestones.map((m, i) => {
              const isHovered = hoveredIndex === i
              const isActive = activeIndex === i
              const left = count > 1 ? (i / (count - 1)) * 85 + 7.5 : 50
              const top = count > 1 ? 50 - (i / (count - 1)) * 20 + 10 : 50

              return (
                <div
                  key={`${m.title}-${i}`}
                  className="absolute"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  role="listitem"
                >
                  {/* Tooltip (hover/focus/active) */}
                  {(isHovered || isActive) && m.tooltip ? (
                    <div
                      id={ttId(i)}
                      role="tooltip"
                      aria-live="polite"
                      className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2 rounded-md text-sm whitespace-nowrap z-10 shadow"
                    >
                      {m.tooltip}
                      <span className="absolute top-full left-1/2 -translate-x-1/2" aria-hidden="true">
                        <svg width="12" height="6" viewBox="0 0 12 6" className="fill-black">
                          <path d="M0 0l6 6 6-6H0z" />
                        </svg>
                      </span>
                    </div>
                  ) : null}

                  {/* Dot */}
                  <button
                    type="button"
                    className={`w-4 h-4 rounded-full border-2 border-black  duration-300 ease-out relative z-20 focus:outline-none focus:ring-2 focus:ring-black/50 ${
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    } ${isHovered || isActive ? "bg-white scale-125" : "bg-black"}`}
                    aria-pressed={isActive}
                    aria-describedby={m.tooltip ? ttId(i) : undefined}
                    aria-label={`${m.title}, ${m.year}`}
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(i)}
                    onBlur={() => setHoveredIndex(null)}
                    style={{ transitionDelay: inView ? `${200 + i * 120}ms` : undefined }}
                  />

                  {/* Label */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 text-center cursor-pointer transition-all duration-300 ease-out ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    } ${isHovered || isActive ? "text-black" : "text-black/80"}`}
                    style={{ top: "32px", transitionDelay: inView ? `${250 + i * 120}ms` : undefined }}
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="text-xl lg:text-2xl font-bold mb-0.5">{m.title}</div>
                    <div className="text-xs lg:text-sm font-medium uppercase tracking-wider">{m.year}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile: Vertical list timeline for readability and tap targets */}
          <div className="md:hidden">
            <ol className="grid grid-cols-1 gap-4" role="list" aria-label="Timeline milestones (vertical)">
              {milestones.map((m, i) => {
                const isActive = activeIndex === i
                return (
                  <li
                    key={`${m.title}-${i}`}
                    className={`rounded-xl border border-black/10 bg-white p-4 transition-all ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                    style={{ transitionDelay: inView ? `${150 + i * 90}ms` : undefined }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-black/70 uppercase tracking-wider">{m.year}</div>
                        <div className="text-lg font-semibold text-black">{m.title}</div>
                      </div>
                      <button
                        type="button"
                        className={`text-sm px-3 py-1.5 rounded-md border border-black/20 ${
                          isActive ? "bg-black text-white" : "bg-white text-black"
                        }`}
                        aria-expanded={isActive}
                        aria-controls={`mobile-tt-${i}`}
                        onClick={() => setActiveIndex(isActive ? null : i)}
                      >
                        {isActive ? "Hide" : "Learn more"}
                      </button>
                    </div>
                    {m.tooltip ? (
                      <div
                        id={`mobile-tt-${i}`}
                        className={`mt-2 text-sm text-black/80 transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                        }`}
                        aria-hidden={!isActive}
                      >
                        {m.tooltip}
                      </div>
                    ) : null}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
