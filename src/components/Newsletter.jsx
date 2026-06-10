import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="relative w-full flex justify-center items-center -mt-20 z-20 px-4">
      <div className="max-w-[800px] 2xl:max-w-[1000px] w-full opacity-90 p-6 md:p-12 bg-gradient-to-r from-[#1C032F] to-[#0032AB] shadow-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="font-bold text-center md:text-left text-white text-2xl 2xl:text-3xl">
              Subscribe to our newsletter.
            </h2>
            <p className="text-gray-200 text-center md:text-left mt-2 text-xl font-normal">
              Get updates to news and events.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                id="newsletter-email"
                className="p-3 w-full placeholder-[rgba(38,38,38,1)] focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
              <button
                type="submit"
                id="newsletter-submit"
                className="absolute font-bold right-0 bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] text-white p-3 hover:opacity-90 transition-all"
              >
                {submitted ? '✓ Done!' : 'Subscribe'}
              </button>
            </div>
            {submitted && (
              <p className="mt-2 text-green-300 font-medium text-sm">
                Thank you for subscribing! 🎉
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
