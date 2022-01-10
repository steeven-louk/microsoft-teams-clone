import React from 'react'
import './dialer-item.css'


function DialerItem({ item }) {
    return (
        <div className='dialer-item'>
            <img src={item.avatar} className='item-avatar' alt=''/>
            <div className='item-info'>
                <label className='item-title'>{item.name}</label>
                <label className='item-subtitle'>{item.type}</label>
            </div>
            <div className='item-icons'>
                <div className='item-icon'>
                    <i className='fi-rr-microphone'></i>
                    <i className='fi-rr-microphone'></i>
                    <i className='fi-rr-microphone'></i>
                </div>
            </div>
        </div>
    )
}

export default DialerItem
