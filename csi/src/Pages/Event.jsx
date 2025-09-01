import video1 from '../Videos/CRBG.mp4'


export const metadata = {
  title: "Coming Soon",
  description: "We're crafting something great. Stay tuned.",
}

export default function Page() {
  return (
    <main aria-labelledby="page-title">
      <section className="relative min-h-[100dvh] w-full">
        {/* Background video */}
<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
  <video
    className="w-full h-full object-cover blur-sm" // blur effect
    src={video1} // replace with your video path
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Optional overlay for better contrast */}
  <div className="absolute inset-0 bg-black/30" />
</div>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[100dvh] items-center justify-center px-6">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm md:text-base tracking-[0.3em] text-gray-200">WEBCADE {new Date().getFullYear()}</p>

            <h1
              id="page-title"
              className="mt-3 text-balance font-archivo font-semibold text-white text-4xl sm:text-5xl md:text-9xl leading-tight"
            >
              COMING SOON
            </h1>

            <p className="mt-6 text-pretty text-2xl font-montserrat text-gray-200"> we’re putting the final touches on
              something new. Stay tuned.
            </p>

            {/* Optional actions */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-3xl bg-white/10 px-5 py-2.5 text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Notify me
              </a>
              <a
                href="mailto:hello@example.com"
                className="rounded-3xl border border-white/20 px-5 py-2.5 text-white/90 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Contact
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-300/80">
              © {new Date().getFullYear()} CSI · All rights reserved
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
