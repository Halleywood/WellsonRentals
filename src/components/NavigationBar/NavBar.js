import React from 'react'
import { Nav, NavbarContainer, NavFlexBox1, NavFlexBox2, NavLogo, NavCompanyName, Link, MobileIcon, NavMenu, NavMenuItem } from './StyledNavBar'
import { useState } from 'react';
import fakelogo from '../../images/fakelogo.png'
import hamburgermobilemenu from '../../images/hamburgermobilemenu.png'
import mobilemenux from '../../images/mobilemenux.png'
import { NavLinks } from './NavBarData'



const NavBar = () => {

  const [menu, setMenu] = useState("")

  const handleClick = () => {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavFlexBox1>
          <Link>Contact</Link>
          <Link>Services</Link>
        </NavFlexBox1>
        <NavCompanyName>Welson Rentals</NavCompanyName>
        <NavLogo src={fakelogo} />
        <NavFlexBox2>
          <Link>Rentals</Link>
          <Link>About</Link>
          <MobileIcon onClick={handleClick} src={ menu ? mobilemenux : hamburgermobilemenu } />
          <NavMenu menu={menu}>
            {NavLinks.map((link, index) => (
              <NavMenuItem key={index}>
                {link.name}
              </NavMenuItem>
            ))}
          </NavMenu>
        </NavFlexBox2>
      </NavbarContainer>
      </Nav>
  )
}

export default NavBar