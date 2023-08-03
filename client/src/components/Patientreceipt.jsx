import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import './receipt.css'; // Import your CSS file

const Patientreceipt = () => {
  const initialTableData = [
    { attribute: 'Blood Group', value: '' },
    { attribute: 'Height', value: '' },
    { attribute: 'Weight', value: '' },
    { attribute: 'Allergies', value: '' },
    { attribute: 'Symptoms', value: '' },
    { attribute: 'Diagnosis Report', value: null }, // Initialize value as null for file input
    { attribute: 'Surgery Details', value: '' },
    { attribute: 'Prescription', value: '' },
    // Add more data as needed
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [isEditable, setIsEditable] = useState(false); // Always set to false for readable format

  // Helper function to update the value in the tableData state
  const updateCellValue = (index, value) => {
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData[index].value = value;
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
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Patientreceipt;
