import React from 'react'
import { Paperclip, Send, Smile } from 'lucide-react'
import { RiRobot2Fill } from "react-icons/ri";


const messages = [
  {
    id: 1,
    text: 'Hi there! Welcome to SMERP Support. How can I help you today?',
    time: '10:02 AM',
    sender: 'agent',
  },
  {
    id: 2,
    text: 'I’m available to assist with any questions about your account, features, billing, or technical issues.',
    time: '10:02 AM',
    sender: 'agent',
  },
]

export default function SupportChatPanel() {
  return (
    <main className="mx-auto flex h-[850px] w-full max-w-[900px] flex-col rounded-[24px] border border-[#EBE5F2] bg-white font-aeonik">
      
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#F3EDF7] p-5">
        <div className="flex items-center gap-3">
          {/* User Profile Image Wrapper */}
          <div className="relative h-12 w-12">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120" 
              alt="Sarah Thompson"
              className="h-full w-full rounded-full object-cover"
            />
            {/* Active Green Dot */}
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#00BC7D]" />
          </div>
          <div>
            <h2 className="text-[14px] font-bold text-[#3A0545]">Sarah Thompson</h2>
            <p className="text-[12px] text-[#00BC7D] font-medium">
              Active now <span className="text-[#00BC7D]">·</span> SMERP Support
            </p>
          </div>
        </div>
        
        {/* Ticket Badge */}
        <span className="rounded-full bg-[#F8F6FA] px-3 py-1.5 text-[12px] font-medium text-[#6B5F75] font-sans">
          Ticket #89421
        </span>
      </header>

      {/* Chat Messages Body */}
      <section className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col gap-1.5 max-w-[65%]">
            <div className="flex items-start gap-3">
              {/* Purple Bot Avatar Container */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3A0545] text-white">
                {/* Custom Bot Head SVG Icon */}
               <RiRobot2Fill />
              </div>
              
              {/* Text Bubble */}
              <div className="rounded-[18px] rounded-tl-none bg-[#F8F6FA] px-4 py-3 text-[14px] text-[#0F0A12]">
                <p>{message.text}</p>
              </div>
            </div>
            
            {/* Timestamp underneath bubble */}
            <div className="ml-12 text-[12px] text-[#6B5F75]">
              {message.time}
            </div>
          </div>
        ))}
      </section>

      {/* Footer Chat Input Bar */}
      <footer className="border-t border-[#F8F6FA] p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-3 rounded-[16px] bg-[#F7F2FF] px-4 py-3.5">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-transparent text-[14px] font-aeonik text-[#6B5F75] outline-none pl-4 placeholder:text-[#6B5F75]"
            />
            <button type="button" className="inline-flex items-center justify-center rounded-full text-[#6B5F75] transition hover:bg-white hover:text-[#3A0545]">
              <Paperclip className="h-4 w-4" />
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-full text-[#6B5F75] transition hover:bg-white hover:text-[#3A0545]">
              <Smile className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            className="flex p-[14px] items-center justify-center rounded-[16px] bg-[#3A0545] text-white shadow-[0_20px_40px_rgba(59,5,71,0.18)] transition hover:bg-[#3A0545]"
          >
            <Send className="h-4 w-4 " />
          </button>
        </div>
      </footer>

    </main>
  )
}