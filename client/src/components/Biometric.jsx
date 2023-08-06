import React from 'react';
import "./Doclogin.css"
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


function Doclogin() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: '#EBFBF7' ,minHeight: '100vh'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Patient Verification</h2>
          
          <MDBInput wrapperClass='mb-4' label='Patient Aadhar Number' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Patient Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Patient Phone Number' size='lg' id='form1' type='text'/>
          
          <Link to="/patientotp">
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Send Otp</MDBBtn>
          </Link>
           
         
          
        
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Doclogin;
