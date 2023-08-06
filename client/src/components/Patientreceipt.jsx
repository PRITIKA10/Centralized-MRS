import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import { Link } from 'react-router-dom';
import './receipt.css'; 

const Patientreceipt = () => {
  const initialTableData = [
    { attribute: 'Blood Group', value: 'A+' },
    { attribute: 'Height', value: '160' },
    { attribute: 'Weight', value: '50' },
    { attribute: 'Allergies', value: 'Dust' },
    { attribute: 'Symptoms', value: 'Cough and Cold' },
    
    { attribute: 'Surgery Details', value: 'NA' },
    { attribute: 'Prescription', value: 'Paracetamol' },
    
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [isEditable, setIsEditable] = useState(false); 

 

const appendCellValue = (value) => {
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData.push({ value }); 
      return updatedTableData;
    });
  };



  // Function to handle logout (for demonstration purposes, it just resets the table data and editable state)
  const handleLogout = () => {
    setTableData(initialTableData);
    setIsEditable(false);
  };

  return (
    <div>
      <PatientInfo />
      <table className={`editable-table ${isEditable ? 'editable' : 'readable'}`}>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.attribute}</td>
              <td>
                {row.attribute === 'Diagnosis Report' ? (
                  <span>{row.value && row.value.name}</span>
                ) : (
                  <span>{row.value}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <Link to="/patient">
        <button className="custom-button" type="submit">Logout</button>
        </Link>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </div>
  );
};

export default Patientreceipt;
