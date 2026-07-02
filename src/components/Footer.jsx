import React from 'react';
import logo from '../assets/logo.png';
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaIdCard } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 md:px-12 lg:px-24 text-gray-800 font-sans">
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_1fr_1fr_1fr_2fr] gap-8 lg:gap-10 pb-12">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 w-[122.28px] h-[48.48px] mb-7">
            <img src={logo} alt="Logo" />
          </div>
          <p className="text-[18px] leading-relaxed text-[#000000] max-w-xs font-aeonik">
            SMERP is a cloud-based ERP solution that helps SMEs manage key 
            business operations, including Point of Sale, Inventory, and Accounting, 
            from a single platform.
          </p>
        </div>

        {/* Column 2: Pages Links */}
        <div>
          <h3 className="text-4 font-bold tracking-wider uppercase mb-7 text-black">
            Pages
          </h3>
          <ul className="space-y-5 text-[18px] text-[#000000] font-aeonik">
            <li><a href="#home" className="hover:text-[#2B0A3D]">Home</a></li>
            <li><a href="#pricing" className="hover:text-[#2B0A3D]">Pricing</a></li>
            <li><a href="#faqs" className="hover:text-[#2B0A3D]">FAQs</a></li>
            <li><a href="#about" className="hover:text-[#2B0A3D]">About Us</a></li>
          </ul>
        </div>

        {/* Column 3: Our Plans Links */}
        <div>
          <h3 className="text-4 font-bold tracking-wider uppercase mb-7 text-black">
            Our Plans
          </h3>
          <ul className="space-y-5 text-[18px] text-[#000000] font-aeonik">
            <li><a href="#basic" className="hover:text-[#2B0A3D]">Basic Plan</a></li>
            <li><a href="#standard" className="hover:text-[#2B0A3D]">Standard Plan</a></li>
            <li><a href="#enterprise" className="hover:text-[#2B0A3D]">Enterprise Plan</a></li>
          </ul>
        </div>

        {/* Column 4: Connect With Us */}
        <div>
          <h3 className="text-4 font-bold tracking-wider uppercase mb-7 text-black">
            Connect With Us
          </h3>
          <ul className="space-y-4 text-[16px] text-[#000000] font-aeonik">
            <li className="flex items-center space-x-2">
              <span className="text-[#2B0A3D] font-bold"><FaPhone /></span>
              <span>+234 806 045 56937</span>
            </li>
            {/* <li className="flex items-center space-x-2">
              <span className="text-[#2B0A3D] font-bold"><FaPhone /></span>
              <span>+234-8141381198</span>
            </li> */}
            <li className="flex items-center space-x-2">
              <span className="text-[#2B0A3D]"><HiMail /></span>
              <a href="mailto:smerp.support@thefifthlab.com" className="hover:underline">
                smerp.support@thefifthlab.com
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#2B0A3D] mt-0.5"><FaIdCard /></span>
              <span className="leading-tight">
                Block 54A, Plot 10, Off RufusGiwa Street, Lekki Phase 1, Lagos (Nigeria)
              </span>
            </li>
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div>
          <h3 className="text-[16px] font-bold tracking-wider uppercase mb-[32.25px] text-black">
            Subscribe to our newsletter
          </h3>
          <p className="text-[14.75px] text-[#000000] mb-4">*Only valuable resource.</p>
          <form className="flex items-center space-x-3 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your e-mail" 
              className="w-full bg-[#F4F4F6] text-sm px-5 py-3.5 rounded-full placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2B0A3D]"
            />
            <button 
              type="submit" 
              className="bg-black text-white p-3.5 rounded-full hover:bg-gray-900 transition-colors shrink-0"
              aria-label="Submit newsletter subscription"
            >
              <FaAngleRight />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar Container */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F2F4F7] rounded-xl rounded-b-none px-[40.5px] py-[12.42px] flex flex-col sm:flex-row items-center justify-between">
          <div className='text-[#212121] font-aeonik text-[16px] font-medium'>
            © All rights reserved by <span className="font-semibold text-black">Fifthlab.</span>
          </div>
          <div className="flex space-x-6 mt-2 sm:mt-0 text-[16px]">
            <a href="#privacy" className="underline hover:text-black font-semibold text-[#212121] font-aeonik">Privacy Policy</a>
            <a href="#terms" className="underline hover:text-black font-semibold text-[#212121] font-aeonik">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
