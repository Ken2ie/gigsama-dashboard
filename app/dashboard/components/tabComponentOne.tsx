import React from 'react'
import Lottie  from 'lottie-react';
import animationData from '../../../public/Animation - 1728260561293.json';
import style from '../pages/page-styles/main-page.module.css'

const tabComponentOne = () => {
  return (
    <div className={style.tabComponentsOne}>
        <div style={{ width: 200, height: 150 }}>
           <Lottie animationData={animationData} loop={true} />
        </div>
        <div className={style.tabDetails}>
            <h2>No Jobs Yet</h2>
            <p>Complete your profile to unlock job opportunities tailored to your skills. Once you're ready, we'll match you with projects that fit your expertise.</p>
        </div>
    </div>
  )
}

export default tabComponentOne