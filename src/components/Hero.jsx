import React from 'react'
import heroArrow from '../assets/heroarrow.png'
import heroPhone from '../assets/herophone.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white px-5 pb-0 pt-0 sm:px-8 sm:pb-6 md:px-12 lg:min-h-[560px] lg:px-[102px] lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[-8%] -z-10 h-[42%] w-[58%] rounded-full bg-[#fff0a6] blur-[74px] sm:h-[48%] sm:w-[46%] lg:left-[-4%] lg:w-[20%]" />
      <div className="pointer-events-none absolute bottom-0 right-[18%] -z-10 h-[42%] w-[46%] rounded-full bg-[#f3dcf4] blur-[72px] sm:right-[24%] lg:right-[30%] lg:h-[48%] lg:w-[24%]" />

      <div className="mx-auto grid max-w-[1240px] items-center gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="relative max-w-[560px] pt-2 sm:pt-4 lg:pt-10">
          <h1 className="font-sora text-[38px] font-bold leading-[1.14] tracking-normal text-[#111718] sm:text-[48px] md:text-[56px] lg:text-[64px]">
            An <span className="text-[#F8C800]">ERP</span> Solution that Fits into your business
          </h1>

          <p className="mt-[14px] max-w-[560px] font-aeonik text-[16px] leading-7 text-[#4A4F55] sm:mt-5 sm:text-[22px] sm:leading-8">
            Eliminate disconnected systems and manage all your business operations on one platform with SMERP. From purchasing to warehousing, keep everything in check from anywhere.
          </p>

          <div className="relative mt-6 flex sm:inline-flex">
            <a
              href="#register"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#3B0547] px-5 py-3 font-aeonik text-[15px] font-medium text-white transition-colors hover:bg-[#4B0A5B] sm:w-auto sm:px-[21.74px] sm:text-[20px]"
            >
              <span>Start your 30 days trial</span>
              <span aria-hidden="true" className="text-2xl leading-none">
                &rarr;
              </span>
            </a>

            <img
              src={heroArrow}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[calc(100%+14px)] top-4 hidden h-auto w-[150px] max-w-none md:block"
            />
          </div>
        </div>

        <div className="hidden lg:static lg:block lg:min-h-[680px]">
          <img
            src={heroPhone}
            alt="SMERP dashboard shown on mobile phones"
            className="absolute bottom-[-120px] right-[-1px] w-[min(58vw,680px)] max-w-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
