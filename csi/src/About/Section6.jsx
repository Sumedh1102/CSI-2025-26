import { useEffect, useRef, useState } from "react"
import { Award, Medal, Trophy, Crown } from "lucide-react" // ✅ Lucide icons

const awards = [
  {
    id: 1,
    year: "2014",
    name: "CSI SJCEM ESTABLISHMENT",
    description: "CSI was officially introduced at SJCEM, beginning its journey to empower students in technology and innovation.",
    icon: Award,
  },
  {
    id: 2,
    year: "2016",
    name: "FIRST MAJOR WORKSHOP",
    description: "Organized our first large-scale technical workshop, giving students hands-on exposure to industry-relevant skills.",
    icon: Medal,
  },
  {
    id: 3,
    year: "2019",
    name: "NATIONAL HACKATHON PARTICIPATION",
    description: "CSI SJCEM students represented the college in national hackathons, showcasing talent and collaboration on a larger stage.",
    icon: Trophy,
  },
  {
    id: 4,
    year: "2024",
    name: "TECH x 2.0 FEST",
    description: "Launched the grand tech fest 'TECH x 2.0', featuring events, competitions, and innovations led by CSI members.",
    icon: Crown,
  },
];


export default function AwardsSection() {
  const containerRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const windowHeight = window.innerHeight
      const newVisibleCards = []

      awards.forEach((award) => {
        const cardElement = container.querySelector(`[data-card="${award.id}"]`)
        if (!cardElement) return

        const cardRect = cardElement.getBoundingClientRect()
        if (cardRect.top < windowHeight && cardRect.top + cardRect.height > 0) {
          newVisibleCards.push(award.id)
        }
      })

      setVisibleCards(newVisibleCards)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className=" bg-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-wider">OUR</h2>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">AWARDS</h1>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              We create stunning designs that captivate your audience and drive results.
            </p>
          </div>
        </div>
      </div>

      {/* Awards List */}
      <div ref={containerRef} className="relative">
        {awards.map((award, index) => {
          const isVisible = visibleCards.includes(award.id)
          const Icon = award.icon // ✅ Component reference

          return (
            <div
              key={award.id}
              data-card={award.id}
              className={`sticky top-0 bg-black transition-all duration-700 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: awards.length - index }}
            >
              <div className="container mx-auto px-6 py-6">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-700 ${
                    isVisible ? "translate-y-0" : "translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="lg:col-span-1">
                    <div
                      className={`w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-black text-lg font-bold transition-all duration-500 hover:scale-110 hover:rotate-12 cursor-pointer ${
                        isVisible ? "scale-100 rotate-0" : "scale-0 rotate-45"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <Icon className="w-6 h-6" /> {/* ✅ Lucide icon */}
                    </div>
                  </div>

                  {/* Award Name */}
                  <div className="lg:col-span-6">
                    <h3
                      className={`text-2xl lg:text-4xl font-bold tracking-tight transition-all duration-700 hover:text-lime-400 cursor-pointer ${
                        isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {award.name}
                    </h3>
                  </div>

                  {/* Year and Description */}
                  <div className="lg:col-span-5">
                    <div
                      className={`transition-all duration-700 ${
                        isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 250}ms` }}
                    >
                      <div className="text-lime-400 text-lg font-semibold mb-2">{award.year}</div>
                      <p className="text-gray-300 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                {index < awards.length - 1 && (
                  <div
                    className={`mt-6 h-px bg-gray-800 transition-all duration-1000 ${
                      isVisible ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{
                      transformOrigin: "left",
                      transitionDelay: `${index * 300}ms`,
                    }}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
