import React from 'react'
import Hero from '../components/Hero'
import Milestone from '../components/Milestone'
import Features from '../components/Features'
import Manage from '../components/Manage'
import WhySmerp from '../components/WhySmerp'
import Faq from '../components/Faq'
import Access from '../components/Access'

const Home = () => {
  return (
    <> 
        <Hero />
        <Milestone />
        <Features />
        <Manage />
        <WhySmerp />
        <Faq />
        <Access />
    </>
  )
}

export default Home