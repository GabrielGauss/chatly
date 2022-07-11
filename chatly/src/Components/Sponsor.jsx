import React from 'react'
import Imgs from './img/Imgs'



export const Sponsor = () => {
  return (
    <section className='sponsor-main' >
      <h3>Trusted by 100,000+ users and teams of all sizes.</h3>

    <div className='Sponsors'>
        <img src={Imgs.logobbc} alt="bbc" />
        <img src={Imgs.logodpa} alt="dpa" />
        <img src={Imgs.logoun} alt="un" />
        <img src={Imgs.logorte} alt="rte" />
        <img src={Imgs.logoforbes} alt="forbes" />
      </div>
    </section>
  )
}
