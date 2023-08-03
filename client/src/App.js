// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './components/Login';
import SignUp from './components/SignUP';
import PatientLogin from './components/PatientLogin';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doclogin from './components/Doclogin';
// import { Carousel } from 'react-responsive-carousel';
// import Desktop23 from './components/Desktop23';
import Receipt from './components/Receipt';
import Patientreceipt from './components/Patientreceipt';
import Footer from './components/Footer';
import{useState} from 'react';
import{useEffect} from 'react';
import './App.css';
import Biometric from './components/Biometric';
// import CmrsContext from './context_apis/CmrsContext';
// import axios from 'axios';
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
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/patient' element={<PatientLogin />} />
            <Route exact path='/doctor' element={<Doclogin />} />
            {/* <Route exact path='/signup' element={<SignUp />} /> */}
            <Route exact path='/receipt' element={<Receipt/>}/>
            <Route exact path='/patientreceipt' element={<Patientreceipt/>}/>
            <Route exact path='/biometric' element={<Biometric/>}/>
          </Routes>

        </div> 
        <Footer/>
    </div>
  );
}

export default App;

