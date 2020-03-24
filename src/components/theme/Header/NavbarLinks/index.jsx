import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import { Link } from 'gatsby'

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/">HOME</Link>
    <AnchorLink href="#about">ABOUT</AnchorLink>
    <AnchorLink href="#services">SERVICES</AnchorLink>
    <AnchorLink href="#products">PRODUCTS</AnchorLink>
    <AnchorLink href="#location">LOCATION</AnchorLink>
  </Wrapper>
)

export default NavbarLinks
