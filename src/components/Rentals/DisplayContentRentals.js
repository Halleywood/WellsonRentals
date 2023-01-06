import React from 'react'
import { ContentContainer } from '../Rentals/DisplayContent/StyledDisplayContent'
import Option1 from '../Rentals/DisplayContent/Option1'
import Option2 from '../Rentals/DisplayContent/Option2'
import Option3 from '../Rentals/DisplayContent/Option3'
import OptionFOUR from './DisplayContent/OptionFOUR'

const DisplayContentRentals = ({menuOption}) => {
 
    if(menuOption == "1"){
        return <ContentContainer><Option1/></ContentContainer>
      }
      else if(menuOption == "2"){
        return <ContentContainer><Option2/></ContentContainer>
      }
      else if(menuOption == "3"){
        return <ContentContainer><Option3/></ContentContainer>
      }
      else{
        return <ContentContainer><OptionFOUR/></ContentContainer>
      }
  
}

export default DisplayContentRentals