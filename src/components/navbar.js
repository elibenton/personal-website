import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 50px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: thick double;
`

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
`

const Padding = styled.div`
  width: 40px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 3px 20px;
`

const Navbar = () => {
  const links = navLinks.map((link, i) => {
    return (
      <NavLink key={i} to={link.to}>
        <h4>{link.label}</h4>
      </NavLink>
    )
  })
  return (
    <Nav>
      <InnerContainer>
        <Flex>
          <Padding />
          <NavLink style={{ marginTop: 4 }} to="/">
            <h4>Home</h4>
          </NavLink>
        </Flex>
        <Flex>
          {links}
          <Padding />
        </Flex>
      </InnerContainer>
    </Nav>
  )
}

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Porfolio", to: "/portfolio" },
]

export default Navbar
