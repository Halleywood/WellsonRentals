import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {PropertyContainer, Title, Overlap, Content} from './StyledPropertyMan'
import SideBar from '../PropertyManagement/SideBar'
import DisplayContent from './DisplayContent'
import fakelogo from '../../images/fakelogo.png';
import leftarrow1 from '../../images/left1.png'

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
      <Link to="/"><img src={leftarrow1}/><p>Back</p></Link>


    </PropertyContainer>
   
  )
}

export default PropertyManagement