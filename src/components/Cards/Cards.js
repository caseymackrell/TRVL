import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1 className='cardHeading'>Check out these EPIC destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Amazon' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-8.jpg'
                    text='Ride camals through the desert!'
                    label='Egypt' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-7.jpg'
                    text='Photograph all of the wild animals in Australia!'
                    label='Australia' 
                     />

                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-6.jpg'
                    text='Walk the streets of downtown New York City!'
                    label='NYC' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-5.jpg'
                    text='Explore the Buckingham Palace in London!'
                    label='London' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-4.jpg'
                    text='Have everything you want all to yourself on your own private Island!'
                    label='Private Island' 
                     />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-3.jpg'
                    text='Feel like the king of the world on our 3 day yacht vacation!'
                    label='Yacht Adventure' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-2.jpg'
                    text='Sit back and relax on the beach in the Bahamas!'
                    label='Bahamas' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-1.jpg'
                    text='See the beautiful mountain ranges in Nepal!'
                    label='Nepal' 
                     />
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Cards