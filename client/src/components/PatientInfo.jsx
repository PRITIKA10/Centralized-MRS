import React from 'react';

const PatientInfo = () => {
  // For demonstration purposes, you can update these values with actual data
  const patientData = {
    name: 'Pritika Rohera',
    address: 'Dhanakawadi, Pune, India',
    phoneNumber: '8087069750',
    BloodGroup:'B+',
    // height: '180 cm',
    // weight: '70 kg',
    age:'20',
  };

  return (
    <div className="patient-info-block">
      <p>Name: {patientData.name}</p>
      <p>Address: {patientData.address}</p>
      <p>Phone Number: {patientData.phoneNumber}</p>
      {/* <p>Height: {patientData.height}</p>
      <p>Weight: {patientData.weight}</p> */}
      <p>Date of Birth: {patientData.age}</p>
    </div>
  );
};

export default PatientInfo;
