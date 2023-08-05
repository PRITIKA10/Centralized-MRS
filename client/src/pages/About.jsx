import React from 'react';
import './about.css'; // Import your custom CSS file for styling

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className='about-us-text'>About Us</h1>
        <p>
        Welcome to CMRS, where we are dedicated to revolutionizing healthcare in India through the establishment of a Centralised Medical Record System. Our mission is to tackle the challenges of fragmented patient data, limited provider coordination, compromised patient safety, and the lack of evidence-based decision making. With a team of passionate professionals, we're committed to breaking down data silos and implementing a cutting-edge system that securely stores and shares patient information. By doing so, we aim to empower healthcare providers with seamless access to comprehensive patient data, fostering collaboration, informed decision making, and ultimately, enhancing the quality of healthcare across the nation. Join us on this journey toward a more integrated and efficient healthcare future.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default About;
