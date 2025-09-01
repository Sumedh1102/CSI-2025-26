export function DesignCards() {
  return (
    <main1
    className="min-h-fit w-full flex items-start justify-center pb-8 md:pb-10"
    >
    <div
      className="
        flex gap-4 max-w-7xl px-4 md:px-6
        flex-col items-center
        md:flex-row md:flex-wrap md:items-stretch
        lg:flex-nowrap
      "
    >
      {/* First Card */}
      <div
        className="
          relative bg-zinc-900 rounded-[20px] overflow-hidden group cursor-pointer
          w-[300px] sm:w-[300px] md:w-[320px] lg:w-[350px]
          h-[380px] sm:h-[420px] md:h-[500px] lg:h-[550px]
        "
      >
        {/* Main Content */}
        <div
          className="
            relative z-10 h-full flex flex-col justify-center items-center
            p-6 md:p-6 lg:p-8
            opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500
          "
        >
          <div className="space-y-4 mb-10 md:mb-16">
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11 "></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[#8B9A3E]/40 rounded-t-full border-2 border-black opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>

        {/* Overlay (visible by default on mobile, hover-reveal on md+) */}
        <div
          className="
            absolute inset-0 bg-[#C5FF6D] transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0
            transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            flex flex-col justify-between p-6 md:p-6 lg:p-8 text-black rounded-t-3xl
          "
        >
          <div>
            <div className="text-xs md:text-sm font-thin mb-4">Vision & Mission</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">Our Mission</h2>
            <p className="text-xs md:text-sm leading-relaxed">Empowering students with technology, collaboration, and innovation.</p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div
        className="
          relative bg-zinc-900 rounded-[20px] overflow-hidden group cursor-pointer
          w-full sm:w-[300px] md:w-[320px] lg:w-[350px]
          h-[380px] sm:h-[420px] md:h-[500px] lg:h-[550px]
        "
      >
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-6 lg:p-8 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500">
          <div className="space-y-4 mb-10 md:mb-16">
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11"></div>
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[#8B9A3E]/40 rounded-t-full border-2 border-black opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500"></div>
        <div className="absolute rounded-t-3xl inset-0 bg-[#C5FF6D] transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-between p-6 md:p-6 lg:p-8 text-black">
          <div>
            <div className="text-xs md:text-sm font-thin mb-4">Domains & Skills</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">What We Do</h2>
            <p className="text-xs md:text-sm leading-relaxed">Workshops, hackathons, coding marathons, and design sprints that sharpen real-world skills.</p>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div
        className="
          relative bg-zinc-900 rounded-[20px] overflow-hidden group cursor-pointer
          w-full sm:w-[300px] md:w-[320px] lg:w-[350px]
          h-[380px] sm:h-[420px] md:h-[500px] lg:h-[550px]
        "
      >
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-6 lg:p-8 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500">
          <div className="space-y-4 mb-10 md:mb-16">
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11 rounded-l"></div>
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11 rounded-l"></div>
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11 rounded-l"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[#8B9A3E]/40 rounded-t-full border-2 border-black opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[#C5FF6D] transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-between p-6 md:p-6 lg:p-8 text-black rounded-t-3xl">
          <div>
            <div className="text-xs md:text-sm font-thin mb-4">Opportunities</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">Why Join CSI?</h2>
            <p className="text-xs md:text-sm leading-relaxed">Get hands-on experience, network with industry experts, and build your career in tech..</p>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div
        className="
          relative bg-zinc-900 rounded-[20px] overflow-hidden group cursor-pointer
          w-full sm:w-[300px] md:w-[320px] lg:w-[350px]
          h-[380px] sm:h-[420px] md:h-[500px] lg:h-[550px]
        "
      >
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-6 lg:p-8 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500">
          <div className="space-y-12 mb-10 md:mb-16">
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-14 rotate-12"></div>
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-14 -rotate-12"></div>
            <div className="w-52 h-16 bg-[#8B9A3E]/40 translate-x-11"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[#8B9A3E]/40 rounded-t-full border-2 border-black opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[#C5FF6D] transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-between p-6 md:p-6 lg:p-8 text-black rounded-t-3xl">
          <div>
            <div className="text-xs md:text-sm font-thin mb-4">Upcoming Events</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-6">What’s Next?</h2>
            <p className="text-xs md:text-sm leading-relaxed">Stay tuned for coding competitions, AI workshops, and our flagship Webcade 2.0 a 12-hour hackathon.</p>
          </div>
        </div>
      </div>
    </div>
    </main1>
  )
}

export default DesignCards
