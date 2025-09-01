import { Linkedin, Twitter } from "lucide-react";

// Reusable Profile Card
function TeamMemberCard({ name, title, imageSrc }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-white shadow-sm">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>
      <div className="border border-gray-300 rounded-full px-4 py-2 mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </div>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

// Quote Card
function QuoteCard() {
  return (
    <div className="bg-[#D9FF66] rounded-xl p-6 flex flex-col justify-between h-full">
      <div className="flex justify-end gap-2 mb-4">
        {[Linkedin, Twitter].map((Icon, i) => (
          <div key={i} className="bg-black rounded-full p-2">
            <Icon className="w-5 h-5 text-white" />
          </div>
        ))}
      </div>
      <p className="text-gray-800 text-lg font-medium italic">
        "You miss 100% of the shots you don't take" - Wayne Gretzky - Michael Scott
      </p>
      <div className="mt-auto pt-4">
        <div className="bg-white border border-gray-300 rounded-full px-4 py-2 inline-block">
          <h3 className="text-lg font-semibold text-gray-900">"Rambo"</h3>
        </div>
        <p className="text-sm text-gray-600 mt-2">Blockchain Reliability Engineer</p>
      </div>
    </div>
  );
}

// Header Badge
function SectionBadge() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="border border-gray-400 rounded-full px-3 py-1 text-xs font-medium text-gray-600 flex items-center gap-1">
        <DiamondIcon className="w-3 h-3" />
        WHO WE ARE
      </div>
    </div>
  );
}

// Main Component
export default function Component() {
  const team = [
    { name: "Chris Bruce", title: "Founder & CEO", image: "https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg" },
    { name: "Sean Carey", title: "Founder & CTO", image: "https://i.pinimg.com/736x/66/4b/b2/664bb216052a3ab7bddd758f0c44a207.jpg" },
    { name: "Aileen Gomes", title: "Chief of Staff", image: "https://i.pinimg.com/736x/63/57/e5/6357e53cf99bc51ee5b75fd19d93487e.jpg" },
    "quote",
    { name: "Thomas Stätter", title: "Backend Engineer", image: "https://i.pinimg.com/736x/a4/1a/97/a41a97e76816e399290c37341a0f4c58.jpg" },
    { name: "Oleksii Suslov", title: "Systems Engineer", image: "https://i.pinimg.com/1200x/65/de/d0/65ded07a4195769b10bb90567fd9c455.jpg" },
    { name: "Joe Harrison", title: "Frontend Engineer", image: "https://i.pinimg.com/1200x/0d/00/fa/0d00faf7e0a04fe724ecd886df774e4c.jpg" },
    { name: "Jason Alex", title: "Site Reliability Engineer", image: "https://i.pinimg.com/736x/5b/07/8c/5b078cdecc9adbc186a7aafb0766b080.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionBadge />
          <div className="flex justify-between flex-col md:flex-row">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            A TEAM OF <br className="hidden sm:block" /> WEB3 EXPERTS
          </h1>
          <p className="text-lg font-semibold tracking-tight mt-4 md:mt-0">
            BLOCKJOY STARTED AS A PROJECT TO MANAGE STAKING WITH FRIENDS AND FAMILY.
          </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) =>
            member === "quote" ? <QuoteCard key={index} /> : <TeamMemberCard key={index} {...member} imageSrc={member.image} />
          )}
        </div>
      </div>
    </div>
  );
}

// Diamond Icon
function DiamondIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.4L7.5 18a2.41 2.41 0 0 0 3.4 0L18 13.5a2.41 2.41 0 0 0 0-3.4L13.5 6a2.41 2.41 0 0 0-3.4 0Z" />
    </svg>
  );
}
