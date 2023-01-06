import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {PropertyContainer, Title, Overlap, Content} from './StyledPropertyMan'
import SideBar from '../PropertyManagement/SideBar'
import DisplayContent from './DisplayContent'
import fakelogo from '../../images/fakelogo.png';

const PropertyManagement = () => {

  const [menuOption, setMenuOption] = useState(1)

  const setDisplayOption =(option) =>{
    setMenuOption(option)
  }

  return (
    <PropertyContainer>
      <Title>Property Management Services</Title>
      <SideBar setDisplayOption={setDisplayOption}/>
      <DisplayContent menuOption = {menuOption}/>
      <Link to="/">Return</Link>


    </PropertyContainer>
   
  )
}

export default PropertyManagement