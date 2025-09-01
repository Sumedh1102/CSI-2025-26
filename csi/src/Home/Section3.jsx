import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import video from '../Videos/csi.mp4'

export default function Home() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [animatedCards, setAnimatedCards] = useState(new Set()) // Track cards that have already been animated
  const cardRefs = useRef([])

  // Animation variants for different card types
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 15,
    },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: -80,
      scale: 0.9,
    },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: delay * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const scaleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  useEffect(() => {
    const observers = []

    // Create random order for card animations
    const cardOrder = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5)

    cardRefs.current.forEach((card) => {
      if (!card) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const cardIndex = cardRefs.current.indexOf(entry.target)

            if (entry.isIntersecting && !animatedCards.has(cardIndex)) {
              const randomDelay = cardOrder.indexOf(cardIndex)
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...prev, cardIndex]))
                setAnimatedCards((prev) => new Set([...prev, cardIndex])) // Mark as animated
              }, randomDelay * 100)
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: "-50px 0px -50px 0px",
        },
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [animatedCards]) // Added animatedCards as dependency

  return (
    <main className="min-h-screen bg-zinc-950 p-4 sm:p-5 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* sm: 1-col, md: 2-col, lg+: original 3-col; fixed height only on lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto lg:h-[800px]">
          {/* Phone Mockup Card - Spans full height */}
          <motion.div
            ref={(el) => (cardRefs.current[0] = el)}
            variants={slideVariants}
            initial="hidden"
            animate={visibleCards.has(0) ? "visible" : "hidden"}
            custom={0}
            className="md:row-span-2 bg-black rounded-2xl p-2 flex items-center justify-center "
          >
            <div className="relative">
  <motion.img
    src="https://i.pinimg.com/736x/ac/77/4d/ac774df7b8cd300d5c48ad5580f218b9.jpg"
    alt="Phone mockup showing creative design interface"
    className="hidden sm:block w-full h-[300px] max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:w-[400px] lg:h-[780px] rounded-2xl object-cover mx-auto"
  />
</div>
          </motion.div>

          {/* Creative Design Services Card */}
          <motion.div
            ref={(el) => (cardRefs.current[1] = el)}
            variants={cardVariants}
            initial="hidden"
            animate={visibleCards.has(1) ? "visible" : "hidden"}
            custom={1}
            className="bg-zinc-900 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <motion.p
                className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-4 sm:mb-5 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={visibleCards.has(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                SERVICES
              </motion.p>
              <motion.h2
                className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={visibleCards.has(1) ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                NETWORKING &
              </motion.h2>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 mb-4 sm:mb-5 md:mb-6 outline-text"
                initial={{ opacity: 0, x: 30 }}
                animate={visibleCards.has(1) ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                COLLABRATION
              </motion.h2>
              <motion.p
                className="text-zinc-400 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={visibleCards.has(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Connect with industry experts, alumni, and peers to build meaningful collaborations and career
                opportunities.
              </motion.p>
            </div>
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, scale: 0 }}
              animate={visibleCards.has(1) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
            
            </motion.div>
          </motion.div>

          {/* Portfolio Video Card */}
          <motion.div
            ref={(el) => (cardRefs.current[2] = el)}
            variants={scaleVariants}
            initial="hidden"
            animate={visibleCards.has(2) ? "visible" : "hidden"}
            custom={2}
            className="bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <motion.video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video md:h-64 lg:h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={visibleCards.has(2) ? { scale: 1 } : { scale: 1.2 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
          </motion.div>

          {/* Branding Reimagine Card */}
          <motion.div
            ref={(el) => (cardRefs.current[3] = el)}
            variants={cardVariants}
            initial="hidden"
            animate={visibleCards.has(3) ? "visible" : "hidden"}
            custom={3}
            className="md:col-span-2 bg-zinc-900 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <motion.p
                className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-4 sm:mb-5 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={visibleCards.has(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                BRANDING
              </motion.p>
              <div className="flex items-baseline flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                <motion.h2
                  className="text-white text-3xl sm:text-4xl md:text-5xl font-bold md:mr-4"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={visibleCards.has(3) ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  REIMAGINE
                </motion.h2>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 outline-text"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={visibleCards.has(3) ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  TECHNOLOGY
                </motion.h2>
              </div>
              <motion.p
                className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-none md:max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={visibleCards.has(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                At CSI SJCEM, we inspire students to think beyond limits, innovate fearlessly, and become tomorrow’s
                tech leaders.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
