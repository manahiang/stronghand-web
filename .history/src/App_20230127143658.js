
import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import { useHistory } from 'react-router-dom';
import { Scroller } from 'react-scroller';
import { Sidebar } from 'primereact/sidebar';
import Logo from './assets/logo_name.png';
import kh from './assets/kh.png';
import en from './assets/en.png';
import { Link } from 'react-router-dom';
import Body from './components/body';
import About from './page/about';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useContext } from 'react';
import { contents } from './language/data';
import { LangContext } from './context/langContext';
import Blog from './page/blog';

function App() {
  const [right, setRight] = useState(false);
  const { ChangeLang, Language } = useContext(LangContext);
  const { nav } = contents[Language];

  const scrollTarget = (target) => scroller.scrollTo(target,{smooth: true, duration: 700});
  const scrollToPage = async (target) => {
    if (history.location.pathname !=='/') {
      await history.push('/');
    }
    scrollTarget(target);
  };
  // console.log(contents[Language]);

  <React.Fragment>
    <button className="p-sidebar-icon p-link mr-1">
      <span className="pi pi-print" />
    </button>
    <button className="p-sidebar-icon p-link mr-1">
      <span className="pi pi-arrow-right" />
    </button>
  </React.Fragment>
  
  return (
    <>
      <div className='container' id="container">
        {/* Header */}

        <div className='header'>
          <div className='flex justify-content-between'>
            {/* Logo */}

            <div className='logo m-2'>
              <Link to="/">   <img src={Logo} width={150} alt="logo" /></Link>
            </div>
            {/* navbar */}
            <div className='res'>
              <div className='navbar flex alige-item-center justify-content-evenly mt-3 navarr '>
                <AnchorLink href="#solution" className='no-underline text-white' ><div>{nav[0]}</div></AnchorLink>
                <AnchorLink href="#about" className='no-underline text-white'><div className='home'>{nav[1]}</div></AnchorLink>
                <AnchorLink href="#product" className='no-underline text-white' ><div className='home' >{nav[2]}</div></AnchorLink>
                <Link to="/blog" className='no-underline text-white' ><div className='home' >Blog</div></Link>
              </div>
            </div>
            <div className='menu'>
              <Sidebar visible={right} position="right"
                onHide={() => setRight(false)}>
                <AnchorLink
                  href="#solution"
                  className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round
                '>
                  <div>{nav[0]}</div>
                </AnchorLink>

                <AnchorLink href="#about" className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round'><div className='home'>{nav[1]}</div></AnchorLink>

                <AnchorLink href="#product" className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round'><div className='home'>{nav[2]}</div></AnchorLink>

                <div className='flex justify-content-center'>
                  <img src={en} width={30} className='m-2' alt='en'

                  />
                  <img src={kh} width={30} height={30} className='m-2' alt='kh'

                  />
                </div>
              </Sidebar>

              <i className='m-6 text-xxl pi pi-th-large text-2xl text-white cursor-pointer' label='' onClick={() => setRight(true)}></i>
            </div>
            {/* Language */}

            <div className='lan mt-3'>
              <img src={en} width={50} alt="en"
                onClick={() => ChangeLang('en')}

              />
              , <img src={kh} width={50} alt="kh"
                onClick={() => ChangeLang('kh')} />
            </div>
          </div>
        </div>
        {/* Body */}
        {/* Footer */}
      </div>
      <Routes>
        <Route path='/' element={<Body
        />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Body />} />
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
