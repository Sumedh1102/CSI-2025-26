import video1 from '../Videos/videomain2.MOV'
import { useEffect, useState } from "react"

export default function EchoHero({ text = "WELCOME TO CSI", video, className = "" }) {
  const [hideTitle, setHideTitle] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const delay = mq.matches ? 300 : 1800
    const t = setTimeout(() => setHideTitle(true), delay)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className={
        "relative overflow-hidden rounded-3xl bg-black p-2 sm:p-3 md:p-4 lg:py-5 mb-5 max-w-7xl mx-auto h-[700px] " +
        className
      }
    >
      {/* Video: nearly full-bleed inside the container */}
      <div className="absolute inset-1 overflow-hidden rounded-3xl">
        <video
          className="h-full w-full object-cover grayscale"
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-placeholder.png"
        />
      </div>

      {/* Centered layered heading with echo animations (from EchoTitle) */}
      <div
        className={`relative z-10 grid min-h-[320px] place-items-center sm:min-h-[420px] md:min-h-[520px] pt-28 transition-opacity duration-500 ${
          hideTitle ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="relative inline-block text-center font-black font-montserrat translate-y-20 md:translate-y-0 translate leading-none tracking-tight" aria-label={text}>
          {/* Top echo (blue outline) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl echo-top"
            style={{ WebkitTextStroke: "2px #3b82f6" }}
          >
            {text}
          </span>

          {/* Additional blue outlines */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl echo-top-2"
            style={{ WebkitTextStroke: "2px #3b82f6" }}
          >
            {text}
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl echo-top-3"
            style={{ WebkitTextStroke: "2px #3b82f6" }}
            onAnimationEnd={() => setHideTitle(true)}
          >
            {text}
          </span>

          {/* Bottom echo (green outline) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl echo-bottom"
            style={{ WebkitTextStroke: "2px #22c55e" }}
          >
            {text}
          </span>

          {/* Additional green outlines */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl echo-bottom-2"
            style={{ WebkitTextStroke: "2px #22c55e" }}
          >
            {text}
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-9xl echo-bottom-3"
            style={{ WebkitTextStroke: "2px #22c55e" }}
          >
            {text}
          </span>

          {/* Main word (solid white) */}
          <span className="relative inline-block select-none text-6xl text-white sm:text-7xl md:text-8xl lg:text-9xl echo-main">
            {text}
          </span>
        </h1>
      </div>

      <style jsx>{`
        /* Motion from EchoTitle */
        .echo-top {
          animation: echoUp 900ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both;
        }
        .echo-bottom {
          animation: echoDown 900ms cubic-bezier(0.22, 1, 0.36, 1) 180ms both;
        }
        .echo-main {
          animation: mainFade 600ms ease-out both;
        }

        /* Extra echo layers */
        .echo-top-2 {
          animation: echoUp2 1000ms cubic-bezier(0.22, 1, 0.36, 1) 240ms both;
        }
        .echo-top-3 {
          animation: echoUp3 1200ms cubic-bezier(0.22, 1, 0.36, 1) 360ms both;
        }
        .echo-bottom-2 {
          animation: echoDown2 1000ms cubic-bezier(0.22, 1, 0.36, 1) 240ms both;
        }
        .echo-bottom-3 {
          animation: echoDown3 1100ms cubic-bezier(0.22, 1, 0.36, 1) 360ms both;
        }

        /* Extra echo offsets */
        @keyframes echoUp {
          0% {
            transform: translateY(0);
            opacity: 0.15;
            filter: blur(1px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            transform: translateY(-4rem); /* same as -translate-y-10 */
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes echoDown {
          0% {
            transform: translateY(0);
            opacity: 0.15;
            filter: blur(1px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            transform: translateY(4rem); /* same as translate-y-10 */
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes echoUp2 {
          0% {
            transform: translateY(0);
            opacity: 0.1;
            filter: blur(1px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            transform: translateY(-7rem);
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes echoUp3 {
          0% {
            transform: translateY(0);
            opacity: 0.08;
            filter: blur(1px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            transform: translateY(-9rem);
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes echoDown2 {
          0% {
            transform: translateY(0);
            opacity: 0.1;
            filter: blur(1px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            transform: translateY(7rem);
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes echoDown3 {
          0% {
            transform: translateY(0);
            opacity: 0.08;
            filter: blur(1px);
          }
          60% {
            opacity: 1;
            filter: blur(0.5px);
          }
          100% {
            transform: translateY(9rem);
            opacity: 1;
            filter: blur(0);
          }
        }

        /* Main fade animation */
        @keyframes mainFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .echo-top,
          .echo-bottom,
          .echo-main,
          .echo-top-2,
          .echo-top-3,
          .echo-bottom-2,
          .echo-bottom-3 {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
