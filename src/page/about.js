import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import logo_white from '../assets/logo.svg';
import Footer  from '../components/footer';

function About() {
  return (
    <div style={{maxWidth:'1200px',height:'auto', margin:'auto',marginTop:'150px'}}>
        <div className='flex justify-between'>
          <div style={{width:'50%'}}>
            <img src={logo_white} alt='image'width={300}/>
          </div>
          <div style={{width:'50%',marginTop:'25px'}}>
            <h1 style={{color:'var(--surface-0)',fontSize:'50px'}}>About Stronghand</h1>
            <p style={{color:'var(--surface-0)',fontSize:'23px',marginTop:'50px',lineHeight:'1.4'}}>We are a specialist that provides comfort for your room or office. Do not allow a power outlet to cause a fire. We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.</p>
          </div>
        </div>
        <hr/>
        <Footer/>
    </div>
  )
}

export default About