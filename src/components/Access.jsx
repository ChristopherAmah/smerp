import React from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const Access = () => {
  const benefits = [
    'Fraud protection, zero liability.',
    'No personal guarantee',
    'Cards for your whole team',
    'Close books faster',
  ]

  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <style>{`@keyframes benefit-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[16px] bg-black text-white">
        <div className="relative isolate min-h-[520px] px-7 py-16 sm:px-12 lg:px-20 lg:py-[82px]">
          <div className="pointer-events-none absolute right-[8%] top-[22%] -z-10 h-[190px] w-[260px] rounded-full bg-[#43ddb0] opacity-70 blur-[62px]" />
          <div className="pointer-events-none absolute right-[16%] top-[30%] -z-10 h-[130px] w-[170px] rounded-full bg-[#63d9f0] opacity-55 blur-[50px]" />
          <svg
            aria-hidden="true"
            viewBox="0 0 160 170"
            className="pointer-events-none absolute right-[8%] top-[22%] hidden h-[180px] w-[170px] text-white/70 sm:block"
          >
            <path
              d="M12 16C63 -1 75 9 41 48C23 69 58 61 77 62C120 64 81 105 57 128C37 148 99 126 139 151"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>

          <div className="max-w-[860px]">
            <h2 className="font-sora text-[38px] font-bold leading-[1.22] tracking-normal sm:text-[50px] lg:text-[56px]">
              Get early access to milestone. close your books faster and grow.
            </h2>

            <a
              href="#register"
              className="mt-12 inline-flex min-h-[70px] w-full items-center justify-center gap-5 rounded-full bg-[#F8C800] px-8 font-aeonik text-[15px] font-bold uppercase tracking-[0.1em] text-black transition-colors hover:bg-[#ffd51f] sm:w-auto sm:min-w-[300px]"
            >
              <span>Try it on browser</span>
              <ArrowUpRight className="h-6 w-6" strokeWidth={2.4} />
            </a>
          </div>

          <div className="mt-14 -mx-7 overflow-hidden rounded-[24px] py-6 sm:-mx-12 lg:-mx-20 lg:mt-16">
            <div
              className="flex min-w-full items-center gap-4"
              style={{
                animation: 'benefit-marquee 18s linear infinite',
                whiteSpace: 'nowrap',
              }}
            >
              {[...benefits, ...benefits].map((benefit, index) => (
                <div
                  key={`${benefit}-${index}`}
                  className="inline-flex min-h-14 items-center gap-5 rounded-full bg-[#242424] px-6 py-4 font-aeonik text-[18px] text-white lg:min-w-[330px]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white">
                    <Check className="h-4 w-4" strokeWidth={2.6} />
                  </span>
                  <span className="whitespace-normal lg:whitespace-nowrap">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Access
