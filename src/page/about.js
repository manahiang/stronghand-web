import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import logo_white from '../assets/logo.svg';
import Footer  from '../components/footer';

function About() {
  const[about,setAbout]=useState("About Stronghand")
  const[des,setDes]=useState("we are a specialist that provides comfort for your room or office. Do not allow a power outlet to cause a fire. We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.")
  return (
    <div style={{maxWidth:'1200px',height:'auto', margin:'auto',marginTop:'150px'}}>
        <div className='flex justify-between flex-about'>
          <div className='w-8 -mt-5 image m-2'>
            <img src={logo_white} alt='image'width={300}/>
          </div>
          <div className='w-10 mt-5'>
            <h1 className='text-white text-6xl'>{about}</h1>
            <p className='text-white text-xl mt-6'>{des}</p>
          </div>
        </div>
        <hr/>
        <Footer/>
    </div>
  )
}

export default About