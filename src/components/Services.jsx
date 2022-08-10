import React from 'react'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div>
        <h1>Services</h1>
        <p>This is the services page</p>
        <p>Welcome to my services details 
         pls you can input the number of the section 
         you want to go try typing either 1, 2, 3 at 
         the end of the url it will take you to that page thank 
         you for checking out my page react is awesome. 
        <Link to = "/servicesDetails:id">ServicesDetails</Link>
        </p>
    </div>
  )
}

export default Services;