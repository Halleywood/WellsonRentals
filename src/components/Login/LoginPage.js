import React from 'react'
import {Link} from 'react-router-dom'
import {LoginContainer, FormContainer, FormFlex1, FormFlex2, FormImage, FormText, Form, FormButton} from './StyledLoginPage'
import house3 from '../../images/house3.png'
import leftarrow1 from '../../images/left1.png'

const LoginPage = () => {
  return (
   <LoginContainer>
      <FormContainer>
        <FormFlex1>
        <FormImage src={house3} alt="image of a house"></FormImage>
        <FormText>Come on in!</FormText>
        </FormFlex1>
        <FormFlex2>
          <Form>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <FormButton type="submit">Enter</FormButton>
          </Form>
          <p>Forgot Password? </p>
        </FormFlex2>
     
      </FormContainer>
      <Link to="/"><img className="arrow" src={leftarrow1} alt="arrow pointing left"/><p>Back</p></Link>
   </LoginContainer>
  )
}

export default LoginPage