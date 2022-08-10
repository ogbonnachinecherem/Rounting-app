import React from 'react'
import { useParams } from "react-router-dom";

function ServicesDetails() {
    const { id } = useParams();
	return (
		<div>
			<h1>Service details of {id} </h1>
			<p>lorem ipsum dolor sit amet, consectetur adip lorem lorem</p>
		</div>
	);
}

export default ServicesDetails;