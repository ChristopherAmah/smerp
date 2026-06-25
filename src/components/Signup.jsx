import React, { useState } from 'react'
import {
  BarChart3,
  Box,
  Clock,
  Eye,
  EyeOff,
  Lock,
} from 'lucide-react'

const Signup = () => {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    storeName: '',
    category: '',
    referralCode: '',
    plan: '',
    phone: '',
    acceptTerms: false,
    rememberMe: false,
  })

  const categories = ['Retail', 'Wholesale', 'Food & Beverage', 'Services']
  const plans = ['Starter', 'Growth', 'Enterprise']

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const passwordsMatch = form.password !== '' && form.password === form.confirmPassword
  const canProceed = passwordsMatch

  return (
    <section className="relative isolate overflow-hidden min-h-screen bg-white px-6 pt-[90px] pb-[150px]">
      <div className="pointer-events-none absolute bottom-[-12%] left-[-8%] -z-10 h-[42%] w-[58%] rounded-full bg-[#fff0a6] blur-[74px] sm:h-[48%] sm:w-[46%] lg:left-[-4%] lg:w-[20%]" />
      <div className="pointer-events-none absolute bottom-0 right-[18%] -z-10 h-[42%] w-[46%] rounded-full bg-[#f3dcf4] blur-[72px] sm:right-[24%] lg:right-[0%] lg:h-[28%] lg:w-[44%]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.5fr_1fr] items-center">
          <div className="space-y-8 rounded-[32px] border border-white/60 p-8 backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <p className="text-[36px] font-semibold text-[#3A0545] font-aeonik">
                Welcome to <span className="text-[#FCCE00]">SMERP</span>
              </p>
              <p className="max-w-lg text-sm text-[#6B5F75] sm:text-[16px] font-aeonik">
                Create your account and power up your business with tools built for growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-[#3A05451A] bg-[#FFFFFF] p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FCCE00] text-[#3A0545]">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FCCE00] text-[#3A0545]">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FCCE00] text-[#3A0545]">
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

          <div className="rounded-[24px] border border-[#0000001A] bg-white p-8 pb-6 shadow-[0_30px_80px_rgba(63,22,94,0.14)] sm:p-[32.67px] font-aeonik">
  <div className="space-y-8">

    <div>
      <p className="text-[28px] font-semibold text-[#3A0545]">
        Join SMERP Today
      </p>

      <p className="mt-2 text-[14px] text-[#6B5F75]">
        Set up your account and unlock powerful tools to grow your business.
      </p>
    </div>


    {step === 1 ? (

      <div className="space-y-5">

        <label className="block text-sm font-medium text-[#3A0545]">
          First Name

          <input
            value={form.firstName}
            onChange={(e)=>handleChange('firstName',e.target.value)}
            type="text"
            placeholder="Enter your first name"
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px] outline-none"
          />

        </label>


        <label className="block text-sm font-medium text-[#3A0545]">
          Last Name

          <input
            value={form.lastName}
            onChange={(e)=>handleChange('lastName',e.target.value)}
            type="text"
            placeholder="Enter your last name"
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px] outline-none"
          />

        </label>


        <label className="block text-sm font-medium text-[#3A0545]">
          Password

          <div className="mt-2 relative">

            <input
              value={form.password}
              onChange={(e)=>handleChange('password',e.target.value)}
              type={showPassword ? "text":"password"}
              placeholder="Enter your password"
              className="w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] pl-4 pr-12 text-[14px] outline-none"
            />


            <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >

              {
                showPassword
                ?
                <EyeOff className="h-4 w-4"/>
                :
                <Eye className="h-4 w-4"/>
              }

            </button>


          </div>


        </label>



        <label className="block text-sm font-medium text-[#3A0545]">
          Confirm Password

          <input
            value={form.confirmPassword}
            onChange={(e)=>handleChange('confirmPassword',e.target.value)}
            type={showPassword ? "text":"password"}
            placeholder="Re-enter your password"
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px] outline-none"
          />

        </label>



        <button
          type="button"
          onClick={() => canProceed && setStep(2)}
          disabled={!canProceed}
          className={`w-full rounded-full py-4 text-white font-bold transition ${
            canProceed ? 'bg-[#3f2972] hover:bg-[#5c3eb1]' : 'bg-[#B2A6C7] cursor-not-allowed'
          }`}
        >
          Proceed
        </button>
        {!passwordsMatch && (form.confirmPassword || form.password) && (
          <p className="text-sm text-red-600">Passwords must match before you can proceed.</p>
        )}



        <p className="text-center text-[14px] text-[#6B5F75]">

          If previously registered click

          <button className="ml-1 font-bold text-[#3A0545]">
            Sign In
          </button>

        </p>


      </div>



    ) : (



      <div className="space-y-5">


        <label className="block text-sm font-medium text-[#3A0545]">
          Store Name (small letters only)

          <input
            value={form.storeName}
            onChange={(e)=>handleChange('storeName',e.target.value)}
            placeholder="Your Store Name (small letters only)"
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px] outline-none"
          />

        </label>



        <label className="block text-sm font-medium text-[#3A0545]">

          Category

          <select
            value={form.category}
            onChange={(e)=>handleChange('category',e.target.value)}
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px]"
          >

            <option>
              Please choose a Category
            </option>


            {
              categories.map(item=>(
                <option key={item}>
                  {item}
                </option>
              ))
            }

          </select>


        </label>



        <label className="block text-sm font-medium text-[#3A0545]">

          Referral Code

          <input
            value={form.referralCode}
            onChange={(e)=>handleChange('referralCode',e.target.value)}
            placeholder="Referral Code (Optional)"
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px]"
          />


        </label>




        <label className="block text-sm font-medium text-[#3A0545]">

          Select Your Plan


          <select
            value={form.plan}
            onChange={(e)=>handleChange('plan',e.target.value)}
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4 text-[14px]"
          >

            <option>
              Please choose a Plan
            </option>


            {
              plans.map(item=>(
                <option key={item}>
                  {item}
                </option>
              ))
            }


          </select>


        </label>





        <label className="block text-sm font-medium text-[#3A0545]">

          Phone Number


          <input
            value={form.phone}
            onChange={(e)=>handleChange('phone',e.target.value)}
            placeholder="Enter your phone number"
            className="mt-2 w-full rounded-[16px] border border-[#E6E1E9] bg-[#F8F6FA] py-[13px] px-4"
          />


        </label>



        <div className="space-y-3">


          <label className="flex items-center gap-3 text-sm">

            <input
              type="checkbox"
              checked={form.acceptTerms}
              onChange={(e)=>handleChange('acceptTerms',e.target.checked)}
            />

            Accept Terms & Condition

          </label>



          <label className="flex items-center gap-3 text-sm">

            <input
              type="checkbox"
              checked={form.rememberMe}
              onChange={(e)=>handleChange('rememberMe',e.target.checked)}
            />

            Remember me for 30 days

          </label>


        </div>





        <button className="w-full rounded-full bg-[#3f2972] py-4 text-white font-bold">

          Create Your Store

        </button>




        <p className="text-center text-[14px] text-[#6B5F75]">

          If previously registered click

          <button className="ml-1 font-bold text-[#3A0545]">
            Sign In
          </button>

        </p>



      </div>


    )}



  </div>
</div>
    <div className="xl:col-start-2 flex justify-center items-center gap-3 mt-1">
      <button
        type="button"
        onClick={() => setStep(1)}
        className={`h-2.5 w-2.5 rounded-full transition ${
          step === 1 ? 'bg-[#3f2972]' : 'bg-[#FFFFFF]'
        }`}
        aria-label="Go to step 1"
      />

      <button
        type="button"
        disabled
        className={`h-2.5 w-2.5 rounded-full ${
          step === 2 ? 'bg-[#3f2972]' : 'bg-[#FFFFFF]'
        } cursor-not-allowed opacity-90`}
        aria-label="Step 2"
      />
    </div>



        </div>
      </div>
    </section>
  )
}

export default Signup
