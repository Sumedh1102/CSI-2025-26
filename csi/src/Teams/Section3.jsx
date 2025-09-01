import { useMemo, useState } from "react"
import { Linkedin, Instagram,Facebook } from "lucide-react"

function TikTokIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M21 9a6.9 6.9 0 0 1-4.01-1.32v6.75A6.43 6.43 0 1 1 9.7 8.07v2.83a3.75 3.75 0 1 0 2.64 3.58V2.25h2.3A4.86 4.86 0 0 0 18.7 6.6 4.8 4.8 0 0 0 21 7.28V9z" />
    </svg>
  )
}

// Design tokens (5 colors total)
const COLORS = {
  black: "#000000",
  dark: "#1a1a1a",
  white: "#ffffff",
  neon: "#a3ff00",
  neon2: "#00ff77",
}

const TEAM = [
  {
    id: "Meet Rao",
    name: "Meet Rao",
    role: "Media Head",
    photo: "https://i.postimg.cc/HsL7LyLd/meet.jpg",
    avatar: "https://i.postimg.cc/HsL7LyLd/meet.jpg",
    links: { Linkedin: "#", instagram: "#", Facebook: "#" },
  },
  {
    id: "Vikrant Shinde",
    name: "Vikrant Shinde",
    role: "Member",
    photo: "https://i.postimg.cc/JhTzvTbX/vikrant.jpg",
    avatar: "https://i.postimg.cc/JhTzvTbX/vikrant.jpg",
    links: { Linkedin: "#", instagram: "#", Facebook: "#" },
  },
  {
    id: "Raj Dudhara",
    name: "Raj Dudhara",
    role: "Member",
    photo: "https://i.postimg.cc/nV9hSGMs/raj.jpg",
    avatar: "https://i.postimg.cc/nV9hSGMs/raj.jpg",
    links: { Linkedin: "#", instagram: "#", Facebook: "#" },
  },
  {
    id: "Eram Khan",
    name: "Eram Khan",
    role: "Member",
    photo: "https://i.postimg.cc/fT4TGS08/eram.jpg",
    avatar: "https://i.postimg.cc/fT4TGS08/eram.jpg",
    links: { Linkedin: "#", instagram: "#", Facebook: "#" },
  },
  {
    id: "Vaibhav Somanna",
    name: "Vaibhav Somanna",
    role: "Member",
    photo: "https://i.postimg.cc/KzkxVmcX/somana.jpg",
    avatar: "https://i.postimg.cc/KzkxVmcX/somana.jpg",
    links: { Linkedin: "#", instagram: "#", Facebook: "#" },
  },
  {
    id: "Bhavesh Sagathiya",
    name: "Bhavesh Sagathiya",
    role: "Member",
    photo: "https://i.postimg.cc/sfW34f07/bhavesh.jpg",
    avatar: "https://i.postimg.cc/sfW34f07/bhavesh.jpg",
    links: { Linkedin: "#", instagram: "#", Facebook: "#" },
  },
]


function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white"
      style={{ "--neon": COLORS.neon }}
    >
      <span className="pointer-events-none">{children}</span>
    </a>
  )
}

function TeamCard({ member, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={[
        "relative w-full rounded-[25px] text-left transition-transform duration-500 py-5",
        active ? "bg-gradient-to-b from-[#1a1a1a] to-lime-400 p-[1px]" : "bg-[color:var(--dark)]",
      ].join(" ")}
      style={{
        "--neon": COLORS.neon,
        "--neon2": COLORS.neon2,
        "--dark": COLORS.dark,
      }}
    >
      <div className={active ? "rounded-[20px] bg-transparent p-5" : "rounded-[20px] p-5"}>
        <div className="flex items-center gap-3">
          <img
            src={member.avatar || "/placeholder.svg"}
            alt={`${member.name} avatar`}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-montserrat font-medium text-white">{member.name}</div>
          </div>
        </div>

        <div className="pt-6">
          <span className="inline-flex font-montserrat rounded-full bg-black px-4 py-2 text-xs  uppercase  text-white">
            {member.role}
          </span>
        </div>
      </div>
    </button>
  )
}

export default function TeamSection() {
  const [activeId, setActiveId] = useState(TEAM[0].id)
  const active = useMemo(() => TEAM.find((m) => m.id === activeId) ?? TEAM[0], [activeId])

  return (
    <main className="min-h-screen bg-black py-12 md:py-16 max-w-5xl mx-auto">
    <section aria-label="Team">
      {/* Section header with kicker, title, and description */}
      <header className="mb-8 text-center md:mb-12">
        <h1 className="text-balance mt-3 text-4xl font-extrabold text-white md:text-6xl font-montserrat">MEDIA TEAM</h1>
        <p className="text-pretty mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
          The Media Team manages photography, videography, and digital content to capture and highlight every event.
        </p>
      </header>
      {/* Main two-column layout */}
      <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2">
        {/* Left: Profile image with rounded 20px */}
        <div className="overflow-hidden rounded-[20px]">
          <img
            src={active.photo || "/placeholder.svg"}
            alt={`${active.name} portrait`}
            className="aspect-square h-full w-full object-cover object-top"
          />
        </div>

        {/* Right: Dark info card */}
        <div className="rounded-[20px] bg-[color:var(--dark)] p-8 md:p-10" style={{ "--dark": COLORS.dark }}>
          <h2 className="text-pretty text-3xl font-extrabold text-white md:text-5xl text-center pt-32 font-montserrat">{active.name}</h2>

          <p
            className="mt-4 text-center font-montserrat text-sm font-medium uppercase tracking-wider text-[color:var(--neon)]"
            style={{ "--neon": COLORS.neon }}
          >
            {active.role}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <SocialButton href={active.links.youtube} label="YouTube">
              <Linkedin className="h-5 w-5" />
            </SocialButton>
            <SocialButton href={active.links.instagram} label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialButton>
            <SocialButton href={active.links.tiktok} label="TikTok">
              <Facebook className="h-5 w-5" />
            </SocialButton>
          </div>
        </div>
      </div>

      {/* Bottom selector cards */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {TEAM.map((m) => (
          <TeamCard key={m.id} member={m} active={m.id === activeId} onSelect={() => setActiveId(m.id)} />
        ))}
      </div>
    </section>
    </main>
  )
}
