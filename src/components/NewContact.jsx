import React from 'react';
import { Link } from "react-router-dom";

function NewContact() {
  return (
    <div>
			<h1>this is the Contact page </h1>

			<Link to="/servicesDetails:Richard">Contact the CEO</Link>
		</div>
  )
}

export default NewContact;