import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput,MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DocOtp() {
  const [otpReceived, setOtpReceived] = useState('');

  const handleVerifyOTP = () => {
    // Here, you would verify the entered OTP with the received OTP from the user's phone
    // For this example, we'll assume the entered OTP matches the one sent
    console.log('OTP Verified! Redirect to next page...');
    // You can add the necessary code to navigate to the next page after OTP verification
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
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
          <Link to="/biometric">
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleVerifyOTP}>Verify OTP</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default DocOtp;
