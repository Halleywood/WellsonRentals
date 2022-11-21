import {React, forwardRef} from 'react'
import {Link} from 'react-router-dom'
import {RentContainer, RentTitle, RentDisplay, ShortTerm, LongTerm } from './StyledRent'

const RentPage = forwardRef((props, ref) => {
  return (
    <RentContainer ref={ref}>
      <RentTitle>Looking for a Rental? </RentTitle>
      <RentDisplay>
        <ShortTerm>
          <p> We have a variety of places available directly on Air B&B which you can access directly here:</p>
          <ul>
          <li><a href="/#">Two Bedroom Downtown</a></li>
          <li><a href="/#">Country Club Condom</a></li>
          <li><a href="/#">Another Link</a></li>
          </ul>
        </ShortTerm>
        <LongTerm>
          <p>We offer properties with month-to-month leases and long term leases</p>
          <Link to="/rentals"> <button>See Rentals</button> </Link>
          </LongTerm>
      </RentDisplay>
    </RentContainer>
  )
})

export default RentPage