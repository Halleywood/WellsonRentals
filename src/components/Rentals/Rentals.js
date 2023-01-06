import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { RentContainer, Title} from './StyledRentalsPage'
import MenuBar from '../Rentals/MenuBar'
import DisplayContentRentals from '../../components/Rentals/DisplayContentRentals'
import leftarrow1 from '../../images/left1.png'


const Rentals = () => {
  
  const [menuOption, setMenuOption] = useState(1)

  const setDisplayOption =(option) =>{
    setMenuOption(option)
  }

  return (
    <RentContainer>
      <Title>Rentals</Title>
      <MenuBar setDisplayOption={setDisplayOption}/>
      <DisplayContentRentals menuOption={menuOption}/>

      <Link to="/"> <img src={leftarrow1}/><p>Back</p> </Link>  

    </RentContainer>
  )
}

export default Rentals