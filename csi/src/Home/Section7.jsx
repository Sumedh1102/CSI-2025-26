import { useState, useEffect, useRef } from "react"
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "BEING PART OF CSI SJCEM GAVE ME THE CONFIDENCE TO PARTICIPATE IN HACKATHONS AND EXPLORE NEW TECHNOLOGIES BEYOND THE CLASSROOM.",
    author: "AARAV SHARMA",
    role: "STUDENT MEMBER",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    text: "CSI IS MORE THAN A COMMITTEE IT’S A PLATFORM WHERE STUDENTS LEARN TEAMWORK, LEADERSHIP, AND INNOVATION THROUGH REAL-WORLD EXPERIENCES",
    author: "PROF. TANVI PATIL",
    role: "FACULTY ADVISOR",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    text: "CSI SJCEM SHAPED MY TECHNICAL FOUNDATION AND HELPED ME CONNECT WITH INDUSTRY MENTORS, WHICH PLAYED A KEY ROLE IN MY CAREER JOURNEY.",
    author: "ROHAN DESAI",
    role: "ALUMNI (SOFTWARE ENGINEER AT RAW ENG CORP)",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
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

  const handleDotClick = (index) => {
    if (index === activeIndex || isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsTransitioning(false)
    }, 200)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section ref={sectionRef} className="w-full bg-black py-16 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Quote Icons */}
        <div
          className={`flex justify-center items-center gap-6 mb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
         
          <Quote className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  rounded-lg relative text-lime-400" />
          
        </div>

        {/* Headline */}
        <div
          className={`max-w-7xl mx-auto mb-16 transition-all duration-700  ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
          } ${isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"}`}
          style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        >
          <h2
            className="text-white text-4xl font-bold font-montserrat text-center  leading-tight"
          >
            {currentTestimonial.text.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* Author Row */}
        <div
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
          } ${isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"}`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 ring-2 ring-white/20 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center">
            <img
              src={currentTestimonial.avatar || "/placeholder.svg"}
              alt={currentTestimonial.author}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none"
                e.target.nextSibling.style.display = "flex"
              }}
            />
            <div className="hidden w-full h-full bg-gray-600 text-white text-sm font-medium items-center justify-center">
              {currentTestimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <div className="text-left">
            <div className="text-white text-sm font-semibold tracking-wide">{currentTestimonial.author}</div>
            <div className="text-[#C5FF6D] text-xs font-medium tracking-wide">{currentTestimonial.role}</div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div
          className={`flex justify-center items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-400 ${
                index === activeIndex ? "bg-white" : "bg-gray-500/60 hover:bg-gray-400/80"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
