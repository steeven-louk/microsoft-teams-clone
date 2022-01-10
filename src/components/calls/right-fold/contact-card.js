import React from 'react'
import './contact-card.css'

function ContactCard({item}) {
    return (
        <div className='contact-card'>
           <div className='contact-top'>
               <img src={item.avatar} className='contact-avatar' alt=''/>
               <div className='contact-info'>
                   <label className='contact-title'>{item.name}</label>
                   <label className='contact-subtitle'>{item.type}</label>
               </div>
           </div>
           <div className='contact-icons'>
               <div className='contact-icon'>
                    <i className='fi-rr-microphone'></i>
               </div>
               <div className='contact-icon'>
               <i className='fi-rr-microphone'></i>
               </div>
               <div className='contact-icon'>
               <i className='fi-rr-microphone'></i>
               </div>
           </div>
        </div>
    )
}

export default ContactCard
