import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChevronDown, faClose, faClosedCaptioning, faFolderClosed, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
import UserProfile from './user-profile';
import './styles/nav-styles.css';
// import style from './styles/nav-styles.css'
import Link from 'next/link';
import Image from 'next/image';


const NavBar = () => {
  return (
    <div className='nav-bar'>
      <nav>
         <div className="logo">
          <Link href="">GIGSAMA</Link>
         </div>
         <div className="action-buttons">
             <div className="notifications pointer">
                <FontAwesomeIcon id='bell' icon={faBell} />
                <span id="notifier"></span>        
             </div>
             {/* Help Button */}
             <FontAwesomeIcon id='styelspointer help' style={{color: '#1F1F1FB2'}} icon={faQuestion} />    
             {/* Closed to Offers */}
             <span className='closed-to-offers pointer'>
             {/* <Image
        src="/public/closed.png" // Path to your image
        alt="Description of the image" // Alt text for accessibility
        width={500} // Desired width
        height={300} // Desired height
        layout="responsive" // Optional: make the image responsive
        />          */}
            
        <FontAwesomeIcon id='bell' icon={faClose} />
             <p>Closed to Offers</p>
                <FontAwesomeIcon id='closed-chevron-button' icon={faChevronDown} />
             </span>
             <UserProfile></UserProfile>
         </div>
      </nav>
    </div>
  )
}

export default NavBar