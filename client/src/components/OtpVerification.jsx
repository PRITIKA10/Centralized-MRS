import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OtpVerification() {
  const [otpReceived, setOtpReceived] = useState('');

  const handleVerifyOTP =async () => {
    try {
        const response = await axios.post('/patient/patient-login/verify-otp', { otp: otpReceived });
        if (response.data.message === 'OTP verification successful') {
          console.log('OTP Verified! Redirect to next page...');
          
        } else {
          console.error('Invalid OTP');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
    }
    
    console.log('OTP Verified! Redirect to next page...');
    
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: '#EBFBF7' ,minHeight: '100vh'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className='text-uppercase text-center mb-5'>OTP Verification</h2>
          <MDBInput
            wrapperClass='mb-4'
            label='Enter OTP'
            size='lg'
            id='form2'
            type='text'
            maxLength={4}
            value={otpReceived}
            onChange={(e) => setOtpReceived(e.target.value)}
          />
          <Link to="/patientreceipt">
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleVerifyOTP}>Verify OTP</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default OtpVerification;