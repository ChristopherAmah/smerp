import React from 'react';
import capterra from '../assets/capterra.png';
import trustpilot from '../assets/trustpilot.png';
import gtrust from '../assets/gtrust.png';

export default function SocialProof() {
  // Array to cleanly map out the review platforms
  const reviews = [
    {
      quote: '"the interface is excellent"',
      platform: 'Capterra',
      
      logo: (
        <div className="flex items-center space-x-2 text-[#194473] font-bold text-2xl tracking-tight">
          <img src={capterra} alt="Capterra" className='w-[221px] h-[56px]'/>
        </div>
      ),
    },
    {
      quote: '"improvements in every release"',
      platform: 'Trustpilot',
      logo: (
        <div className="flex items-center space-x-2 text-black font-semibold text-2xl tracking-tight">
          <img src={trustpilot} alt="Trustpilot" className='w-[227px] h-[56px]'/>
        </div>
      ),
    },
    {
      quote: '"it is my main workhorse now"',
      platform: 'G2',
      logo: (
        <div className="flex items-center space-x-1 text-gray-800 font-bold text-2xl">
            <img src={gtrust} alt="G2" className='w-[56px] h-[56px]'/>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-[114px] px-6 md:px-12 text-center font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-[38px] font-bold text-black tracking-tight max-w-2xl font-sora mx-auto leading-tight mb-[29px]">
          Customers have consistently rated <br className="hidden sm:inline" />
          milestone 4.9/5
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          {reviews.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3.5">
              
              {/* 5-Star Rating Indicator */}
              <div className="flex space-x-1.5 text-[#F4A042]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Dynamic Customer Quote */}
              <p className="text-[#000000] italic text-[18.44px] font-normal tracking-wide font-aeonik">
                {item.quote}
              </p>

              {/* Brand Logo Wrapper */}
              <div className="pt-5 h-12 flex items-center justify-center">
                {item.logo}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}