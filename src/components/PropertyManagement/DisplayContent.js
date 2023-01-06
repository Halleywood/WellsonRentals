import React from 'react'
import Option1 from './DisplayContent/Option1'
import Option2 from './DisplayContent/Option2'
import Option3 from './DisplayContent/Option3'
import Option4 from './DisplayContent/Option4'
import {ContentContainer} from '../PropertyManagement/StyledDisplayContent'

const DisplayContent = ({menuOption}) => {

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
    <ContentContainer><Option4/></ContentContainer>
  }
}

export default DisplayContent