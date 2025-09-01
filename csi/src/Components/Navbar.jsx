import { useState } from "react"
import { Link } from "react-router"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "About" },
    { label: "TEAMS", href: "/Teams" },
    { label: "CONTACT", href: "/Contact" },
  ]

  return (
    <div className="bg-black">
      <header className="container mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-4xl font-semibold tracking-[0.2em] font-montserrat">
            <span className="text-blue-900 stroke-text">CSI</span>{" "}
            <span className="text-white">SJCEM</span>
          </div>

          <style jsx>{`
            .stroke-text {
              -webkit-text-stroke: 2px black;
            }
          `}</style>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-montserrat">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="uppercase tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/Event"
              className="inline-flex h-10 font-montserrat items-center justify-center rounded-full bg-lime-300 px-5 font-normal text-black transition-colors"
            >
              EVENTS
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {/* Mobile Nav Panel */}
        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4">
            <nav className="flex flex-col gap-2 text-base font-montserrat">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className="uppercase tracking-wide text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4">
              <Link
                to="/Event"
                onClick={closeMenu}
                className="inline-flex w-full h-10 font-montserrat items-center justify-center rounded-full bg-lime-300 px-5 font-normal text-black transition-colors"
              >
                EVENTS
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
