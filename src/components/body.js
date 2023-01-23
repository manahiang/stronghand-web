import React, { useState } from 'react'
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import bg1 from '../assets/background.svg';
import ele2 from '../assets/electric.svg';
import pl3 from '../assets/plumbing2.svg';
import hand4 from '../assets/SlashScreen.png';
import Footer from './footer';
const ios = 'https://appstore.com';
const and = 'https://playstore.com';

function Body(title) {
  return (
    <>
      <div className='body'>
        <div className='flex justify-content-between flex-title'>
          {/* Title */}
          <div className='title '>
            <h1 className='m-2 text-white text-left text-6xl font-bold line-height-3'>{title.title}</h1>
            <div className='os flex'>
              <a href={ios} className="w-full m-2"><Button label='Android' className="p-button-warning" icon="pi pi-android" /></a>
              <a href={and} className="w-full m-2"><Button label='IOS' className="p-button-warning" icon="pi pi-apple" /></a>
            </div>
          </div>
          {/* background left */}

          <div className='background'>
            <img src={bg1} width={500} alt="" />
          </div>
        </div>
        {/* Solution */}
        <div className='solution' style={{ marginTop: '150px' }}>
          <h1 className='text-yellow-500 text-6xl font-bold m-2'>{title.solution}</h1>
          <div className='flex justify-content-between text-white flex-solution' style={{ marginTop: '100px' }}>
            <div className='card'>
              <img src={bg1} alt="bg" />
              <p>{title.solution1}</p>
            </div>

            <div className='card'>
              <img src={ele2} alt="ele" />
              <p>{title.solution2}</p>
            </div>

            <div className='card'>
              <img src={pl3} alt="pl" />
              <p>{title.solution3}</p>
            </div>

          </div>
        </div>
        {/* Stronghand 3E */}

        <div className='stronghand'>
          <h1 className='text-yellow-500 text-6xl font-bold m-2 '>{title.stronghand}</h1>
          <div className='flex justify-content-between flex-title'>
            {/* Title */}
            <div className='title '>
              <h1 className='m-2 text-white text-left text-sm font-bold line-height-3'>{title.des}</h1>
              <div className='os flex'>
                <a href={ios} className="w-full m-2"><Button label='Android' className="p-button-warning" icon="pi pi-android" /></a>
                <a href={and} className="w-full m-2"><Button label='IOS' className="p-button-warning" icon="pi pi-apple" /></a>
              </div>
            </div>
            {/* background left */}

            <div className='background1'>
              <img src={hand4} width={500} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default Body;