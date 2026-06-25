import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Integrated Inventory Management',
      description: "Inventory management streamlines stock tracking to enhance efficiency. With SMERP's Inventory solution, SMEs can effectively manage their inventory.",
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600', // Warehouse/Inventory placeholder
    },
    {
      title: 'Customer Behaviour Analytics',
      description: 'Customer behaviour analytics is about understanding how your customers act across each channel and interaction point digital or non-digital – and what influences their actions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', // Dashboard/Laptop analytics placeholder
    },
    {
      title: 'Automated Order Management',
      description: 'Automated Purchase Order management provides smart and easy steps to configure workflow and automate all or some of these specific processes.',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600', // Payment/Order processing placeholder
    },
    {
      title: 'Point of Sale',
      description: 'SMERP POS is a retail point of sale system suitable for various small businesses (including online sellers) such as clothing and shoe stores, small franchises, sporting goods stores and gift shops.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600', // POS terminal placeholder
    },
    {
      title: 'Accounting Management',
      description: 'Accounting is a necessary process for any business. Precise accounting is indeed needed for the smooth running of the company without any financial losses.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600', // Accounting/Spreadsheet placeholder
    },
    {
      title: 'Rewards & Loyalty Program',
      description: 'Customer Retention is the key survival for most businesses. It is exponentially cheaper to keep current customers than gain new ones.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600', // Happy customer using mobile phone placeholder
    },
    {
      title: 'Customer Relationship Management',
      description: 'SMERP gives you the ability to intelligently and efficiently manage leads, opportunities, tasks, issues, requests, bugs, campaigns, and claims.',
      image: null, // Renders as the light grey placeholder card seen in the image
    },
    {
      title: 'Invoicing Management',
      description: 'With SMERP, it is very easy to integrate into your business platform. Personalise and automate your invoices, so you don\'t miss a payment.',
      image: null, // Renders as the light grey placeholder card seen in the image
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 text-center font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-[48px] space-y-6">
          <h2 className="text-4xl md:text-[48px] font-semibold text-[#000000] tracking-tight font-sora">
            Our Features
          </h2>
          <p className="text-[#000000] text-sm md:text-[20px] leading-relaxed font-aeonik">
            SMERP has been specifically designed to help improve your businesses performance. 
            Its functional coverage expands to many of different areas.
          </p>
        </div>

        {/* Features 4x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[43.33px] gap-y-[30px] text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4 group">
              
              {/* Visual Frame Asset Container */}
              <div className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#F4F4F6] transition-transform duration-300 group-hover:scale-[1.01]">
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  // Exact placeholder layout state from source view
                  <div className="w-full h-full bg-[#F4F4F6]" />
                )}
              </div>

              {/* Text Meta Fields */}
              <div className="space-y-4 pr-2">
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight tracking-tight font-aeonik">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#616573] leading-relaxed font-normal tracking-wide font-aeonik">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}