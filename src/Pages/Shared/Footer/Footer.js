import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/ICON/logo.png';
import './Footer.css'

function Footer() {
	return (
		<div className="footer mt-5">
		<div className="container text-start py-3">
			<div className="row">
				<div className="col-md-5">
					<div className="col-md-4">
						<img className='img-fluid mt-4' src={logo2} alt="" />
					</div>
					<div className="col-md-3"></div>
				</div>
				<div className="col-12 col-md-7 text-center mt-4">

					<div className="row">
						<div className="col-md-6">
							<ul>
								<li><Link to="#">About online food</Link></li>
								<li><Link to="#">Read our blog</Link></li>
								<li><Link to="#">Sign uup to deliver</Link></li>
								<li><Link to="#">Add your restaurant</Link></li>
							</ul>
						</div>
						<div className="col-md-6">
							<ul>
								<li><Link to="#">Get help</Link></li>
								<li><Link to="#">Read FAQs</Link></li>
								<li><Link to="#">View all cities</Link></li>
								<li><Link to="#">Restaurant near me</Link></li>
							</ul>
						</div>

					</div>

				</div>
			</div>
			<div className="container copyright py-3">
				<div className="row">
					<div className="col-md-4">
						<small>&copy; 2021 Ashraful islam</small>
					</div>

					<div className="col-md-7 terms">
						<Link to="#">Privacy policy</Link>
						<Link className="mx-3"  to="#">Terms condition</Link>
						<Link className="mx-4" to="#">pricing</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default Footer;
