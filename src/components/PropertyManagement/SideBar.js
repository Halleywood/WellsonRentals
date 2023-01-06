import React from 'react'
import {SideButton, SideBarContainer} from '../PropertyManagement/StyledSideBar'

const SideBar = ({setDisplayOption}) => {
  return (
    <SideBarContainer>
    <SideButton onClick={()=>setDisplayOption("1")}>What We Do</SideButton>
    <SideButton onClick={()=>setDisplayOption("2")}>Pricing</SideButton>
    <SideButton onClick={()=>setDisplayOption("3")}>Get a Quote</SideButton>
    <SideButton onClick={()=>setDisplayOption("4")}>Menu Option</SideButton>
    </SideBarContainer>
  )
}

export default SideBar