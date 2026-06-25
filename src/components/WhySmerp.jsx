import React from 'react'
import { Check, Shield, ArrowRight } from 'lucide-react'
import compliant from '../assets/compliant.png'

const WhySmerp = () => {
  const points = [
    'Cloud-based — access from any device, anywhere',
    'Real-time sync across departments',
    'Enterprise security with bank-grade encryption',
    'No IT team required — up and running in hours',
  ]

  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf5] px-6 py-16 sm:py-20 md:px-12 lg:px-24 lg:py-[96px]">
      <div className="pointer-events-none absolute left-[22%] top-0 -z-10 h-[320px] w-[480px] rounded-full bg-[#fff1a7] blur-[110px]" />
      <div className="pointer-events-none absolute right-[8%] top-[14%] -z-10 h-[230px] w-[420px] rounded-full bg-[#f3e4f5] blur-[100px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="max-w-[610px]">
          <span className="inline-flex rounded-full bg-[#F8C800] px-4 py-2 font-aeonik text-[12px] font-bold text-black">
            Why SMERP
          </span>

          <h2 className="mt-5 font-sora text-[36px] font-bold leading-[1.12] tracking-normal text-[#3B0547] sm:text-[46px] lg:text-[52px]">
            Manage operations effortlessly, anywhere in the world
          </h2>

          <p className="mt-6 max-w-[590px] font-aeonik text-[18px] leading-8 text-[#82798B] sm:text-[20px]">
            Whether you run a retail store, a distribution company, or a service business — SMERP adapts to your workflow. Multi-currency, multi-location, and built for scale.
          </p>

          <ul className="mt-9 space-y-5 font-aeonik text-[16px] font-semibold text-[#201B24]">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8C800] text-black">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#register"
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-[12px] bg-[#3B0547] px-6 py-3 font-aeonik text-[18px] font-bold text-white shadow-[0_10px_20px_rgba(59,5,71,0.22)] transition-colors hover:bg-[#4B0A5B]"
          >
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[669px] lg:mx-0 lg:justify-self-end">
          <img
            src={compliant}
            alt="Analytics dashboard showing business performance charts"
            className="h-auto w-full rounded-[16px] object-cover"
            loading="lazy"
          />

          {/* <div className="absolute bottom-[-20px] left-[-22px] flex items-center gap-4 rounded-[14px] bg-white px-4 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.18)] sm:left-[-32px] sm:px-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F8C800] text-[#3B0547]">
              <Shield className="h-6 w-6" strokeWidth={2.4} />
            </span>
            <span>
              <span className="block font-aeonik text-[16px] font-bold leading-tight text-[#3B0547]">
                SOC 2 Compliant
              </span>
              <span className="block font-aeonik text-[13px] leading-tight text-[#82798B]">
                Enterprise-grade security
              </span>
            </span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default WhySmerp
