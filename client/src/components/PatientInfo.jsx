import React from 'react';

const PatientInfo = () => {
  
  const patientData = {
    name: 'Pritika Rohera',
    address: 'Dhanakawadi, Pune, India',
    phoneNumber: '8087069750',
    BloodGroup:'B+',
    
    age:'20',
  };

  return (
    <div className="patient-info-block">
      <p>Name: {patientData.name}</p>
      <p>Address: {patientData.address}</p>
      <p>Phone Number: {patientData.phoneNumber}</p>
      
      <p>Date of Birth: {patientData.age}</p>
    </div>
  );
};

export default PatientInfo;
