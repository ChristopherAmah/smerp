import React from 'react'
import { FiHeadphones } from "react-icons/fi";

export default function SupportIntro() {
  return (
    <section className="max-w-lg rounded-[16px] border border-[#F0EBF5] bg-white p-6 font-aeonik">
      <div className="flex flex-col gap-5">
        {/* Top Header Section */}
        <div className="flex items-center gap-4">
          {/* Headset Icon Container */}
          <div className="flex shrink-0 items-center justify-center rounded-[16px] bg-[#3A0545] text-white">
            <FiHeadphones className='w-16 h-16 p-3'/>
          </div>

          {/* Title and Status */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[20px] font-bold text-[#3A0545]">
              SMERP Support
            </h2>
            <div className="flex items-center gap-2">
              {/* Green Dot Indicator */}
              <span className="h-2 w-2 rounded-full bg-[#00D492]" />
              <p className="text-[12px] font-medium text-[#009966]">
                Online — 2 agents available
              </p>
            </div>
          </div>
        </div>

        {/* Description Text Section */}
        <p className="text-[14px] text-[#6B5F75]">
          Our support team is here to help. Average response time:{' '}
          <span className="font-bold text-[#3A0545]">under 5 minutes</span>.
        </p>
      </div>
    </section>
  )
}