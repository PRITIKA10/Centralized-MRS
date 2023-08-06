
import React, { useState } from 'react';
import api from '../api/axiosConfig';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
function PatientLogin() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    
    try {
      const response = await axios.post('http://localhost:5000/patient/patient-login', { aadharNumber, phoneNumber });
      if (response.data.message === 'OTP sent successfully') {
        navigate('/otpverification');
      } else {
        console.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
    setShowSuccessMessage(true);
    navigate('/otpverification');
    // try {
    //   // Send a POST request to your backend to initiate OTP sending
    //   const response = await axios.post('/patient/patient-login', { aadharNumber, phoneNumber });
    //   const { token } = response.data;
    //   localStorage.setItem('jwtToken', token);
    //   // Assuming the backend sends a success response
    //   if (response.data.success) {
    //     // Redirect to the OTP verification page
    //     navigate('/otpverification');
    //   } else {
    //     // Handle error case
    //     console.error('Failed to send OTP');
    //   }
    // } catch (error) {
    //   console.error('Error sending OTP:', error);
    // }
  };

  return (
    <>
  
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image ' style={{ backgroundColor: '#EBFBF7' ,minHeight: '100vh'}}>
      {/* ... (rest of the JSX) */}
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
        <h2 className='text-uppercase text-center mb-5'>Patient Login</h2>
        <MDBInput
        wrapperClass='mb-4'
        label='Enter Aadhar Number'
        size='lg'
        id='form1'
        type='text'
        value={aadharNumber}
        onChange={(e) => setAadharNumber(e.target.value)}
      />
      <MDBInput
        wrapperClass='mb-4'
        label='Phone Number'
        size='lg'
        id='form3'
        type='text'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Link to="/otpverification">
      <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSendOTP}>
        Send OTP
      </MDBBtn>
      {showSuccessMessage && <p className="text-success">OTP sent successfully</p>}
      </Link>


        </MDBCardBody>

      </MDBCard>
      
    </MDBContainer>
    </>
  );
}

export default PatientLogin;