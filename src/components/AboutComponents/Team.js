import React from 'react'
import TeamItem from './TeamItem'
import './Team.css'

function TeamCards() {
  return (
    <div className='cards'>
        <h1 className='teamHeader'>Our Team</h1>
                <div className='underlineTeam'><br></br></div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <TeamItem
                    src='https://esquirephotos.com/wp-content/uploads/2020/03/Anthony-Ocasio-Photoshoot-with-Mariia-03_13_20202593.jpg'
                    text='Kevin Davis'
                    label='CEO' 
                     />
                    <TeamItem
                    src='https://images.squarespace-cdn.com/content/v1/5feba1bd9d6aaa2be1de32da/1609618751023-GAST5OL5EHQLOAQINIUM/corporate-headshots-miami-pricing.jpg'
                    text='Zach Hendrix'
                    label='COO' 
                     />


                </ul>
                <ul className='cards__items'>
                    <TeamItem
                    src='https://lifetouchheadshots.com/wp-content/uploads/2018/01/whattowearpage1.png'
                    text='Joe King'
                    label='CFO' 
                     />
                    <TeamItem
                    src='https://www.andrewcollings.com/wp-content/uploads/2022/02/Chicago-Corporate-Portrait-Andrew-Collings-Photography-211129-38060.jpg'
                    text='Thomas Lewis'
                    label='CMO' 
                     />

                </ul>
                <ul className='cards__items'>
                    <TeamItem
                    src='https://images.squarespace-cdn.com/content/v1/593456b837c581fea8474fd6/1571259540092-RZAG7VAVW9SAQD6H4TDL/20191001-JA2_6009+%281%29.jpg'
                    text='John Smith'
                    label='HR Director' 
                     />
                    <TeamItem
                    src='https://images.squarespace-cdn.com/content/v1/5cd26185ebfc7f7e4313856b/1589909250208-ZAZAAS8PJNRZ8MW5X4P4/philadelphia-corporate-photographers-02.jpg'
                    text='Caden Snow'
                    label='VP of Sales' 
                     />
                    <TeamItem
                    src='https://www.themobileheadshot.com/wp-content/uploads/2022/09/TMH00193-1024x819.jpg'
                    text='Mark Wiley'
                    label='IT Supervisor' 
                     />
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default TeamCards