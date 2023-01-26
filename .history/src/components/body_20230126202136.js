
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
import logo_white from '../assets/logo.svg';
import { useContext } from 'react'
import 
const ios = 'https://appstore.com';
const and = 'https://playstore.com';

function Body() {
const {language} = useContext(LangContext);
  const {
    title, 
    solution_title,
    solution1,
    solution2,
    solution3,
    product_title,
    product_description
  } = contents[language];
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
        <div className='solution' style={{ marginTop: '100px' }} id='solution'>
          <h1 className='text-yellow-500 text-6xl font-bold m-2' >{title.solution}</h1>
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

        {/* About */}

        <div style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '150px' }} id="about">
          <div className='flex justify-between flex-about'>
            <div className='w-8 -mt-5 image m-2'>
              <img src={logo_white} alt='logo-white' width={300} />
            </div>
            <div className='w-10 mt-5'>
              <h1 className='text-white text-6xl'>{title.about}</h1>
              <p className='text-white text-xl mt-6'>{title.about_Des}</p>
            </div>
          </div>
        </div>

        {/* Stronghand 3E */}

        <div className='stronghand' style={{ marginTop: '150px' }}>
          <h1 className='text-yellow-500 text-6xl font-bold m-2 ' id='product'>{title.stronghand}</h1>
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