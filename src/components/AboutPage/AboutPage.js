import {React, forwardRef} from 'react'
import {AboutContainer, Photos, UsDescription} from './StyledAbout'
import aboutphoto8 from '../../images/aboutphoto8.jpg'


const AboutPage = forwardRef((props, ref) => {


  return (
    <AboutContainer ref={ref}>
      {/* <Photos src={aboutphoto8} alt={"photos display here"}/> */}
      <UsDescription>
        <p> We're a a local family with experience renting, remodeling, and owning property in Flagstaff. We bought and remodeled the house we first rented together, and have been managing property around town for several years. We understand the struggle living in this quaint little town and nobody wants to see you succeed more than us! We are here to help your property become passive income and we are here to connect you to successful renters and fullfill their living needs too. </p>
      </UsDescription>
    </AboutContainer>
    )
})

export default AboutPage