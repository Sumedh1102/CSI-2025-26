import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function CoreVisionSection({
  titleText = "We aspire to be a driving force behind a future where technology and innovation act as catalysts for positive change.",
  highlightedWords = [],
  sectionLabel = "CORE",
  heading = "VISION",
  description = "CSI SJCEM aims to empower students with knowledge, skills, and opportunities that inspire leadership, creativity, and collaboration in technology.",
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedWords, setAnimatedWords] = useState(new Set())
  const sectionRef = useRef(null)

  const words = titleText ? titleText.match(/\b\w+\b/g) || [] : []

  useEffect(() => {
    if (!words.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start animating words sequentially
          words.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedWords((prev) => new Set([...prev, index]))
            }, index * 100) // 100ms delay between each word
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [words])

  const getWordColor = (word, index) => {
    if (animatedWords.has(index)) {
      return "#C5FF6D" // Lime green when animated
    }
    if (highlightedWords.includes(word)) {
      return "#C5FF6D" // Initially highlighted words
    }
    return animatedWords.size > 0 ? "#666666" : "#FFFFFF" // Gray for non-animated, white initially
  }

  if (!words.length) {
    return (
      <section className="bg-black min-h-screen flex items-center justify-center px-6 py-20 lg:py-32">
        <div className="text-white">Loading...</div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="bg-black  flex items-center justify-center px-6 py-20 lg:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Statement */}
          <div className="text-center lg:text-right">
            <h1 className="font-bold text-3xl sm:text-4xl font-montserrat lg:text-5xl xl:text-4xl leading-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    animatedWords.has(index)
                      ? { opacity: 1, y: 0, color: getWordColor(word, index) }
                      : { opacity: 1, y: 0, color: getWordColor(word, index) }
                  }
                  transition={{
                    duration: 0.3,
                    delay: isVisible ? index * 0.05 : 0,
                    ease: "easeOut",
                  }}
                  style={{
                    color: getWordColor(word, index),
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Right Column - Details */}
          <div className="text-center lg:text-left lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-white text-sm font-medium tracking-[0.2em] uppercase mb-2">{sectionLabel}</p>
              <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">{heading}</h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">{description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default CoreVisionSection;
