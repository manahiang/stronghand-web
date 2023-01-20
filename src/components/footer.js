import React from 'react'
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
        <div className='flex-column mt-3' style={{ color: 'var(--surface-0)' }}>
          <div className='A m-2'>About</div>
          <div className='B m-2'>Privacy & Policy</div>
          <div className='T m-2'>Term Of USe</div>
        </div>
        <div className='Link flex justify-content-between mt-4' style={{ color: 'var(--surface-0)' }}>
          <a href={fb} style={{ color: 'var(--surface-0)' }}><div className='m-2'><i className="pi pi-facebook"></i></div></a>
          <a href={telegram} style={{ color: 'var(--surface-0)' }}><div className='m-2'><i className="pi pi-telegram"></i></div></a>
          <a href={linkedin} style={{ color: 'var(--surface-0)' }}><div className='m-2'><i className="pi pi-linkedin"></i></div></a>
        </div>
      </div>
      {/* End */}
      <div style={{ margin: 'auto', maxWidth: '1200px' }}>
        <p style={{ textAlign: 'center', fontSize: '20px', color: 'var(--surface-0)' }}>Copyright © 2021</p>
      </div>
    </>
  )
}

export default Footer