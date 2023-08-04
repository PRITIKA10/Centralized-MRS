import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';
// import SignUP from './components/SignUP';
import PatientLogin from './components/PatientLogin';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doclogin from './components/Doclogin';
import { Carousel } from 'react-responsive-carousel';
import Desktop23 from './components/Desktop23';
import Receipt from './components/Receipt';
import Footer from './components/Footer';
import Biometric from './components/Biometric';
import OtpVerification from './components/OtpVerfication';
import DocOtp from './components/DocOtp';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      {/* <Navbar/> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <PatientLogin/> */}
      
        <Navbar/>
       
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/patient' element={<PatientLogin />} />
            <Route exact path='/doctor' element={<Doclogin />} />
            {/* <Route exact path='/signup' element={<SignUP />} /> */}
            <Route exact path='/receipt' element={<Receipt/>}/>
            <Route exact path='/biometric' element={<Biometric/>}/>
            <Route exact path='/otpverification' element={<OtpVerification/>}/>
            <Route exact path='/docotp' element={<DocOtp/>}/>



          </Routes>
          
           
         

        </div> 
        {/* <Footer/> */}
        
      
    </div>
  );
}

export default App;
