import React from 'react';

import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      
      <Slider/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;