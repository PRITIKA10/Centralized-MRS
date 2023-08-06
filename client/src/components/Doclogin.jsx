
import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
function Doclogin() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  
  const navigate = useNavigate();

  const handleSendOTP = async() => {
    try {
      const response = await axios.post('http://localhost:5000/doctor/doctor-login', { aadharNumber, phoneNumber });
      if (response.data.message === 'OTP sent successfully') {
        navigate('/otpverification');
      } else {
        console.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
    
    navigate('/otpverification');
  };

  return (
    <>
  
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: '#EBFBF7' ,minHeight: '100vh'}}>
      
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
        <h2 className='text-uppercase text-center mb-5'>Doctor Login</h2>
        <MDBInput
        wrapperClass='mb-4'
        label='Enter Registration ID'
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
      <Link to="/docotp">
      <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSendOTP}>
        Send OTP
      </MDBBtn>
      </Link>


        </MDBCardBody>

      </MDBCard>
      
    </MDBContainer>
    </>
  );
}

export default Doclogin;