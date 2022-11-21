import {React, forwardRef, useState} from 'react'
import { Nav, NavbarContainer, NavFlexBox1, NavFlexBox2, NavLogo, NavCompanyName, Link, MobileIcon, NavMenu, NavMenuItem } from './StyledNavBar'
import fakelogo from '../../images/fakelogo.png'
import hamburgermobilemenu from '../../images/hamburgermobilemenu.png'
import mobilemenux from '../../images/mobilemenux.png'



const NavBar = forwardRef((props, [serviceRef, rentRef, aboutRef, contactRef]) => {

  const [menu, setMenu] = useState("")

  const handleClick = () => {
    setMenu(!menu)
    console.log(menu)
  }
  const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop, 
      left: 0,  
      behavior: "smooth"
    })
    setMenu(false)
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavFlexBox1>
          <Link onClick={()=> scrollToSection(contactRef)}>Contact</Link>
          <Link onClick={()=> scrollToSection(serviceRef)}>Services</Link>
        </NavFlexBox1>
        <NavCompanyName>Welson Rentals</NavCompanyName>
        <NavLogo src={fakelogo} />
        <NavFlexBox2>
          <Link  onClick={()=> scrollToSection(rentRef)}>Rentals</Link>
          <Link onClick={()=> scrollToSection(aboutRef)}>About</Link>
          <MobileIcon onClick={handleClick} src={ menu ? mobilemenux : hamburgermobilemenu } />
          <NavMenu menu={menu}>
            {/* {NavLinks.map((link, index) => (
              <NavMenuItem key={index}>
                <div>{link.name}</div>
              </NavMenuItem>
            ))} */}
            
              <NavMenuItem onClick={()=> scrollToSection(contactRef)}>Contact Us</NavMenuItem>
              <NavMenuItem onClick={()=> scrollToSection(serviceRef)}>Property Management</NavMenuItem>
              <NavMenuItem onClick={()=> scrollToSection(rentRef)}>Find a Rental</NavMenuItem>
              <NavMenuItem onClick={()=> scrollToSection(aboutRef)}>About</NavMenuItem>
          </NavMenu>
        </NavFlexBox2>
      </NavbarContainer>
      </Nav>
  )
})

export default NavBar