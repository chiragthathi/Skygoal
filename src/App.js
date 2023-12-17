import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import About1 from './components/About1';
import Schedule from './components/Schedule';
import Discounts from './components/Discounts';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className={`homepage ${windowWidth <= 1512 ? 'show' : ''}`} />
      <div className={`layout2 ${windowWidth > 1512 && windowWidth <= 1919 ? 'show' : ''}`} />
      <div className={`layout3 ${windowWidth >= 1920 ? 'show' : ''}`} />
      <Navbar/>
      <About/>
      <About1/>
      <Schedule/>
      <Discounts/>
      <Membership/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
