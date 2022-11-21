import React from 'react'
import {Link} from 'react-router-dom'
import { LoginContainer, LoginLinks } from './StyledLogin'

const Login = () => {
  return (
    <LoginContainer>
      <LoginLinks>
        <Link to="/login">Owner Portal</Link>
        <Link to="/login"> | Renter Portal</Link>
      </LoginLinks>
    </LoginContainer>
  )
}

export default Login