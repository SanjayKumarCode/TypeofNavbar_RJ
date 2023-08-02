import React from 'react'
import { Link } from 'react-router-dom';
import  { useState } from 'react';
// import './comonent/Navbar.css'; // Create this CSS file for custom styles

// import '../Component/Navbar/Navbar.css'
import '../Navbar/Navbar.css'
import RegistrationForm from '../Pages/RegistrationForm';
const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="navbar-item">
          <Link to="/serch"><input className='serch' type="text" placeholder="Search" /></Link>
        </li>


        <li className="navbar-item">
        <button onClick={handleFormToggle}>Register</button>
      </li>
        {showForm && <RegistrationForm handleClose={handleFormToggle} />}
      </ul>



      
    </nav>
  )
}

export default Navbar