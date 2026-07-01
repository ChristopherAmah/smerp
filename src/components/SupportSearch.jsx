import React from 'react'
import { Search } from 'lucide-react'

export default function SupportSearch() {
  return (
    <section className="rounded-[16px] bg-white p-4 border border-[#3A05451A]">
      <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
        <Search className="h-4 w-4 text-[#6B5F75]" />
        <input
          type="search"
          placeholder="Search help articles..."
          className="w-full bg-[#F8F6FA] text-[14px] text-[#6B5F75] outline-none placeholder:text-[#6B5F75]"
        />
      </div>
    </section>
  )
}
