import React from 'react'
import {Link} from 'react-router-dom'
import { RentContainer } from './StyledRentalsPage'

const Rentals = () => {
  return (
    <RentContainer>
      <h1>This Page Is Currently Under Construction!</h1>
      <h6>Please send us an email at <a href="mailto:"> WellsonRentals@gmail.com</a> or call us at <a href="tel:+19283803536">(928) 380-3536</a> to talk about rental options!</h6>

<Link to="/"> Go Back </Link>  
</RentContainer>
  )
}

export default Rentals