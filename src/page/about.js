import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import logo_white from '../assets/logo.svg';
import Footer from '../components/footer';

function About(about) {

  return (
  <>
      <div style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '150px' }} id="about">
      <div className='flex justify-between flex-about'>
        <div className='w-8 -mt-5 image m-2'>
          <img src={logo_white} alt='image' width={300} />
        </div>
        <div className='w-10 mt-5'>
          <h1 className='text-white text-6xl'>{about.about}</h1>
          <p className='text-white text-xl mt-6'>{about.about_Des}</p>
        </div>
      </div>
   
    </div>
    <hr />
      <Footer />
  </>
  )
}

export default About