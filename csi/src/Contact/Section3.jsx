import { useId, useState } from "react"

function PlusMinusIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white transition-opacity duration-700"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="12" y1="4" x2="12" y2="20" className={open ? "opacity-0" : "opacity-100"} />
    </svg>
  )
}

function FAQItem({ index, question, answer, openIndex, setOpenIndex, uid }) {
  const isOpen = openIndex === index
  const panelId = `faq-panel-${index}-${uid}`
  const buttonId = `faq-button-${index}-${uid}`

  return (
    <div className="rounded-3xl bg-zinc-900/90 hover:bg-zinc-900 transition-colors">
      <button
        id={buttonId}
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between gap-6 p-6 text-left"
      >
        <span className="text-white text-xl font-semibold leading-snug">{question}</span>
        <span className="shrink-0 flex h-5 w-5 items-center justify-center">
          <PlusMinusIcon open={isOpen} />
        </span>
      </button>

      {isOpen && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="px-6 pb-6 pt-0">
          <p className="text-zinc-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

function FAQSectionInner() {
  const uid = useId()
  const [openIndex, setOpenIndex] = useState(0)

  const items = [
{
  question: "What Types Of Services Do You Offer?",
  answer:
    "CSI SJCEM offers workshops, hackathons, technical events, industry collaborations, and peer-learning opportunities to help students grow in technology and innovation.",
},
{
  question: "How Can I Join Or Participate In CSI Activities?",
  answer:
    "Students can register during membership drives or through our official team. Members get access to exclusive events, mentorship, and projects.",
},
{
  question: "How Long Does It Typically Take To Complete A Project Or Event?",
  answer:
    "Most workshops last a few hours, while projects and hackathons can span from 1 day to several weeks depending on the scope.",
},
{
  question: "Is There Any Cost To Join Or Attend Events?",
  answer:
    "CSI offers both free and paid events. Membership comes with affordable annual fees that provide access to multiple opportunities and benefits.",
},
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <p className="text-sm tracking-[0.2em] text-zinc-400 uppercase">Questions & Answers</p>
            <h2 className="mt-4 text-5xl font-semibold text-balance">FAQs</h2>
            <p className="mt-6 max-w-md text-zinc-400 leading-relaxed">
              Your guide to understanding CSI SJCEM, its activities, and how you can be part of it.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {items.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
                question={item.question}
                answer={item.answer}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                uid={uid}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Export both named and default to satisfy any import style
export function FAQSection() {
  return <FAQSectionInner />
}

export default FAQSection
