import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo2 from '../../images/ICON/logo2.png';
import useAuth from '../../hooks/useAuth';

function Login() {

	const {signInUsingGoogle} = useAuth();

	return (
		<div>
			<div className="wrapper">

		<img className="logo-login" src={logo2} alt="" />
    <div className="card">
        <form action="#" className="d-flex flex-column">
            <div className="h3 text-center mt-2">Login</div>
            <div className="d-flex align-items-center input-field my-3 mb-4 te text-dark"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Enter Email" required className="form-control text-dark"/> </div>
            <div className="d-flex align-items-center input-field mb-4 text-dark"> <span className="fas fa-lock p-2"></span> <input type="password" placeholder="Password" required className="form-control" id="pwd"/> <button className="btn"> <span className="fas fa-eye-slash"></span> </button> </div>
            <div className="d-sm-flex align-items-sm-center justify-content-sm-between ">
                <div className="d-flex align-items-center"> <label className="option"> <span>Remember Me</span> <input type="checkbox"/> <span className="checkmark"></span> </label> </div>
                <div className="mt-sm-0 mt-3"><Link to="#" className="text-dark">Forgot password?</Link></div>
            </div>
            <div className="my-3"> <input type="submit" value="Login" className="btn btn-primary rounded-pill px-5 py-2"/> </div>
            <div className="mb-3 "> <span className="text-dark">Don't have an account?</span> <Link className="text-dark" to="/register">Sign Up</Link> </div>
        </form>
        <div className="position-relative border-bottom my-3 line"> <span className="connect">or connect with</span> </div>
        <div className="text-center py-3 connections"> <Link to="https://wwww.facebook.com" target="_blank" className="px-2"> <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt=""/> </Link> <Link  to="#"className="px-2" onClick={signInUsingGoogle}> <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> </Link> <Link to="https://www.github.com" target="_blank" className="px-2"> <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt=""/> </Link> </div>
    </div>
</div>
		</div>
	)
}

export default Login;
