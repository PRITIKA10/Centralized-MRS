import React, { useState } from "react";
import axios from "axios";

const PatientForm = () => {
  const initialFormData = {
    created_at: "",
    prescription: "",
    symptoms: "",
    diagnosis_report: null,
    height: "",
    weight: "",
    blood_group: "",
    past_hospitalization: "",
    allergies: "",
    surgery_details: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditable, setIsEditable] = useState(true); // Initial state is editable

  // Helper function to update the value in the formData state
  const updateFormField = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value
    }));
  };

  // Function to toggle between editable and readable formats
  const toggleEditable = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
  };

  // Function to handle saving the changes (for demonstration purposes, it just logs the data)
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/receipt", formData);
      alert("Data saved successfully!");
      setIsEditable(false); // Make the text boxes read-only after saving
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data!");
    }
  };

  return (
    <form onSubmit={handleSave}>
      <label>
        Created at:
        <input
          type="text"
          value={formData.created_at}
          onChange={(e) => updateFormField("created_at", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Blood Group:
        <input
          type="text"
          value={formData.blood_group}
          onChange={(e) => updateFormField("blood_group", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={formData.height}
          onChange={(e) => updateFormField("height", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          value={formData.weight}
          onChange={(e) => updateFormField("weight", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Allergies:
        <input
          type="text"
          value={formData.allergies}
          onChange={(e) => updateFormField("allergies", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Symptoms:
        <input
          type="text"
          value={formData.symptoms}
          onChange={(e) => updateFormField("symptoms", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Diagnosis Report:
        {isEditable ? (
          <input
            type="file"
            onChange={(e) => updateFormField("diagnosis_report", e.target.files[0])}
          />
        ) : (
          <span>{formData.diagnosis_report && formData.diagnosis_report.name}</span>
        )}
      </label>
      <label>
        Surgery Details:
        <input
          type="text"
          value={formData.surgery_details}
          onChange={(e) => updateFormField("surgery_details", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Prescription:
        <input
          type="text"
          value={formData.prescription}
          onChange={(e) => updateFormField("prescription", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <label>
        Past Hospitalization:
        <input
          type="text"
          value={formData.past_hospitalization}
          onChange={(e) => updateFormField("past_hospitalization", e.target.value)}
          readOnly={!isEditable}
        />
      </label>
      <div>
        {isEditable ? (
          <button type="submit">Save</button>
        ) : (
          <button onClick={toggleEditable}>Edit</button>
        )}
      </div>
    </form>
  );
};

export default PatientForm;
