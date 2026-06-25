import React, { useState } from 'react'
import {
  BarChart3,
  Box,
  Clock,
  Eye,
  EyeOff,
  Mail,
  Lock,
} from 'lucide-react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="relative isolate overflow-hidden min-h-screen bg-white px-6 py-10">
      <div className="pointer-events-none absolute bottom-[-12%] left-[-8%] -z-10 h-[42%] w-[58%] rounded-full bg-[#fff0a6] blur-[74px] sm:h-[48%] sm:w-[46%] lg:left-[-4%] lg:w-[20%]" />
      <div className="pointer-events-none absolute bottom-0 right-[18%] -z-10 h-[42%] w-[46%] rounded-full bg-[#f3dcf4] blur-[72px] sm:right-[24%] lg:right-[20%] lg:h-[28%] lg:w-[24%]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.5fr_1fr] items-center">
          <div className="space-y-8 rounded-[32px] border border-white/60  p-8  backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <p className="text-[36px] font-semibold text-[#3A0545] font-aeonik">
                Welcome back to <span className="max-w-2xl text-4xl font-semibold text-[#FCCE00] sm:text-[36px]">
                SMERP
              </span>
              </p>
              
              <p className="max-w-lg text-sm text-[#6B5F75] sm:text-[16px] font-aeonik">
                Sign in to access your dashboard and stay on top of everything that matters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-[#3A05451A] bg-[#FFFFFF] p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FCCE004D] text-[#3A0545]">
                    <BarChart3 className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-medium text-[#3A0545] font-aeonik">Real-time Analytics</h2>
                    <p className="text-[12px] text-[#6B5F75] font-sans">Monitor KPIs and business metrics at a glance.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#3A05451A] bg-[#FFFFFF] p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FCCE004D] text-[#3A0545]">
                    <Box className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-medium text-[#3A0545] font-aeonik">Inventory Control</h2>
                    <p className="text-[12px] text-[#6B5F75] font-sans">Stay on top of stock levels across locations.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#3A05451A] bg-[#FFFFFF] p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FCCE004D] text-[#3A0545]">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-[15px] font-medium text-[#3A0545] font-aeonik">Automated Workflows</h2>
                    <p className="text-[12px] text-[#6B5F75] font-sans">Save hours with smart automation and reminders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[16px] border-2 border-[#0000001A] bg-[#FFFFFF01] p-8 shadow-[0_30px_80px_rgba(63,22,94,0.14)] sm:p-[32.67px] font-aeonik">
            <div className="space-y-8">
              <div>
                <p className="text-[24px] font-semibold font-aeonik text-[#3A0545]">
                  Sign in to SMERP
                </p>
                <p className="mt-1 text-[14px] text-[#6B5F75]">Access your business dashboard</p>
              </div>
    
              <div className="space-y-5">
                <label className="block text-sm font-medium text-[#3A0545]">
                  Email Address
                  <div className="mt-2 relative">
                    <input
                      type="email"
                      placeholder="john@acme.com"
                      className="w-full rounded-[16px] border border-[#3A05451A] bg-[#F8F6FA] py-[13px] pl-[15.67px] pr-4 text-[14px] text-[#0F0A1280] outline-none transition focus:border-[#8e73f2] focus:ring-2 focus:ring-[#ded0ff]"
                    />
                  </div>
                </label>

                <label className="block text-sm font-medium text-[#3A0545]">
                  Password
                  <div className="mt-2 relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full rounded-[16px] border border-[#3A05451A] bg-[#F8F6FA] py-[13px] pl-[15.67px] pr-[15.67px] text-[14px] text-[#0F0A1280] outline-none transition focus:border-[#8e73f2] focus:ring-2 focus:ring-[#ded0ff]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#6f63a2]"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between gap-4 text-sm text-[#6f6a86]">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-[#D1C8D9] text-[#6B5F75] focus:ring-[#7e56a8] text-[12px]" />
                  Remember me for 30 days
                </label>
                <button className="text-[12px] font-bold text-[#3A0545] hover:text-[#7e56a8]">
                  Forgot password?
                </button>
              </div>

              <button className="w-full rounded-full bg-[#3f2972] py-4 text-[16px] font-bold text-[#FFFFFF] transition hover:bg-[#5c3eb1] shadow-[#0000001A] shadow-lg">
                Sign In
              </button>

              <p className="text-center text-[14px] text-[#6B5F75]">
                Don&apos;t have an account?{' '}
                <button className="font-bold text-[16px] text-[#3A0545] hover:text-[#5c3eb1]">Register now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
