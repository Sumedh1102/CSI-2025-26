import { useEffect, useRef, useState } from "react"

export default function FeaturedWorksSection() {
  // <CHANGE> convert TypeScript useRef<HTMLElement | null>(null) to plain JSX/JS
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== "undefined") {
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
      if (reduce) {
        setIsVisible(true)
        return
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true)
      },
      { threshold: 0.3, rootMargin: "-50px 0px" },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative h-40 sm:h-40 md:h-96 lg:h-[300px] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-[300px]"
        style={{
          background: "linear-gradient(to bottom, #C5FF6D 0%, #C5FF6D 75%, #000000 75%, #000000 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content above background */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Featured Label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-black text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] font-sans">
            Computer Society Of India
          </span>
        </div>

        {/* Works Text with Animation */}
        <div
          className={`transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform will-change-opacity ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 sm:translate-y-16 opacity-0"
          }`}
        >
          <h1 className="text-[clamp(48px,14vw,200px)] font-bold leading-none font-sans whitespace-nowrap select-none">
            <span className="inline-block text-black">C</span>
            <span className="inline-block text-black">O</span>
            <span className="inline-block text-black">N</span>
            <span className="inline-block text-black">T</span>
            <span className="inline-block text-black">A</span>
            <span
              className="inline-block bg-transparent"
              style={{
                WebkitTextStroke: "clamp(2px,0.5vw,8px) black",
                color: "transparent",
              }}
            >
              C
            </span>
            <span
              className="inline-block bg-transparent"
              style={{
                WebkitTextStroke: "clamp(2px,0.5vw,8px) black",
                color: "transparent",
              }}
            >
              T
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}