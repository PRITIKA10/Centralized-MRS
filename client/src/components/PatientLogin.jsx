import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function PatientLogin() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpReceived, setOtpReceived] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendOTP = () => {
    // Simulate sending OTP to the provided phone number
    // In a real application, you would use an actual OTP service for this
    const otp = generateOTP();
    console.log(`OTP Sent: ${otp}`); // Displaying the OTP for demonstration purposes
    setOtpSent(true);
  };

  const generateOTP = () => {
    // Generate a random 4-digit OTP
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleVerifyOTP = () => {
    // Here, you would verify the entered OTP with the received OTP from the user's phone
    // For this example, we'll assume the entered OTP matches the one sent
    if (otpReceived === generateOTP()) {
      setOtpVerified(true);
    } else {
      setOtpVerified(false);
      console.log('Incorrect OTP');
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
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

          {!otpSent && (
            <MDBBtn
              className='mb-4 w-100 gradient-custom-4'
              size='lg'
              onClick={handleSendOTP}
            >
              Send OTP
            </MDBBtn>
          )}

          {otpSent && !otpVerified && (
            <React.Fragment>
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
              <MDBBtn
                className='mb-4 w-100 gradient-custom-4'
                size='lg'
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </MDBBtn>
            </React.Fragment>
          )}

          {otpVerified && <p>OTP Verified! Redirect to next page...</p>}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default PatientLogin;