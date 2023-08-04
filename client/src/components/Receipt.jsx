import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import './receipt.css'; // Import your CSS file

const Receipt = () => {
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
  const [isEditable, setIsEditable] = useState(true); // Initial state is editable

  // Helper function to update the value in the tableData state
  const updateCellValue = (index, value) => {
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData[index].value = value;
      return updatedTableData;
    });
  };

  // Function to toggle between editable and readable formats
  const toggleEditable = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
  };

  // Function to handle saving the changes (for demonstration purposes, it just logs the data)
  const handleSave = () => {
    console.log('Data saved:', tableData);
    setIsEditable(false); // Make the text boxes read-only after saving
  };

  // Function to handle logout (for demonstration purposes, it just resets the table data and editable state)
  const handleLogout = () => {
    setTableData(initialTableData);
    setIsEditable(true);
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
                  isEditable ? (
                    <input
                      type="file"
                      onChange={(e) => updateCellValue(index, e.target.files[0])}
                    />
                  ) : (
                    <span>{row.value && row.value.name}</span>
                  )
                ) : (
                  <input
                    type="text"
                    value={row.value}
                    onChange={(e) => updateCellValue(index, e.target.value)}
                    placeholder={`Enter ${row.attribute}`}
                    readOnly={!isEditable}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {isEditable ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={toggleEditable}>Edit</button>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Receipt;
