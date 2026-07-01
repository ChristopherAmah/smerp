import React from 'react'
import { LuCalculator, LuCreditCard, LuShield, LuShoppingCart    } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { BsBox } from "react-icons/bs";

const categories = [
  {
    name: 'Inventory',
    icon: (
      <BsBox />
    ),
  },
  {
    name: 'Accounting',
    icon: (
      <LuCalculator />
    ),
  },
  {
    name: 'CRM',
    icon: (
      <RxPeople />
    ),
  },
  {
    name: 'Orders',
    icon: (
      <LuShoppingCart />
    ),
  },
  {
    name: 'Billing',
    icon: (
      <LuCreditCard />
    ),
  },
  {
    name: 'Security',
    icon: (
      <LuShield />
    ),
  },
]

export default function SupportCategories() {
  return (
    <section className="max-w-lg rounded-[32px] border border-[#F0EBF5] bg-white p-6 shadow-[0_20px_80px_rgba(44,23,108,0.04)]">
      {/* Title */}
      <h3 className="text-[14px] font-bold text-[#3A0545] font-sans">
        Support Categories
      </h3>

      {/* Categories Grid */}
      <div className="mt-9 grid grid-cols-3 gap-y-9 gap-x-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            {/* Soft Yellow Rounded Icon Container */}
            <div className="flex p-2 items-center justify-center rounded-[12px] bg-[#FDF5C2] text-[#3A0545] transition-transform duration-200 group-hover:scale-105">
              {category.icon}
            </div>
            
            {/* Label */}
            <span className="mt-2 text-[12px] font-medium text-[#6B5F75] transition-colors group-hover:text-[#3A0545]">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}