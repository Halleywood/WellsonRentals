import {React, forwardRef} from 'react'
import {Link} from 'react-router-dom'
import {RentContainer, RentTitle, RentDisplay, ShortTerm, LongTerm, RentButton } from './StyledRent'
import rightarrow from '../../images/rightarrow.png'


const RentPage = forwardRef((props, ref) => {
  return (
    <RentContainer ref={ref}>
      <RentTitle>Rentals </RentTitle>
      <RentDisplay>
        <ShortTerm>
          <p> We have a variety of places available directly on Air B&B which you can access directly here:</p>
          <ul>
          <li><a href="/#">Air B & B Link/Title Here</a></li>
          <li><a href="/#">Air B & B Link/Title Here</a></li>
          <li><a href="/#">Air B & B Link/Title Here</a></li>
          </ul>
        </ShortTerm>
        <LongTerm>
          <p>We offer properties with month-to-month leases and long term leases</p>
          <Link to="/rentals"> <RentButton>See Rentals <img src={rightarrow} alt="arrow pointing right"/></RentButton> </Link>
          </LongTerm>
      </RentDisplay>
    </RentContainer>
  )
})

export default RentPage