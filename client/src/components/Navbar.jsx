import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#39B49A' }}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CMRS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <Link to="/login">
        <button className="custom-button" type="submit">Login</button>
        </Link>
        <Link to="/signup">
        <button className="custom-button" type="submit">Sign Up</button>
        </Link>
        
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}
