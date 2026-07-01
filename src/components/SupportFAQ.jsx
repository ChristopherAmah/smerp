import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { question: 'How do I reset my password?', answer: 'Go to your profile settings, choose security, and select Reset Password. A reset link will be sent to your email.' },
  { question: 'Can I export my data?', answer: 'Yes. Go to the reports section, choose export, and select the format you need.' },
  { question: 'How do I add a new user?', answer: 'Navigate to team settings, click Add User, and enter the new user details.' },
  { question: 'Is there a mobile app?', answer: 'Our mobile application is coming soon. In the meantime, you can use the responsive web version on your phone.' },
  { question: 'What payment methods do you accept?', answer: 'We accept major credit cards, direct bank transfer, and popular digital wallets depending on your region.' },
]

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="rounded-[16px] bg-white p-6 border border-[#3A05451A]">
      <h3 className="text-[16px] font-bold text-[#3A0545]">Frequently Asked Questions</h3>

      <div className="mt-4 space-y-2">
        {faqs.map((item, index) => (
          <div
            key={item.question}
            className="rounded-[16px] border border-[#3A05451A] bg-white px-4 py-4"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left text-[12px] font-medium font-aeonik text-[#3A0545]"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-[#6B5F75] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index ? (
              <p className="mt-4 text-[12px] leading-6 text-[#6B5F75]">{item.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
