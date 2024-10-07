'use client';
import { faBell, faChevronDown, faPerson, faQuestion, faSackDollar, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import './styles/user-profile.css';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';


const UserProfile = () => {
    
    var [isMenuOpen, openToggle] = useState(false) 


    function toggleMenu(){
        openToggle(isMenuOpen =! isMenuOpen)
    }

   return (
    <div  
    onClick={
        () => {
            toggleMenu()
        }
    }
    className='user-profile pointer'>
        <span className='user-circle'>
            <img src="https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?ga=GA1.2.1461056862.1673006198&semt=ais_hybrid" alt="" />
        </span>
        <FontAwesomeIcon icon={faChevronDown} />
        {/* <Menu></Menu> */}
        {
            isMenuOpen ? Menu() : ''
        }
    </div>
  )
}

export default UserProfile

const menuList = [
    {
        path: '',
        name: 'Account Settings',
        icon: 'faUser'
    },
    {
        path: '',
        name: 'Notifications',
        icon: 'faBell'
    },
    {
        path: '',
        name: 'Help Guide',
        icon: 'faQuestion'
    },
    {
        path: '',
        name: 'Log Out',
        icon: 'faSignOut'
    },
] 

const iconMap = {
    faUser: faUser,
    faBell: faBell, // corrected here as well
    faQuestion: faQuestion,
    faSignOut: faSignOut,
  } as const;



export const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                {
                    menuList.map((item, index) => (
                        <li><FontAwesomeIcon icon={iconMap[item.icon]}  style={{color: 'grey'}} /><span>{item.name}</span></li>
                    ))
                }
            </ul>
        </div>
    )
}