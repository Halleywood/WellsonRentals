import React from 'react'
import {Link} from 'react-router-dom'
import { LoginContainer, LoginLinks, LoginLogo } from './StyledLogin'

const Login = () => {
  return (
    <LoginContainer>
      <LoginLogo>Wellson Rentals</LoginLogo>
      <LoginLinks>
        <Link to="/login">Owner Portal</Link>
        <Link to="/login"> | Renter Portal</Link>
      </LoginLinks>
    </LoginContainer>
  )
}

export default Login