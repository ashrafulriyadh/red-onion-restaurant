import React from 'react'
import { Link } from 'react-router-dom';
import './FoodNav.css';

function FoodNav() {

	return (
		<div>
			            {/* navbar start */}


						<div className="navbar2">
        <nav className="navbar navbar-expand navbar-light bg-transparent">
  <div className="container-fluid">
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav2">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link nav-style" aria-current="page" to="/breakfast">Breakfast</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-style" to="/lunch">Lunch</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-style" to="/dinner">Dinner</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
		</div>
	)
}

export default FoodNav;
