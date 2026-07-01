import React from 'react'
import SupportIntro from '../components/SupportIntro'
import SupportSearch from '../components/SupportSearch'
import SupportCategories from '../components/SupportCategories'
import SupportFAQ from '../components/SupportFAQ'
import SupportChatPanel from '../components/SupportChatPanel'

const Support = () => {
  return (
    <div className="relative min-h-screen px-6 py-10 md:px-14 lg:px-20">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 xl:grid xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)]" />
        <div className="pointer-events-none absolute bottom-[-12%] left-[-8%] -z-10 h-[42%] w-[58%] rounded-full bg-[#fff0a6] blur-[74px] sm:h-[48%] sm:w-[46%] lg:left-[-4%] lg:w-[20%]" />
        <div className="pointer-events-none absolute bottom-0 right-[18%] -z-10 h-[42%] w-[46%] rounded-full bg-[#f3dcf4] blur-[72px] sm:right-[24%] lg:right-[10%] lg:h-[58%] lg:w-[54%]" />

        <aside className="space-y-6">
          <SupportIntro />
          <SupportSearch />
          <SupportCategories />
          <SupportFAQ />
        </aside>

        <SupportChatPanel />
      </div>
    </div>
  )
}

export default Support