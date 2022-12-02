import React from 'react'
import {Link} from 'react-router-dom'
import {PropertyContainer} from './StyledPropertyMan'

const PropertyManagement = () => {
  return (
    <PropertyContainer>
      <h1>Our Full Property Managment Page is currently under construction!</h1>
      <h6>Please send us an email at <a href="mailto:"> WellsonRentals@gmail.com</a> or call us at <a href="tel:+19283803536">(928) 380-3536</a> to set up something right now</h6>
      <Link to="/">Return</Link>


    </PropertyContainer>
   
  )
}

export default PropertyManagement