import React from 'react'
import webdev from '../images/webdev.avif'
import jcam from '../images/jcam.png'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header__menu">
        <a href="/"><img className='logo' src={ jcam } alt="logo" /></a>
        <div className="header__nav">
            <nav>
                <a href="/">Contact</a>
                <a href="/">Portfolio</a>
                <a href="/">Github</a>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
