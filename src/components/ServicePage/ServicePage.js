import {React, forwardRef} from 'react'
import {Link} from 'react-router-dom'
import { ServiceContainer, ServiceTitle, CardDisplay, Cards, Card, HoverCard, CardContainer, CardImg, CardDetails } from './StyledService'
import houseinside from '../../images/houseinside.jpeg'
import houseinside5 from '../../images/houseinside5.jpeg'
import houseinside3 from '../../images/houseinside3.jpeg'


const ServicePage = forwardRef((props, ref)=> {

// const newFunction = () =>{
//   console.log(ref.current.offsetTop)
//   window.scrollTo(ref.current.offsetTop)
// }

//   useEffect(()=>{
//     window.addEventListener("scroll", newFunction)
//   })
  return (
      <ServiceContainer ref={ref}>
        <ServiceTitle>Management Services</ServiceTitle>
        <CardDisplay>
          <Cards>
            <Card>
              <HoverCard>
                <h2>Long Term Rentals</h2>
                <ul>
                  <li>Vetting Renters</li>
                  <li>Advertising</li>
                  <li>Lease Signing</li>
                  <li>Deposit Collection</li>
                  <li>Checkout, Cleaning</li>
                  <li>A longer bullet point for ch length</li>
                </ul>
                <Link to="/propertymanagement"> <button>Learn More</button> </Link>
               
              </HoverCard>
              <CardContainer>
                <CardImg src={houseinside} />
              </CardContainer>
              <CardDetails>
                <h3> Long Term Rentals</h3>
              </CardDetails>
            </Card>
            <Card>
              <HoverCard>
                <h2>Short Term Rentals</h2>
                <ul>
                  <li>Bullet Point</li>
                  <li>Something Else You Doffwefwefefefewfewfwfwefe</li>
                  <li>Bullet Point</li>
                  <li>Something Else You Do</li>
                  <li>Bullet Point</li>
                  <li>Something Else You Do</li>
                </ul>
                <Link to="/propertymanagement"> <button>Learn More</button> </Link>
              </HoverCard>
              <CardContainer>
                <CardImg src={houseinside5} />
              </CardContainer>
              <CardDetails>
                <h3> Short Term Rentals</h3>
              </CardDetails>
            </Card>
            <Card>
              <HoverCard>
                <h2>a La Carte Services</h2>
                <ul>
                  <li>Bullet Point</li>
                  <li> Bullet Point that is mch longer for ch length</li>
                  <li>More Bullet Points</li>
                  <li>Something Else You Do</li>
                  <li>Bullet Point</li>
                  <li>Something Else You Do</li>
                </ul>
                <Link to="/propertymanagement"> <button>Learn More</button> </Link>
              </HoverCard>
              <CardContainer>
                <CardImg src={houseinside3} />
              </CardContainer>
              <CardDetails>
                <h3> A La Carte </h3>

              </CardDetails>
            </Card>
          </Cards>

        </CardDisplay>
      </ServiceContainer>
  )
})

export default ServicePage