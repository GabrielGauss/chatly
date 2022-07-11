import React from 'react'
import ChatlyLogo from "./img/chatly-logo.png"

const NavMain = () => {
  return (
    <nav>
        <div className='Title'>
            <img src={ChatlyLogo} alt="logo" style={{width: "6rem"}} />
            <a href="#">CHATLY.me</a>
        </div>
        <div className='Options'>
            <a href="#">Services</a>
            <a href="#">Enterprice</a>      
            <a href="#">Pricing</a>

        <button className='btn-main' >My Account</button>

        </div>
    </nav>
  )
}

export default NavMain