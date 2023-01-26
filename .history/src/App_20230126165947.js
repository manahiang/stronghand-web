
import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
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
import Body from './components/body';
import About from './page/about';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useContext } from 'react';
import { Context } from './language/data';
import { LangContext } from './context/langContext';

function App() {
  const [s, setS] = useState("Solution")
  const [p, setP] = useState("Product")
  const [a, setA] = useState("About")
  const [title, setTitle] = useState("Specialize in providing comfort for rooms or offices.")
  const [solution, setSolution] = useState("Solution")
  const [solution1, setSolution1] = useState("We are a specialist that provides comfort for your room or office.")
  const [solution2, setSolution2] = useState("Do not allow a power outlet to cause a fire.")
  const [solution3, setSolution3] = useState("We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.")
  const [stronghand, setStronghand] = useState("Stronghand 3E")
  const [des, setDes] = useState('We are a specialist that provides comfort for your room or office.')
  const [about, setAbout] = useState("About Stronghand 3E")
  const [about_Des, setAbout_Des] = useState("We are a specialist that provides comfort for your room or office. Do not allow a power outlet to cause a fire. We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.")
  const [right, setRight] = useState(false);
  const [ChangeLang,lang]

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
              <Link to="/">   <img src={Logo} width={150} alt="logo"/></Link>
            </div>
            {/* navbar */}
            <div className='res' data-aos="fade-right" data-aos-duration="200" >
              <div className='navbar flex alige-item-center justify-content-evenly mt-3 navarr'>
                <AnchorLink href="#solution" className='no-underline text-white' ><div>{s}</div></AnchorLink>
                <AnchorLink href="#about" className='no-underline text-white'><div className='home'>{a}</div></AnchorLink>
                <AnchorLink href="#product" className='no-underline text-white' ><div className='home' >{p}</div></AnchorLink>
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
                '><div>{s}</div></AnchorLink>

                <AnchorLink href="#about" className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round'><div className='home'>{a}</div></AnchorLink>

                <AnchorLink href="#product" className='no-underline text-green-600 font-bold m-2
                transition-colors transition-duration-1000  hover:bg-yellow-500 text-green hover:text-gray-900
                flex justify-content-center py-2 border-round'><div className='home'>{p}</div></AnchorLink>

                <div className='flex justify-content-center'>
                   <img src={en} width={30} className='m-2' alt='en'
                    onClick={() =>
                      (setS("Solution")) +
                      (setP("Product")) +
                      (setA("About")) +
                      (setTitle("Specialize in providing comfort for rooms or offices.")) +
                      (setSolution("Solution")) +
                      (setSolution1("We are a specialist that provides comfort for your room or office.")) +
                      (setSolution2("Do not allow a power outlet to cause a fire.")) +
                      (setSolution3("We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.")) +
                      (setStronghand("Stronghand 3E")) +
                      (setDes("We are a specialist that provides comfort for your room or office.")) +
                      (setAbout("About Stronghand 3E")) +
                      (setAbout_Des("We are a specialist that provides comfort for your room or office. Do not allow a power outlet to cause a fire. We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities."))
                    }
                  />
                  <img src={kh} width={30} height={30} className='m-2' alt='kh'
                    onClick={() =>
                      (setS("ដំណោះស្រាយ")) +
                      (setP("ផលិតផល")) +
                      (setA("អំពីយើង")) +
                      (setTitle("នកឯកទេសផ្តល់ជូនផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក")) +
                      (setSolution("ដំណោះស្រាយ")) +
                      (setSolution1("យើងជាអ្នកឯកទេសដែលផ្តល់ជូននូវ ផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក។")) +
                      (setSolution2("សូមកុំអនុញ្ញាតឱ្យព្រីភ្លើងមួយគ្រាប់ បង្ករអោយមានអគ្គីភ័យកើតឡើង។")) +
                      (setSolution3("យើងធានាការផ្តល់ជូននូវបណ្តាញផ្គត់ផ្គង់ប្រកបដោយគុណភាពតំលៃសមរម្យនិងការធានាពេញចិត្ត ១០០% ដល់សហគមន៍មូលដ្ឋានរបស់យើង។")) +
                      (setStronghand("Stronghand 3E")) +
                      (setDes("យើងគឺជាអ្អ្នកឯកទេសផ្តល់ជូនផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក។")) +
                      (setAbout("អំពី Stronghand 3E")) +
                      (setAbout_Des("យើងជាអ្នកឯកទេសដែលផ្តល់ជូននូវ ផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក។ សូមកុំអនុញ្ញាតឱ្យព្រីភ្លើងមួយគ្រាប់ បង្ករអោយមានអគ្គីភ័យកើតឡើង។ យើងធានាការផ្តល់ជូននូវបណ្តាញផ្គត់ផ្គង់ប្រកបដោយគុណភាពតំលៃសមរម្យនិងការធានាពេញចិត្ត ១០០% ដល់សហគមន៍មូលដ្ឋានរបស់យើង។"))
                    }
                  />
                </div>
              </Sidebar>

              <i className='m-6 text-xxl pi pi-th-large text-2xl text-white cursor-pointer' label='' onClick={() => setRight(true)}></i>
            </div>
            {/* Language */}

            <div className='lan mt-3'>
              <img src={en} width={50} alt="en"
                onClick={() =>
                  (setS("Solution")) +
                  (setP("Product")) +
                  (setA("About")) +
                  (setTitle("Specialize in providing comfort for rooms or offices.")) +
                  (setSolution("Solution")) +
                  (setSolution1("We are a specialist that provides comfort for your room or office.")) +
                  (setSolution2("Do not allow a power outlet to cause a fire.")) +
                  (setSolution3("We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities.")) +
                  (setStronghand("Stronghand 3E")) +
                  (setDes("We are a specialist that provides comfort for your room or office.")) +
                  (setAbout("About Stronghand 3E")) +
                  (setAbout_Des("We are a specialist that provides comfort for your room or office. Do not allow a power outlet to cause a fire. We insured our plumbing offering quality, affordable, and 100% satisfaction guaranteed services to our local communities."))
                }
              />


              , <img src={kh} width={50} alt="kh" onClick={() =>
                (setS("ដំណោះស្រាយ")) +
                (setP("ផលិតផល")) +
                (setA("អំពីយើង")) +
                (setTitle("នកឯកទេសផ្តល់ជូនផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក")) +
                (setSolution("ដំណោះស្រាយ")) +
                (setSolution1("យើងជាអ្នកឯកទេសដែលផ្តល់ជូននូវ ផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក។")) +
                (setSolution2("សូមកុំអនុញ្ញាតឱ្យព្រីភ្លើងមួយគ្រាប់ បង្ករអោយមានអគ្គីភ័យកើតឡើង។")) +
                (setSolution3("យើងធានាការផ្តល់ជូននូវបណ្តាញផ្គត់ផ្គង់ប្រកបដោយគុណភាពតំលៃសមរម្យនិងការធានាពេញចិត្ត ១០០% ដល់សហគមន៍មូលដ្ឋានរបស់យើង។")) +
                (setStronghand("Stronghand 3E")) +
                (setDes("យើងគឺជាអ្អ្នកឯកទេសផ្តល់ជូនផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក។")) +
                (setAbout("អំពី Stronghand 3E")) +
                (setAbout_Des("យើងជាអ្នកឯកទេសដែលផ្តល់ជូននូវ ផាសុខភាព សម្រាប់បន្ទប់ ឬការិយាល័យរបស់អ្នក។ សូមកុំអនុញ្ញាតឱ្យព្រីភ្លើងមួយគ្រាប់ បង្ករអោយមានអគ្គីភ័យកើតឡើង។ យើងធានាការផ្តល់ជូននូវបណ្តាញផ្គត់ផ្គង់ប្រកបដោយគុណភាពតំលៃសមរម្យនិងការធានាពេញចិត្ត ១០០% ដល់សហគមន៍មូលដ្ឋានរបស់យើង។"))
              } />
            </div>
          </div>
        </div>
        {/* Body */}
        {/* Footer */}
      </div>
      <Routes>
        <Route path='/' element={<Body
          title={title}
          solution={solution}
          solution1={solution1}
          solution2={solution2}
          solution3={solution3}
          stronghand={stronghand}
          des={des}
          about={about}
          about_Des={about_Des}
        />} />
        <Route path='/about' element={<About about={about} about_Des={about_Des} />} />
        <Route path='/' element={<Body />} />
      </Routes>
    </>
  );
}

export default App;
