import React from 'react';

const PatientInfo = () => {
  // For demonstration purposes, you can update these values with actual data
  const patientData = {
    name: 'John Doe',
    address: '123 Main Street, City, Country',
    phoneNumber: '99999 99999',
    // height: '180 cm',
    // weight: '70 kg',
    dateOfBirth: '01/01/1990',
  };

  return (
    <div className="patient-info-block">
      <p>Name: {patientData.name}</p>
      <p>Address: {patientData.address}</p>
      <p>Phone Number: {patientData.phoneNumber}</p>
      {/* <p>Height: {patientData.height}</p>
      <p>Weight: {patientData.weight}</p> */}
      <p>Date of Birth: {patientData.dateOfBirth}</p>
    </div>
  );
};

export default PatientInfo;