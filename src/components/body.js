import React from 'react'
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

function Body() {
  return (
    <>
    <div className='body'>
        <div className='flex justify-content-between'>
          {/* Title */}

          <div className='title' style={{ width: '50%' }}>
            <h1 className='m-2' style={{ color: 'var(--surface-0)', lineHeight: '1.6', textAlign: 'left', fontSize: '50px', fontWeight: '700' }}>Specialize in providing comfort for rooms or offices</h1>
            <div className='os m-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href={ios} style={{ width: '49%' }}><Button label='Android' className="p-button-warning" icon="pi pi-android" /></a>
              <a href={and} style={{ width: '49%' }}><Button label='IOS' className="p-button-warning" icon="pi pi-apple" /></a>
            </div>
          </div>
          {/* background left */}

          <div className='background'>
            <img src={bg1} width={600} alt=""/>
          </div>
        </div>
        {/* Solution */}
        <div className='solution' style={{ marginTop: '150px' }} id="#s">
          <h1 style={{ color: 'var(--yellow-500)', fontWeight: '800', fontSize: '50px' }}>Solution</h1>
          <div className='flex justify-content-between' style={{ marginTop: '100px', color: 'var(--surface-0)' }}>
            <div className='card'>
              <img src={bg1} alt="bg"/>
              <p>We are a specialist that provides comfort for your room or office.</p>
            </div>

            <div className='card'>
              <img src={ele2} alt="ele"/>
              <p>Do not allow a power outlet to cause a fire.</p>
            </div>

            <div className='card'>
              <img src={pl3} alt="pl"/>
              <p>We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.</p>
            </div>

          </div>
        </div>
        {/* Stronghand 3E */}

        <div className='stronghand-3e'>
          <h1 style={{ color: 'var(--yellow-500', fontSize: '50px' }}>Stronghand 3E</h1>
          <div className='flex justify-content-between'>
            <div className='title'>
              <p style={{ fontSize: '20px', color: 'var(--surface-0)' }} className="text-danger">We are a specialist that provides comfort for your room or office.</p>
              <div className='flex flex'>
              <a href={ios} style={{width:'49%'}}><Button label='android' className='p-button-warning m-2' icon="pi pi-android"/></a>
                <a href={and} style={{width:'49%'}}><Button label='ios' className='p-button-warning ml-4 mt-2' icon="pi pi-apple"/></a>
              </div>
            </div>
            <div className='m-2'>
              <img src={hand4} width={600} style={{ marginTop: '-150px' }} alt="hand" />
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <Footer/>
    </>
  )
}

export default Body;