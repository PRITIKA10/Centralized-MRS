import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import './receipt.css'; 
import { Link } from 'react-router-dom';

const Receipt = () => {
  const initialTableData = [
    { attribute: 'Blood Group', value: '' },
    { attribute: 'Height', value: '' },
    { attribute: 'Weight', value: '' },
    { attribute: 'Allergies', value: '' },
    { attribute: 'Symptoms', value: '' },
   
    { attribute: 'Surgery Details', value: '' },
    { attribute: 'Prescription', value: '' },
    
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [isEditable, setIsEditable] = useState(true); 

 
  const updateCellValue = (index, value) => {
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData[index].value = value;
      return updatedTableData;
    });
  };

  
  const toggleEditable = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
  };

 
  const handleSave = () => {
    console.log('Data saved:', tableData);
    setIsEditable(false); 
  };

  
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
        <Link to='/biometric'>
        <button onClick={handleLogout}>Logout</button>
        </Link>
        
      </div>
    </div>
    
  );
};

export default Receipt;
