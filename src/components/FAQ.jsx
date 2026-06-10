import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqItems = [
  {
    question: 'Who can participate in the I am Scientist contests?',
    answer:
      'Our contests are open to students of all ages! Whether you\'re in elementary school, middle school, or high school, we have categories designed to match your skill level and age group. We welcome participants from all across Pakistan.',
  },
  {
    question: 'What subjects do the contests cover?',
    answer:
      'Our contests cover a wide range of subjects including Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Robotics, and general Science & Technology. Each contest is designed to be educational and engaging.',
  },
  {
    question: 'How are winners rewarded?',
    answer:
      'Winners receive Gold, Silver, and Bronze medals along with certificates of achievement. The top 20 students also receive a fully sponsored one-month online crash course on AI, taught by industry experts. Additional prizes include scholarships and tech gadgets.',
  },
  {
    question: 'Can schools participate as organizations?',
    answer:
      'Absolutely! We encourage schools and academies to register their students as groups. We offer special organizational packages with dedicated support, bulk registration discounts, and customized progress tracking for teachers and administrators.',
  },
  {
    question: 'How can I stay updated on contest dates?',
    answer:
      'You can subscribe to our newsletter at the bottom of this page, follow us on our social media channels (Facebook, LinkedIn, Instagram), or regularly check our website for the latest announcements and contest schedules.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="h-auto text-white pb-20 py-6 md:py-16 bg-gradient-to-r from-[#1C032F] to-[#0032AB]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-28 h-1 rounded-lg bg-white mt-4" />
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-[800px] space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              id={`faq-item-${index}`}
              className="border border-white bg-gradient-to-r from-[#1C032FB2] to-[#0032ABB2] rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 font-inter text-base md:text-xl font-semibold focus:outline-none flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span>
                  {openIndex === index ? (
                    <FaMinus size={15} />
                  ) : (
                    <FaPlus size={15} />
                  )}
                </span>
              </button>

              <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                <div className="px-6 pb-4">
                  <p className="text-gray-200 leading-relaxed text-base">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
