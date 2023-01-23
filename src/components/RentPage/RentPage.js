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
          <p> Directly access our Airbnb properties here:</p>
          <ul>
          <li><a href="https://www.airbnb.com/rooms/53967185?check_in=2023-03-05&check_out=2023-03-25&guests=1&adults=1&s=67&unique_share_id=ca53811f-6d40-4e87-a7a4-f3a78cbc08a8">Lovely 1-Bedroom Ski Chalet</a></li>
          </ul>
        </ShortTerm>
        <LongTerm>
          <p>Looking for a home to rent? We have short term and long term leasing options available</p>
          <Link to="/rentals"> <RentButton>See Rentals <img src={rightarrow} alt="arrow pointing right"/></RentButton> </Link>
          </LongTerm>
      </RentDisplay>
    </RentContainer>
  )
})

export default RentPage