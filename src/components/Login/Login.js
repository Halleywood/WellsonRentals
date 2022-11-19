import React from 'react'
import { LoginContainer, LoginLinks } from './StyledLogin'

const Login = () => {
  return (
    <LoginContainer>
      <LoginLinks>
        <a href="/#" src="owner">Owner Portal </a>
   
        <a href="/#" src="owner">|  Renter Portal</a>
      </LoginLinks>
    </LoginContainer>
  )
}

export default Login