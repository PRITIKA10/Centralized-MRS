import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Desktop23 from '../components/Desktop23';
import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mt-8">Welcome to the Home Page</h1>
      <p className="text-lg mt-4">This is the home page content.</p> */}
      {/* <Slider/> */}
      {/* <Desktop23/> */}
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;