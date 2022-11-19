import React from 'react'
import { ServiceContainer, ServiceTitle, CardDisplay, Cards, Card, HoverCard, CardContainer, CardImg, CardDetails } from './StyledService'
import houseinside from '../../images/houseinside.jpeg'
import houseinside5 from '../../images/houseinside5.jpeg'
import houseinside3 from '../../images/houseinside3.jpeg'




const ServicePage = () => {


  return (
    <div>

      <ServiceContainer>
        <ServiceTitle>Property Managment</ServiceTitle>
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
                <button>Learn More</button>
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
                  <li>Something Else You Do</li>
                  <li>Bullet Point</li>
                  <li>Something Else You Do</li>
                  <li>Bullet Point</li>
                  <li>Something Else You Do</li>
                </ul>
                <button>Learn More</button>
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
                <button>Learn More</button>
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

    </div>
  )
}

export default ServicePage