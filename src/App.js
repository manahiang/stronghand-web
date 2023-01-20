
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import Logo from './assets/logo_name.png';
import kh from './assets/kh.png';
import en from './assets/en.png';
import { Link } from 'react-router-dom';

function App() {
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

            <div className='navbar flex alige-item-center justify-content-evenly mt-3' style={{ color: 'var(--surface-0)' }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'var(--surface-0)' }}><div className='home'>Solution</div></Link>
              <Link to="/about" style={{ textDecoration: 'none', color: 'var(--surface-0)' }}><div className='home'>About</div></Link>
              <div className='home'>Contact</div>
            </div>
            {/* Language */}

            <div className='lan mt-3'>
              <img src={en} width={50} />
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
