import React from 'react'
import { Button } from '../Button/button'
import './HeroSection.css'
import '../../App.css'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <div className='hero-heading'>
        <h1 className='main-header'>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>

        </div>
        <div className='hero-btns'>
            <div className='btn-1'>
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large' 
            >
                GET STARTED
            </Button>
            </div>
            <div className='btn-2'>
            <Button 
            className='btns'
            to={'/book'} 
            buttonStyle='btn--primary'
            buttonSize='btn--large' 
            >
               Book A Trip Now!
            </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection