import React from 'react'
import { ArrowUpRight, Check, ChevronDown, RefreshCw } from 'lucide-react'
import manageCard from '../assets/managecard.png'

const Manage = () => {
  const benefits = [
    'No hidden fees.',
    '100% security. Guaranteed.',
    'No training or maintenance needed.',
  ]

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-20 md:px-12 lg:px-24 lg:py-[120px]">
      <div className="pointer-events-none absolute right-[8%] top-8 -z-10 h-[240px] w-[360px] rounded-full bg-[#fff5a8] blur-[84px]" />
      <div className="pointer-events-none absolute right-[18%] top-[28%] -z-10 h-[150px] w-[320px] rounded-full bg-[#dff8ee] blur-[70px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[560px]">
          <img
            src={manageCard}
            alt="Card management dashboard with credit insights"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>

        <div className="mx-auto max-w-[560px] text-left lg:mx-0">
          <h2 className="font-sora text-[38px] font-bold leading-[1.18] tracking-normal text-black sm:text-[48px] lg:text-[56px]">
            Manage all your cards in one place
          </h2>

          <p className="mt-6 font-aeonik text-[17px] leading-8 text-black sm:text-[20px]">
            Centralize and simplify payments, and get comprehensive insights on your financials. Connect your bank account and your card to Milestone.
          </p>

          <ul className="mt-8 space-y-5 font-aeonik text-[17px] font-semibold text-black sm:text-[20px]">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl items-center gap-12 lg:mt-[120px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="mx-auto max-w-[570px] text-left lg:mx-0">
          <h2 className="font-sora text-[38px] font-bold leading-[1.18] tracking-normal text-black sm:text-[48px] lg:text-[56px]">
            Pay invoices, on time every time across borders
          </h2>

          <p className="mt-7 font-aeonik text-[17px] leading-8 text-black sm:text-[20px]">
            Send and receive payments in any currency, without any extra charges, within 24 hours or less. Make international transactions a piece of cake.
          </p>

          <p className="mt-5 font-aeonik text-[17px] leading-8 text-black sm:text-[20px]">
            Avoid late fees and penalties, and capture every early payment discount with reminders and automated approvals
          </p>

          <a
            href="#learn-more"
            className="mt-8 inline-flex items-center gap-4 font-aeonik text-[16px] font-bold uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-75"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span>Learn More</span>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
          <div className="pointer-events-none absolute inset-x-8 bottom-[-40px] -z-10 h-24 rounded-full bg-black/10 blur-[44px]" />
          <div className="overflow-hidden rounded-[8px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
            <div className="flex h-9 items-center justify-between bg-[#141719] px-4 text-white">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4c84f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#65c466]" />
              </div>
              <div className="hidden h-5 w-[45%] items-center justify-center rounded-[4px] bg-[#07090a] text-[10px] text-white/75 sm:flex">
                figma.com
              </div>
              <div className="flex items-center gap-3 text-white/55">
                <span className="h-3 w-3 rounded-sm border border-current" />
                <span className="h-3 w-3 rounded-sm border border-current" />
                <span className="text-base leading-none">+</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-sora text-[28px] font-bold leading-tight text-black sm:text-[32px]">
                Send Money
              </h3>
              <p className="mt-3 font-aeonik text-[17px] text-[#6b6b6b]">
                Balance : <span className="font-bold text-black">$34,560</span>
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-x-[58px] sm:gap-y-4">
                <div className="rounded-[8px] bg-[#f4f4f4] px-4 py-3">
                  <p className="font-aeonik text-[15px] text-[#777]">
                    From :
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-3 font-aeonik font-bold text-black">
                    <span className="text-sm">USA</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

                <div className="rounded-[8px] bg-[#f4f4f4] px-4 py-3">
                  <p className="font-aeonik text-[15px] text-[#777]">
                    To :
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-3 font-aeonik font-bold text-black">
                    <span className="text-sm">India</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

                <div className="rounded-[8px] bg-[#f4f4f4] px-4 py-4">
                  <p className="font-aeonik text-[15px] text-[#777]">
                    You send
                  </p>
                  <p className="mt-2 font-sora text-[24px] font-bold text-black">
                    $24,000<span className="align-baseline font-aeonik text-[12px]">USD</span>
                  </p>
                </div>

                <div className="relative rounded-[8px] bg-[#f4f4f4] px-4 py-4">
                  <span className="absolute left-[-38px] top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#d8ff2f] text-black sm:flex">
                    <RefreshCw className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <p className="font-aeonik text-[15px] text-[#777]">
                    Recipient gets
                  </p>
                  <p className="mt-2 font-sora text-[24px] font-bold text-black">
                    $1,80,948<span className="align-baseline font-aeonik text-[12px]">INR</span>
                  </p>
                </div>
              </div>

              <h4 className="mt-7 font-sora text-[22px] font-bold text-black sm:text-[24px]">
                Choose Method
              </h4>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-5 rounded-[8px] border border-black px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-aeonik text-[17px] font-bold text-black">
                      Get within next 24 hours
                    </p>
                    <p className="mt-1 font-aeonik text-[12px] text-[#777]">
                      Express
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-[8px] border border-[#e5e5e5] px-5 py-4">
                  <span className="h-7 w-7 shrink-0 rounded-full border border-[#cfcfcf]" />
                  <div>
                    <p className="font-aeonik text-[17px] font-bold text-black">
                      Get within next 3-4 days
                    </p>
                    <p className="mt-1 font-aeonik text-[12px] text-[#777]">
                      Standard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manage
