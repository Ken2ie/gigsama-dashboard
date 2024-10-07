'use client';
import { faArrowRight, faSackDollar, faBook, faCalendarDay, faGift, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../pages/page-styles/main-page.module.css'
import './../../globals.css'
import tabComponentOne from '../components/tabComponentOne';

const MainPage = () => {

  var cardData = [
    {
      icon: 'faSackDollar',
      iconColor: '#21DB9A',
      title: 'Payments',
      isActive: false,
      description: "Stay updated on your pending and completed payments."
    },
    {
      icon: 'faBook', // corrected to faBook
      iconColor: '#3D21DB',
      title: 'Resources for Contractors',
      isActive: true,
      description: "Access helpful guides, tools, and tips to improve your work and grow your business."
    },
    {
      icon: 'faCalendarDay',
      iconColor: '#DB5621',
      title: 'Update Your Availability',
      isActive: false,
      description: "Let clients know when you're ready to take on new projects."
    },
    {
      icon: 'faGift',
      iconColor: '#21BFDB',
      title: 'Share Your Referral Link',
      isActive: true,
      description: "Earn rewards by inviting other talented contractors to join."
    }
  ];

  const iconMap = {
    faSackDollar: faSackDollar,
    faBook: faBook, // corrected here as well
    faCalendarDay: faCalendarDay,
    faGift: faGift,
  } as const;


  const [activeEngagement, setTab] = useState(true);
  const [forYou, setSecondTab] = useState(false);

  const steps = ['Sign Up', 'Add Bio & Intro Video', 'Set Availability'];
  const currentStep = 2; 

  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.welcomeActivity}>
            <div className={styles.welcomeIntro}>
              <span id={styles.welcome}>Welcome to your Job Board</span>
              <h2>Complete Your Profile to Get Started!</h2>
            </div>
            <div className={styles.progress}>
              <div className={styles.stepper}>
              <div className="w-full steps flex items-center justify-between">
                <Stepper steps={steps} currentStep={currentStep} />
               </div>
              </div>
            </div>
              <button className={styles.stepperButton}>Continue</button>
          </div>
          <div className={styles.engagements}>
            <div className={styles.intro}>
              <h2>Active Engagements</h2>
              <p>Track ongoing contracts and client communications.
                Access details and monitor your progress effortlessly.</p>
            </div>
            <div className={styles.tabs}>
              <div className={styles.button}>
                <span onClick={
                  () => {
                    setTab(true);
                    setSecondTab(false);
                  }
                } className={activeEngagement ? styles.active : styles.inactive} >Active Engagements</span>
                <span onClick={
                  () => {
                    setTab(false);
                    setSecondTab(true);
                  }
                } className={forYou ? styles.active : styles.inactive} >For You</span>
              </div>
                <hr />
              <div className={styles.tabComponents}>
                  {
                    activeEngagement? tabComponentOne() :  <span>No Content</span>
                  }
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.second}>
          <div className={styles.profile}>
            <span className={styles.mainCircle}>
              <img src="https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?ga=GA1.2.1461056862.1673006198&semt=ais_hybrid" alt="" />
            </span>
            <div className={styles.info}>
              <p><strong>Welcome back, Brandon</strong></p>
              <p>Let’s get you set up. Update your profile and showcase your skills to start connecting with clients.</p>
            </div>
          </div>
          <div className={styles.cards}>
            {cardData.map((card, index) => (
              <div className={card.isActive ? styles.card : styles.cardIsNotActive} key={index}> {/* key prop added */}
                <FontAwesomeIcon icon={iconMap[card.icon]} style={ card.isActive ? { color: card.iconColor, fontSize: 30 } : {color : 'grey', fontSize : 30}}/>
                <div className={styles.details}>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <Link href={''}><FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;



const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex w-full items-center relative justify-between">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <div className="relative step flex flex-col items-f-start space-y-2"> {/* Added space-y-2 for spacing */}
          <div className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
            index < currentStep ? 'stepGreen text-white' : 
            index === currentStep ? 'bg-blue-500 text-white' : 
            'bg-gray-300 text-gray-600'
          }`}>
            {index < currentStep ? <FontAwesomeIcon icon={faCheck} /> : index + 1}
          </div>
          <span className={styles.stepText}>{step}</span> 
        </div>
        {index < steps.length - 1 && (
          <div className={`progress h-1 ${
            index < currentStep - 1 ? 'noDashes' : 'dashes'
          }`} />
        )}
      </React.Fragment>
    ))}
  </div>
  
  );
};