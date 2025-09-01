import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router";

export default function CallToActionSection({
  label = "CONTACT US",
  headingLine1 = "LET'S GET",
  headingLine2 = "STARTED",
  buttonText = "GET IN TOUCH",
  buttonHref = "#contact",
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-[400px] md:h-[500px] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Arcs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="300" r="200" stroke="white" strokeWidth="3" fill="none" opacity="0.12" />
          <circle cx="400" cy="300" r="280" stroke="white" strokeWidth="3" fill="none" opacity="0.12" />
          <circle cx="400" cy="300" r="360" stroke="white" strokeWidth="3" fill="none" opacity="0.12" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Top Label */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="text-[#C5FF6D] text-sm md:text-base font-bold uppercase tracking-wider mb-3">{label}</p>
        </div>

        {/* Main Heading */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="leading-tight -tracking-wide">
            <div className="text-white font-bold uppercase text-[clamp(40px,8vw,120px)]">{headingLine1}</div>
            <div
              className="font-bold uppercase text-[clamp(40px,8vw,120px)]"
              style={{
                color: "transparent",
                WebkitTextStroke: "3px white",
                textStroke: "3px white",
              }}
            >
              {headingLine2}
            </div>
          </h1>
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Link
             to="/Contact"
            className="inline-flex items-center gap-2 bg-[#C5FF6D] hover:bg-[#b8f15d] text-black font-bold uppercase tracking-wide px-8 py-3 md:py-4 rounded-full transition-all duration-200 hover:scale-105"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
