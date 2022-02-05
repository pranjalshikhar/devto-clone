import './App.scss';
import Navigation from './Components/Navigation';
import LeftSidebar from './Components/LeftSidebar';
import RighSidebar from './Components/RightSidebar';
import Article from './Components/Article';
import { useState } from 'react';

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggle = () => {
      setMobileMenu(!mobileMenu);
  };


  return (
    <>
      <Navigation openMenu={toggle} />

      <main className='main-container'>
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Article />
        <RighSidebar />
      </main>

    </>
  );
}

export default App;
