import React from 'react'
import { SideBarContainer, SideButton } from '../PropertyManagement/StyledSideBar'

const MenuBar = ({setDisplayOption}) => {
  return (
    <SideBarContainer>
    <SideButton onClick={()=>setDisplayOption("1")}>Available Properties</SideButton>
    <SideButton onClick={()=>setDisplayOption("2")}>Rental Application</SideButton>
    <SideButton onClick={()=>setDisplayOption("3")}>Renter Resources</SideButton>
    <SideButton onClick={()=>setDisplayOption("4")}>Short Term Rentals</SideButton>
    </SideBarContainer>
  )
}

export default MenuBar