
import { useTransform, motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Tech from '../Teamsvideo/tech.mp4'
import Doc from '../Teamsvideo/doc.mp4'
import Design from '../Teamsvideo/design.mp4'
import Event from '../Teamsvideo/event.mp4'
import Media from '../Teamsvideo/media.mp4'
import Pr from '../Teamsvideo/pr.mp4'

const projects = [
 {
    title: "PUBLIC RELATIONS TEAM",
    description:
      "The PR Team is the communication bridge of CSI SJCEM. They manage outreach, sponsorships, and partnerships to strengthen the committee’s impact. Their responsibilities include promoting events across social platforms, creating meaningful connections with students, and reaching out to sponsors for collaborations. By ensuring maximum visibility, they make sure every initiative gets the right attention. Their efforts build trust, expand networks, and ensure CSI remains well-recognized both within the campus and in the larger community.",
    src: "pr.jpg",
    link: Pr,
    color: "#000000",
  },
  {
    title: "DOCUMENTATION & SPONSERSHIP TEAM",
    description:
      "The Documentation Team is CSI’s official record keeper. Their job is to maintain structured content, prepare reports, and build archives for every event. They ensure professionalism in presentation and create detailed documents that serve as official references for the committee. From event proposals to post-event summaries, their role is to maintain accuracy, accountability, and transparency. Their systematic approach ensures that CSI’s work is preserved, allowing future members to learn, reflect, and build upon past initiatives.",
    src: "documentation.jpg",
    link: Doc,
    color: "#7A7A73",
  },
  {
    title: "DESIGN TEAM",
    description:
      "The Design Team drives CSI’s creativity, producing posters, banners, social media graphics, and branding materials. Their work ensures every initiative looks professional and visually appealing. They transform ideas into engaging visuals that grab attention and communicate messages effectively. From digital campaigns to event branding, they bring innovation and style. Their creativity helps CSI stand out while maintaining a consistent identity. By combining aesthetics with purpose, they make sure every event reflects the professionalism and vision of the committee.",
    src: "design.jpg",
    link: Design,
    color: "#000000",
  },
  {
    title: "MEDIA TEAM",
    description:
      "The Media Team documents CSI’s journey through photography, videography, and creative storytelling. They cover every event, capturing moments that highlight the energy, innovation, and collaboration within the committee. Their work transforms raw experiences into powerful visuals that inspire students and connect with a wider audience. By producing engaging content such as highlight reels, photo albums, and promotional videos, they enhance CSI’s visibility. Beyond documentation, they create lasting memories that preserve the committee’s legacy and showcase its achievements effectively.",
    src: "media.jpg",
    link: Media,
    color: "#7A7A73",
  },
  {
    title: "TECHNICAL TEAM",
    description:
      "The Technical Team is the innovation powerhouse of CSI. They manage coding competitions, hackathons, and technical projects while also building and maintaining websites, apps, and other digital platforms. Their role is crucial in bringing technical ideas to life with precision and creativity. They ensure smooth execution of digital tools and provide support during technical events. By fostering problem-solving and innovation, they help members grow their skills. Their contributions drive CSI’s reputation as a technically strong and forward-thinking committee.",
    src: "technical.jpg",
    link: Tech,
    color: "#000000",
  },
  {
    title: "EVENT & REGISTRATION TEAM",
    description:
      "The Event Team ensures smooth planning, management, and execution of all CSI events. From workshops and seminars to cultural and technical fests, they take care of logistics, scheduling, and participant engagement. Their teamwork ensures events run seamlessly while maintaining a professional environment. They coordinate with other teams, manage resources, and provide solutions for on-ground challenges. By blending organization with creativity, they guarantee impactful experiences. Their efforts ensure every CSI event is memorable, engaging, and successful for all participants.",
    src: "event.jpg",
    link: Event,
    color: "#7A7A73",
  },
]

export default function index() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const step = 1 / projects.length

  return (
    
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-zinc-900">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[Math.min(i * step, 0.999), 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>
      </main>
   
  )
}

export const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  return (
    <div ref={container} className="h-[100svh] flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5svh + ${i * 25}px)`,
        }}
        className="flex flex-col relative md:-top-[25%] h-[70vh] md:h-[700px] w-[92%] md:w-[85%] rounded-3xl p-6 md:p-10 origin-top"
      >
        <h2 className="text-xl md:text-2xl text-center md:text-center font-semibold font-montserrat">{title}</h2>
        <div className="flex h-full mt-4 md:mt-5 gap-6 md:gap-10 flex-col md:flex-row">
          <div className="w-full md:w-[40%] md:relative md:top-[10%]">
            <p className="text-sm md:text-xl leading-relaxed font-light font-montserrat text-center">{description}</p>
          </div>
          <div className="relative flex-1 w-full h-56 sm:h-64 md:h-[550px] rounded-2xl shadow-2xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <video
                src={url}
                className="object-cover h-full w-full"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Project video preview"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
