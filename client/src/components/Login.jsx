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
import './buttons.css';

function Login() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: '#EBFBF7' ,minHeight: '100vh'}}>
    {/* ... (rest of the JSX) */}
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h1 className="text-uppercase text-center mb-5">Login on CMRS</h1>
          {/* <MDBInput wrapperClass='mb-4' label='Enter Aadhar Number' size='lg' id='form1' type='number'/> */}
          {/* <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/> */}
          {/* <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/> */}
          {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/> */}
          {/* <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div> */}
          <Link to="/patient">
          <MDBBtn className='mb-4 w-100 gradient-custom-4 pat-button' size='lg'>Patient</MDBBtn>
          </Link>
          {/* <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Patient</MDBBtn> */}
          <h2 className="text-uppercase text-center mb-5">Or</h2>
          <Link to="/doctor">
          <MDBBtn className='mb-4 w-100 gradient-custom-4 doc-button' size='lg'>Doctor</MDBBtn>
          </Link>
          {/* <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Doctor</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;