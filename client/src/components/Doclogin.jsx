// import React from 'react';
// import "./Doclogin.css"
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';


// function Doclogin() {
//   return (
//     <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
//       <div className='mask gradient-custom-3'></div>
//       <MDBCard className='m-5' style={{maxWidth: '600px'}}>
//         <MDBCardBody className='px-5'>
//           <h2 className="text-uppercase text-center mb-5">Doctor Login</h2>
//           <MDBDropdown>
//             <MDBDropdownToggle size="lg" className='test'>Dropdown button</MDBDropdownToggle>
//              <MDBDropdownMenu>
//                 <MDBDropdownItem link>Action</MDBDropdownItem>
//                 <MDBDropdownItem link>Another action</MDBDropdownItem>
//                 <MDBDropdownItem link>Something else here</MDBDropdownItem>
//             </MDBDropdownMenu>
//           </MDBDropdown>
//           <MDBInput wrapperClass='mb-4' label='Registration Id' size='lg' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form1' type='number'/>
//           {/* <MDBInput wrapperClass='mb-4' label='Patient Name' size='lg' id='form1' type='text'/> */}
//           {/* <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/> */}
//           {/* <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/> */}
//           {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/> */}
//           {/* <div className='d-flex flex-row justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
//           </div> */}
//           <Link to="/biometric">
//           <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
//           </Link>
// {/*           
//           <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn> */}
          
        
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// }

// export default Doclogin;
import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
function Doclogin() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Get the history object from React Router
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // Perform any necessary validation before sending OTP
    // For demonstration purposes, we directly redirect to the OTP verification page
    navigate('/otpverification');
  };

  return (
    <>
  
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      {/* ... (rest of the JSX) */}
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
        <h2 className='text-uppercase text-center mb-5'>Doctor Login</h2>
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
      <Link to="/docotp">
      <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSendOTP}>
        Send OTP
      </MDBBtn>
      </Link>


        </MDBCardBody>

      </MDBCard>
      {/* <MDBInput
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
      </Link> */}
      {/* <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSendOTP}>
        Send OTP
      </MDBBtn> */}
    </MDBContainer>
    </>
  );
}

export default Doclogin;
