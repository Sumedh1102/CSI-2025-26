import { ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router";

export function DashboardCards() {
  const containerRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState([false, false, false, false])
  const [scrollDirection, setScrollDirection] = useState("down")
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up")
      lastScrollY.current = currentScrollY
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")

          if (entry.isIntersecting) {
            // Stagger the animation based on scroll direction
            const delay = scrollDirection === "down" ? cardIndex * 150 : (3 - cardIndex) * 150

            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[cardIndex] = true
                return newVisible
              })
            }, delay)
          } else {
            // Reset when out of view
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[cardIndex] = false
              return newVisible
            })
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      },
    )

    window.addEventListener("scroll", handleScroll, { passive: true })

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll("[data-card-index]")
      cards.forEach((card) => observer.observe(card))
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [scrollDirection])

  const getCardAnimation = (index, isVisible) => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isVisible) {
      return `${baseClasses} opacity-0 ${
        scrollDirection === "down" ? "translate-y-8 scale-95" : "translate-y-[-32px] scale-95"
      }`
    }

    return `${baseClasses} opacity-100 translate-y-0 scale-100`
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {/* Active Users Card */}
      <div
        data-card-index="0"
        className={`bg-zinc-900 rounded-3xl p-8 h-80 flex flex-col justify-between hover:bg-zinc-800/50 transition-all duration-300 group shadow-lg ${getCardAnimation(0, visibleCards[0])}`}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-xs text-zinc-400 uppercase tracking-wider">Members & Engagement</div>
          </div>
          <div className="text-6xl font-light font-archivo text-white group-hover:text-lime-50 transition-colors duration-300">
            200+  
          </div>
          <div className="text-sm text-zinc-400">
            +15% growth in membership this year
            <br />
            <span className="text-lime-400 font-medium">Join the fastest-growing community </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>
          </div>
        </div>
      </div>

      {/* Customer Retention Card */}
      <div
        data-card-index="1"
        className={`bg-zinc-900 rounded-3xl p-8 h-80 flex items-center justify-center hover:bg-zinc-800/50 transition-all duration-300 group shadow-lg ${getCardAnimation(1, visibleCards[1])}`}
      >
        <div className="relative">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgb(63 63 70)"
                strokeWidth="2"
                className="opacity-30"
              />
              {/* Outer decorative circles */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="rgb(63 63 70)"
                strokeWidth="0.5"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgb(63 63 70)"
                strokeWidth="0.5"
                className="opacity-20"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgb(163 230 53)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${94 * 2.827} ${100 * 2.827}`}
                className="transition-all duration-1000 ease-out group-hover:stroke-lime-300"
                style={{ filter: "drop-shadow(0 0 8px rgb(163 230 53 / 0.3))" }}
              />
            </svg>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1 group-hover:text-zinc-300 transition-colors duration-300">
              Hackathons
            </div>
            <div className="text-4xl font-normal text-white group-hover:text-lime-50 transition-colors duration-300">
              90%
            </div>
          </div>
         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
  <div className="text-base text-white uppercase tracking-wider font-bold whitespace-nowrap group-hover:text-lime-100 transition-colors duration-300">
    Events & Activities
  </div>

          </div>
        </div>
      </div>

      {/* Revenue Growth Card */}
      <div
        data-card-index="2"
        className={`bg-zinc-900 rounded-3xl p-8 h-80 flex flex-col justify-between hover:bg-zinc-800/50 transition-all duration-300 group shadow-lg ${getCardAnimation(2, visibleCards[2])}`}
      >
        <div className="flex items-center justify-between">
          <div className="group-hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-thin text-white group-hover:text-lime-50 transition-colors duration-300">
              Achievements
            </div>
            <div className="text-3xl font-thin text-white group-hover:text-lime-50 transition-colors duration-300">
              Recognition
            </div>
          </div>
          <div className="text-sm text-zinc-400 uppercase tracking-wider transform rotate-90 origin-center group-hover:rotate-180 transition-transform duration-500">
            <TrendingUp className="w-5 h-5 group-hover:text-lime-400 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-xs text-zinc-400 uppercase tracking-wider group-hover:text-zinc-300 transition-colors duration-300">
            Projects Published in National Journals
          </div>

        </div>
      </div>

      {/* Conversion Goals Card */}
      <div
        data-card-index="3"
        className={`bg-zinc-900 rounded-3xl p-8 h-80 flex flex-col justify-between hover:bg-zinc-800/50 transition-all duration-300 group shadow-lg ${getCardAnimation(3, visibleCards[3])}`}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-bold text-white group-hover:text-lime-50 transition-colors duration-300">
              CONVERSION
            </div>
          </div>
          <div className="text-3xl font-bold text-white border border-zinc-700 px-3 py-2 inline-block group-hover:border-lime-400/30 group-hover:text-lime-50 transition-all duration-300">
            TARGETS
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-sm text-zinc-400 uppercase tracking-wider group-hover:text-zinc-300 transition-colors duration-300">
            500+ Students Impacted
          </div>
          <div className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center  group-hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25">
          <Link 
            to="/contact"
           >
            <ArrowRight className="w-6 h-6 text-black  transition-transform duration-300 -rotate-45 hover:-rotate-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCards
