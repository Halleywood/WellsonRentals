import {React, useRef} from 'react'
import {Link} from 'react-router-dom'
import { HomeContainer, HomeTagLine, HomeFlexBox, HomeButton, ButtonContainer } from './StyledHome'
import NavBar from '../NavigationBar/NavBar'
import Login from '../Login/Login'
import AboutPage from '../AboutPage/AboutPage'
import ServicePage from '../ServicePage/ServicePage'
import RentPage from '../RentPage/RentPage'
import ContactPage from '../ContactPage/ConatctPage'
import Footer from '../Footer/Footer'
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton'




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
          <HomeTagLine>Property Managment in Flagstaff, Arizona and surrounding areas
            <p>something else here maybe listing all exact areas like Belmont, Holbrook, Winslow, random towns, Just putting text here</p>
          </HomeTagLine>
          <ButtonContainer>
            <Link to="/propertymanagement"> <HomeButton>Property Management</HomeButton> </Link>
            <Link to="/rentals"><HomeButton>Find a Rental</HomeButton> </Link>
            
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