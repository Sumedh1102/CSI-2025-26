import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Replace with server action or API call when ready
    alert("Thanks! This demo form is not wired to a backend.")
  }

  const inputBase =
    "w-full rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 " +
    "placeholder:text-zinc-400 px-5 h-12 md:h-14 " +
    "focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600 transition"

  const textareaBase =
    "w-full rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 " +
    "placeholder:text-zinc-400 px-5 py-4 h-40 md:h-56 " +
    "focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600 transition resize-vertical"

  return (
     <main className="min-h-screen bg-black text-zinc-200">
      <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="mb-8 text-pretty text-2xl font-semibold tracking-tight md:text-3xl">Contact Us</h1>
          <form onSubmit={handleSubmit} className="grid gap-6" aria-label="Contact form">
      {/* Name */}
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="guest_account"
          className={inputBase}
          value={form.name}
          onChange={handleChange}
          aria-required="true"
        />
      </div>

      {/* Email */}
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-zinc-300">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="sample@mail.com"
          className={inputBase}
          value={form.email}
          onChange={handleChange}
          aria-required="true"
        />
      </div>

      {/* Phone */}
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm text-zinc-300">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="+91 0000000000"
          className={inputBase}
          value={form.phone}
          onChange={handleChange}
          aria-required="false"
        />
      </div>

      {/* Message */}
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm text-zinc-300">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write Your Message Here"
          className={textareaBase}
          value={form.message}
          onChange={handleChange}
          aria-required="true"
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-lime-300 px-6 py-3 text-sm font-light text-black transition hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
        >
          SUBMIT
        </button>
      </div>
    </form>
        </div>
      </section>
    </main>
  )
}
