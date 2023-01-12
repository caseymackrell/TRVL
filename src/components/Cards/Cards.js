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
                    label='Adventure'
                    path='/services' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-8.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Desert Trip'
                    path='/services' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-7.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Explore'
                    path='/services' 
                     />

                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-6.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Adventure'
                    path='/services' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-5.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Adventure'
                    path='/services' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-4.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Adventure'
                    path='/services' 
                     />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-3.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Adventure'
                    path='/services' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-2.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Adventure'
                    path='/services' 
                     />
                    <CardItem
                    src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-1.jpg'
                    text='Explore the hidden waterfall deep inside the amazon Jungle'
                    label='Adventure'
                    path='/services' 
                     />
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Cards