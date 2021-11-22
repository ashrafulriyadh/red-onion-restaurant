import React from 'react'

import './Home.css';


function Home() {
	return (

<div className="home">
			<section className="search-container">
            <div className="container text-center">
                <div>
                    <h1 className="banner-heading"> Best food waiting for your belly </h1>
                </div>
            </div>
			<div className="container-fluid">
           <div className="mt-4 row justify-content-center">
            <div className="col-10 col-sm-4">
                <div className="input-group">
				<input type="text" className="input-field py-3 rounded-pill"
                id="search-field" placeholder="Search Food Items"/>
				<button  type="submit" id="search-btn" className="btn btn-danger custom-margin px-5 rounded-pill">Search</button>
				</div>
              </div>
           </div>
       </div>
        </section>
			</div>
	)
}

export default Home;