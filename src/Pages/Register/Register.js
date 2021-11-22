import React from 'react'
import { Link } from 'react-router-dom';
import logo2 from '../../images/ICON/logo2.png';

function Register() {
	return (
		<div>
			<div className="wrapper">

		<img className="logo-login" src={logo2} alt="" />
    <div className="card">
        <form action="#" className="d-flex flex-column">
            <div className="h3 text-center mt-2">Register</div>
			<div className="d-flex align-items-center input-field my-2 te text-dark"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Enter Username" required className="form-control text-dark"/> </div>
            <div className="d-flex align-items-center input-field my-3 mb-4 te text-dark"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Enter Email" required className="form-control text-dark"/> </div>
            <div className="d-flex align-items-center input-field mb-4 text-dark"> <span className="fas fa-lock p-2"></span> <input type="password" placeholder="Password" required className="form-control" id="pwd"/> <button className="btn"> <span className="fas fa-eye-slash"></span> </button> </div>
            <div className="d-sm-flex align-items-sm-center justify-content-sm-between ">

            </div>
            <div className="my-3"> <input type="submit" value="Sign Up" className="btn btn-primary rounded-pill px-5 py-2"/> </div>
            <div className="mb-3 "> <span className="text-dark">Already have an account?</span> <Link className="text-dark" to="/login">Login here</Link> </div>
        </form>
    </div>
</div>
		</div>
	)
}

export default Register;
