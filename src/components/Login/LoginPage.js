import React from 'react'
import {Link} from 'react-router-dom'
import {LoginContainer, FormContainer, FormFlex1, FormFlex2, FormImage, FormText, Form, FormButton} from './StyledLoginPage'
import house3 from '../../images/house3.png'

const LoginPage = () => {
  return (
   <LoginContainer>
      <FormContainer>
        <FormFlex1>
        <FormImage src={house3}></FormImage>
        
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
      <Link to="/">Go Back</Link>
   </LoginContainer>
  )
}

export default LoginPage