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
    
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h1 className="text-uppercase text-center mb-5">Login on CMRS</h1>
          
          <Link to="/patient">
          <MDBBtn className='mb-4 w-100 gradient-custom-4 pat-button' size='lg'>Patient</MDBBtn>
          </Link>
          
          <h2 className="text-uppercase text-center mb-5">Or</h2>
          <Link to="/doctor">
          <MDBBtn className='mb-4 w-100 gradient-custom-4 doc-button' size='lg'>Doctor</MDBBtn>
          </Link>
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;