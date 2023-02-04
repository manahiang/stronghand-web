import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../assets/logo_name.png';
import { scroller } from 'react-scroll';
const fb = 'https://web.facebook.com/sh.homefix';
const telegram = 'https://t.me/sh.homefix';
const linkedin = 'https://linkedin.com'

function Footer() {
  const pathname=useLocation();
  const navigate=useNavigate();
  const scrollTarget = (target) => scroller.scrollTo(target, { smooth: true, duration: 700 });
  const scrollToPage = async (target) => {
    await navigate('/');
    scrollTarget(target);
  };
  return (
    <>
      <div className='footer flex justify-content-between' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto' }}>
        <div className='m-2'>
          <img src={Logo} width={150} alt="logo"/>
        </div>
        <div className='flex-column mt-3'>
          
          <AnchorLink href="#about" className='no-underline'><div className='A m-2 text-white'>About</div></AnchorLink>
          <AnchorLink href="#container" className='no-underline'><div className='B m-2 text-white'>Privacy & Policy</div></AnchorLink>
          <AnchorLink href="#container" className='no-underline'><div className='T m-2 text-white'>Term Of USe</div></AnchorLink>
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