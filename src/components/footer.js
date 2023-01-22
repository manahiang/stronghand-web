import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo_name.png';
const fb = 'https://web.facebook.com/sh.homefix';
const telegram = 'https://t.me/sh.homefix';
const linkedin = 'https://linkedin.com'

function Footer() {
  return (
    <>
      <div className='footer flex justify-content-between' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto' }}>
        <div className='m-2'>
          <img src={Logo} width={150} />
        </div>
        <div className='flex-column mt-3'>
          <Link to="/about" className='no-underline'><div className='A m-2 text-white'>About</div></Link>
          <Link to="/" className='no-underline'><div className='B m-2 text-white'>Privacy & Policy</div></Link>
          <Link to="/" className='no-underline'><div className='T m-2 text-white'>Term Of USe</div></Link>
        </div>
        <div className='Link flex justify-content-between mt-4' style={{ color: 'var(--surface-0)' }}>
          <a href={fb}><div className='m-2 text-white'><i className="pi pi-facebook"></i></div></a>
          <a href={telegram}><div className='m-2 text-white'><i className="pi pi-telegram"></i></div></a>
          <a href={linkedin}><div className='m-2 text-white'><i className="pi pi-linkedin"></i></div></a>
        </div>
      </div>
      {/* End */}
      <div style={{ margin: 'auto', maxWidth: '1200px' }}>
        <p className='text-center text-xl text-white'>Copyright © 2021</p>
      </div>
    </>
  )
}

export default Footer