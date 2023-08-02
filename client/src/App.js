import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PatientLogin from './components/PatientLogin';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doclogin from './components/Doclogin';
import { Carousel } from 'react-responsive-carousel';
import Desktop23 from './components/Desktop23';
import Receipt from './components/Receipt';
import Footer from './components/Footer';


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
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/receipt' element={<Receipt/>}/>



          </Routes>
          
           
         

        </div> 
        <Footer/>
        
      
    </div>
  );
}

export default App;
