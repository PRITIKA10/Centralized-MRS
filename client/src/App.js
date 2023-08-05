// import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';

import PatientLogin from './components/PatientLogin';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doclogin from './components/Doclogin';
import { Carousel } from 'react-responsive-carousel';
import Desktop23 from './components/Desktop23';
import Receipt from './components/Receipt';
import Footer from './components/Footer';
import Biometric from './components/Biometric';
import DocOtp from './components/DocOtp';
import OtpVerification from './components/OtpVerification';
import Patientreceipt from './components/Patientreceipt';


function App() {
  const [entry, setEntry] = useState([]);
  const [entries, setEntries] = useState("");


  useEffect(() => {
    fetchEntry();
  }, []);


  const fetchEntry = async()=>{
    
    const response = await fetch("http://localhost:3000/receipt");
    const data = await response.json();
    setEntry(data);
  }

  const createEntry = async(e)=> {
    const a = {
      entry: entries
    }
    e.preventDefault();
    const response = await fetch("http://localhost:3000/receipt",{ // patients -> patient
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: a,
    });
    setEntries("");
    fetchEntry();
  };
  
  console.log("Hii", entry);

  return (
    <div className="App">
      {/* <form action ="" onSubmit={createEntry}>
        <input type='text' onChange={(e)=> setEntries(e.target.value)} value={entries}></input>
      </form> */}
        <Navbar/>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/patient' element={<PatientLogin />} />
            <Route exact path='/doctor' element={<Doclogin />} />
            
            <Route exact path='/receipt' element={<Receipt/>}/>
            <Route exact path='/biometric' element={<Biometric/>}/>
            <Route exact path='/otpverification' element={<OtpVerification/>}/>
            <Route exact path='/docotp' element={<DocOtp/>}/>
            <Route exact path='/patientreceipt' element={<Patientreceipt/>}/>



          </Routes>
          
           
         

        </div> 
        {/* <Footer/> */}
        
      
    </div>
  );
}

export default App;

