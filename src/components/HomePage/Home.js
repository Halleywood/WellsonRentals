import {React, useRef} from 'react'
import {Link} from 'react-router-dom'
import { HomeContainer, HomeTagLine, HomeFlexBox, HomeButton, ButtonContainer, newButton } from './StyledHome'
import NavBar from '../NavigationBar/NavBar'
import Login from '../Login/Login'
import AboutPage from '../AboutPage/AboutPage'
import ServicePage from '../ServicePage/ServicePage'
import RentPage from '../RentPage/RentPage'
import ContactPage from '../ContactPage/ConatctPage'
import Footer from '../Footer/Footer'
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton'
import rightarrow from '../../images/rightarrow.png'




const Home = () => {
  const serviceRef = useRef(null)
  const aboutRef = useRef(null)
  const rentRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div>
      <HomeContainer>
        <Login />
        <NavBar ref={[serviceRef, rentRef, aboutRef, contactRef]}/>
        <HomeFlexBox>
          <HomeTagLine>Flagstaff Property Management
            <p>Whether You're Searching For a Rental or a Renter, Your Home is Where Our Heart is</p>
          </HomeTagLine>
          <ButtonContainer>
            <Link to="/propertymanagement"> <HomeButton>Management Services <img src={rightarrow} alt="arrow pointing right"/></HomeButton> </Link>
            <Link to="/rentals"><HomeButton>Search Rentals <img src={rightarrow} alt="arrow pointing right"/></HomeButton> </Link>
            
          </ButtonContainer>
        </HomeFlexBox>
      </HomeContainer >
      <ScrollToTopButton />
      <AboutPage ref={aboutRef}/>
      <ServicePage ref={serviceRef}/>
      <RentPage ref={rentRef}/>
      <ContactPage ref={contactRef} />
      <Footer />
    </div>
  )
}

export default Home