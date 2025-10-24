import Featuredproducet from '@/Components/Home/featuredproducet'
import HeroSection from '@/Components/Home/herosection'
import Recentlyadded from '@/Components/Home/recentlyadded'
import React from 'react'


export default function Home() {
  return (
    <>
    <HeroSection/>
  <Recentlyadded/>
  <Featuredproducet/>  
    </>
  )
}
