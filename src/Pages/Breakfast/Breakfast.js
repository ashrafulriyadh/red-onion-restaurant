import React, { useEffect, useState } from 'react'

function Breakfast() {


	const [foods, setFoods] = useState();

	useEffect(() => {
		fetch("/breakfast.json")
		.then(res => res.json())
		.then(data => setFoods(data))
	}, [])

	return (
		<div>
			<div className="container my-4">
			<div className="row row-cols-1 row-cols-md-3 g-4">

			{
				 foods?.map(food => <div className="col">
					 <div className="card h-100">
 <div className="d-flex justify-content-center">
 <img src={food.img} className="card-img-top w-75" alt="..."/>
 </div>
  <div className="card-body text-center">
    <h5 className="card-title">{food.name}</h5>
    <small className="card-text">{food.details.slice(0, 40)}</small>
	<h4 className="my-3"> {food.price}</h4>
  </div>
</div>
				 </div> )
			}

			</div>
			</div>
		</div>
	)
}

export default Breakfast;
