import React from 'react'
import BannerLeft from "./img/banner-left-e999bf666848c3e9fbb877fb4c87f54bdb5c877f6d6e4c4fe9b9a5b66aba919c.png"
import BannerRight from "./img/banner-right-54a90ad37b7a569f6e21013f87cfe181652baad2c4fd5041303f1f1c983ea203.png"

export const HeroMain = () => {
  return (
    <section className='Hero'>

      <img src={BannerLeft} alt="banner-left" className='Banner-left' />
<div className='Hero-text' >
     <div className='Hero-title'>
     <h1>  <span className='span-01'>CHATLY </span> <br/> is more than a chat,</h1>
        <h1>it's <span className='span-01'>BIGGER</span> .</h1>
      </div>
        <h2 className='Hero-subtitle'> is the first decentralized mobile messaging app,
        where your privacy comes first.</h2>

       <button className='btn-main2' >Start for Free</button>
</div>    
    <img src={BannerRight} alt="banner-right" className='Banner-right' />
    </section>


  )
}
