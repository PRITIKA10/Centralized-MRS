import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Desktop23 from '../components/Desktop23';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-8">Welcome to the Home Page</h1>
      <p className="text-lg mt-4">This is the home page content.</p>
      <Desktop23/>
    </div>
  );
};

export default Home;