
import './App.css';
import React, { useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import { Sidebar } from 'primereact/sidebar';
import Logo from './assets/logo_name.png';
import kh from './assets/kh.png';
import en from './assets/en.png';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

function App() {
  const [right, setRight] = useState(false);

  const Icon = (
    <React.Fragment>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-print" />
      </button>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-arrow-right" />
      </button>
    </React.Fragment>
  )
  return (
    <>
      <div className='container'>
        {/* Header */}

        <div className='header'>
          <div className='flex justify-content-between'>
            {/* Logo */}

            <div className='logo m-2'>
              <Link to="/">   <img src={Logo} width={150} /></Link>
            </div>
            {/* navbar */}
            <div className='res'>
              <div className='navbar flex alige-item-center justify-content-evenly mt-3 navarr'>
                <Link to='/' className='no-underline text-white'><div>Solution</div></Link>
                <Link to="/about" className='no-underline text-white'><div className='home'>About</div></Link>
                <Link to="/about" className='no-underline text-white'><div className='home'>Contact</div></Link>
              </div>
            </div>
            <div className='menu'>
              <Sidebar visible={right} position="right"
                onHide={() => setRight(false)}>
                <Link to='/' className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round
                '><div>Solution</div></Link>
                <Link to="/about" className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round'><div className='home'>About</div></Link>
                <Link to="/about" className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round'><div className='home'>Contact</div></Link>
                <div className='flex justify-content-center'>
               <a href='/'> <img src={en} width={30} className='m-2'/></a>
                <a href='/'><img src={kh} width={30} height={30} className='m-2'/></a>
                </div>
              </Sidebar>
              
              <i className='m-6 text-xxl pi pi-th-large text-2xl text-white cursor-pointer' label='' onClick={() => setRight(true)}></i>
            </div>
            {/* Language */}

            <div className='lan mt-3'>
              <img src={en} width={50}/>
              <img src={kh} width={50} />
            </div>
          </div>
        </div>
        {/* Body */}
        {/* Footer */}

      </div>
    </>
  );
}

export default App;
