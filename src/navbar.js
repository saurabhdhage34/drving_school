import React from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <>

<nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg">

  <div className="container">

  {/* Logo */}
  <Link className="navbar-brand fw-bold text-warning" to="/">
  🚗 DriveMaster
  </Link>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    
    <ul className="navbar-nav ms-auto">

      <li className="nav-item">
        <Link className="nav-link text-light fw-semibold" to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-light fw-semibold" to="/About">About</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-light fw-semibold" to="/contact">Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-light fw-semibold" to="/Gallary">Gallery</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-light fw-semibold" to="/Services">Services</Link>
      </li>

      <Link to="/admission">
          <button className="btn-lg btn-sm btn-success">Admission</button>
      </Link>

      <Link to="/admission-list">
  <button className="btn-lg btn-sm btn-warning">Admission List</button>
</Link>

      
    </ul>
    
     
  </div>

  </div>

</nav>



        </>
    )
}

export default Nav;