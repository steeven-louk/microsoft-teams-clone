import React from 'react'

import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-menu'>
                <i class="fi-rr-layout-fluid"></i>
            </div>
            <div className='header-leftFold'>
                <label className='header-label'> Microsoft Teams </label>
            </div>
            <div className='header-rightFold'>
                <div className='header-search'>
                    <i class="fi-rr-search"></i>
                    <input placeholder='Search...'/>
                </div>
                <div className='header-profile'>
                    <div className='header-options'>
                        <i class="fi-rr-menu-dots"></i>
                    </div>
                    <img className='header-avatar'
                     src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                     alt="" />
                </div>
            </div>
        </div>
    )
}
