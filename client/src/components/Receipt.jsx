import React from 'react';
import PatientInfo from './PatientInfo';
import { Link } from 'react-router-dom';
import './receipt.css'; // Import your CSS file
import PatientForm from './PatientForm'; // Import the new PatientForm component

const Receipt = () => {
  return (
    <div>
      <PatientInfo />
      <table className="editable-table editable">
        {/* ... */}
      </table>
      {/* Render the PatientForm component */}
      <PatientForm />
      <div>
        <Link to="/biometric">
          <button className="custom-button" type="submit">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Receipt;
