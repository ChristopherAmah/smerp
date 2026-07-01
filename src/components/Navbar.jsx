import React from 'react';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full bg-white px-6 py-10 md:px-[102px] flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center space-x-2 cursor-pointer">
        <img src={logo} alt="Logo" className='w-30.6 h-12' />
      </div>
      </Link>

      {/* Navigation Links & CTA */}
      <nav className="flex items-center space-x-[24px] font-aeonik font-medium text-[#222222]">
        <Link to="/" className="hover:text-[#2B0A3D] transition-colors text-[18px]">
          Home
        </Link>
        <Link to="/support" className="hover:text-[#2B0A3D] transition-colors text-[18px]">
          Live Support
        </Link>
        <Link to="/login" className="hover:text-[#2B0A3D] transition-colors text-[18px]">
          Log In
        </Link>
        
        {/* CTA Button */}
        <Link to="/register" className="bg-[#3B0547] text-white text-[16px] px-5 py-3 font-normal rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-all">
          <span>Register</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
