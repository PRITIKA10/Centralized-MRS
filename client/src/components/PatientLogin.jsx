// import "./PatientLogin.css";
// const PatientLogin = () => {
//   return (
//     <div className="patient-login">
//       <div className="patient-login-child" />
//       <div className="password">password</div>
//       <div className="patient-login-item" />
//       <div className="enter-otp">Enter OTP</div>
//       <div className="patient-login-inner" />
//       <div className="rectangle-div" />
//       <div className="enter-your-aadhar"> Enter Your Aadhar Number</div>
//       <div className="enter-password"> Enter Password</div>
//       <div className="patient-login1">Patient Login</div>
//     </div>
//   );
// };

// export default PatientLogin;
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function PatientLogin() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Patient Login</h2>
          <MDBInput wrapperClass='mb-4' label='Enter Aadhar Number' size='lg' id='form1' type='number'/>
          {/* <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/> */}
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/> */}
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
         
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default PatientLogin;
