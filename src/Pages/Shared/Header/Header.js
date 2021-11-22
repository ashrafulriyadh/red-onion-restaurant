import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/ICON/logo2.png';
import useAuth from '../../../hooks/useAuth';

function Header() {


	return (
		<div>
			{/* navbar start */}
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
 <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><img className="img-fluid my-3 logo" src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav fs-5">
	  <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </li>
             <li className="nav-item">
          <Link className="nav-link mx-3 active fw-normal " aria-current="page" to="/login">Login</Link>
        </li>
		<li className="nav-item">
          <Link className="nav-link btn btn-danger text-white mx-3 px-4 rounded-pill" aria-current="page" to="/register">Sign Up</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

		</div>
	)
}

export default Header;
