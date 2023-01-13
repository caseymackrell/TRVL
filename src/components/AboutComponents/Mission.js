import React from 'react'
import './Mission.css'

function Mission() {
  return (
    <div className='mainContainer'>
        <img src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-3.jpg' alt='Pic' className='img-1'/>
        <div className='header'>
        <h1 className='missionHeader'>Our Mission</h1>

            </div>
        <div className='underline'><br></br></div>
        <div className='description-container'>
            <div className='mission'>
                <h5>Our mission at TRVL is to bring you to a place of wonder and exciment in which your wildest dreams come true. <div className='bookNow'> Book a trip today and make memories for a lifetime!</div></h5>
            
            </div>
        </div>
        
                <div className='underlineBottom'><br></br></div>
    </div>
  )
}


export default Mission