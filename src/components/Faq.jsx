import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How long does it take to set up SMERP?',
      answer:
        'Most teams can get started quickly with guided onboarding, basic configuration, and support for importing key business data.',
    },
    {
      question: 'What factors affect the cost of SMERP?',
      answer:
        'Pricing depends on your selected plan, number of users, business modules, locations, and any implementation support your team needs.',
    },
    {
      question: 'Can SMERP work for multiple branches?',
      answer:
        'Yes. SMERP supports multi-location operations so teams can manage inventory, sales, accounting, and reporting across branches.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes. Our support team helps with onboarding, troubleshooting, product guidance, and questions as your business grows.',
    },
    {
      question: 'What is your implementation process?',
      answer:
        'We review your workflow, configure the right modules, migrate essential data, train your team, and help you launch with confidence.',
    },
  ]

  return (
    <section id="faqs" className="bg-white px-6 py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="font-sora text-[36px] font-bold leading-tight text-black sm:text-[48px] lg:text-[56px]">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] font-aeonik text-[18px] leading-7 text-[#242424] sm:text-[20px]">
          Find quick answers to common questions about SMERP setup, pricing, support, and implementation.
        </p>

        <div className="mt-9 space-y-5 text-left">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className={`rounded-[6px] border transition-colors ${
                  isOpen
                    ? 'border-[#202020] bg-[#202020] text-white'
                    : 'border-[#E4E7EE] bg-white text-[#7D849E] shadow-[0_1px_3px_rgba(16,24,40,0.04)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-aeonik text-[16px] font-bold"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <X className="h-5 w-5 shrink-0 text-[#8E94AD]" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-[#7D849E]" />
                  )}
                </button>

                {isOpen && (
                  <p className="px-5 pb-5 font-aeonik text-[15px] leading-7 text-[#A5A5A5]">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
