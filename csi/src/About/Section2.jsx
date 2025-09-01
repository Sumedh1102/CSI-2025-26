import { ArrowUpRight } from "lucide-react"

export default function StatisticsSection({
  profileImages = [
    {
      src: "https://i.pinimg.com/736x/f6/bf/0d/f6bf0d7e6b3bb81a26783712d1f6b5fb.jpg",
      link: "https://www.instagram.com/csi_sjcem/",
    },
    {
      src: "https://i.pinimg.com/736x/2d/d1/63/2dd16334151beb151d6ce27a38939a6f.jpg",
      link: "https://x.com/csimrits1",
    },
    {
      src: "https://i.pinimg.com/1200x/ae/34/5a/ae345af53fa763daf6f096eef3a07343.jpg",
      link: "https://www.linkedin.com/company/computer-society-of-india/",
    },
  ],
  description = "CSI SJCEM fosters innovation, learning, and collaboration by empowering students through workshops, hackathons, and projects.",
  stats = [
    { label: "PROJECTS", value: "50", style: "solid" },
    { label: "MEMBERS", value: "40", style: "outline" },
    { label: "EVENTS", value: "25", style: "solid" },
    { label: "COLLABORATION", value: "12", style: "outline" },
  ],
}) {
  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          {/* Left: Arrow + Profile Images */}
          <div className="flex items-center gap-3 md:justify-start justify-center">
            <ArrowUpRight className="text-white w-8 h-8 flex-shrink-0" />
            <div className="flex items-center">
              {profileImages.map((profile, index) => (
                <div
                  key={index}
                  className={`relative ${index > 0 ? "-ml-3" : ""} ${
                    index === 3 ? "ml-1" : ""
                  }`}
                >
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={profile.src || "/placeholder.svg"}
                      alt={`Team member ${index + 1}`}
                      className="w-16 h-16 rounded-full object-cover border border-white/20 hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Description */}
          <div className="md:text-right text-center md:max-w-2xl">
            <p className="text-white/70 hover:text-white transform duration-300 text-base md:text-4xl font-bold leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom Section: Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl p-6 text-center "
            >
              <div className="uppercase text-white text-sm font-medium tracking-widest mb-4">
                {stat.label}
              </div>
              <div
                className={`text-6xl md:text-9xl font-bold ${
                  stat.style === "solid" ? "text-[#C5FF6D]" : "text-transparent"
                } ${
                  stat.style === "outline"
                    ? "[-webkit-text-stroke:2px_#C5FF6D]"
                    : ""
                }`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
