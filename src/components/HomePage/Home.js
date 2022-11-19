import React from 'react'
import { HomeContainer, HomeTagLine, HomeFlexBox, HomeFlexBox2, HomeImg, HomeButton, ButtonContainer} from './StyledHome'
import NavBar from '../NavigationBar/NavBar'
import Login from '../Login/Login'
import househome from '../../images/househome.png'



const Home = () => {


  return (
    <HomeContainer>
      <Login/>
      <NavBar/>
      <HomeFlexBox>
          <HomeTagLine>Property Managment in Flagstaff, Arizona and surrounding areas
            <p>something else here maybe listing all exact areas like Belmont, Holbrook, Winslow, random towns, Just putting text here</p>
          </HomeTagLine>
          <ButtonContainer>
          <HomeButton>Property Management</HomeButton>
          <HomeButton>Find a Rental</HomeButton>
          </ButtonContainer>
      </HomeFlexBox>    
    </HomeContainer >
  )
}

export default Home