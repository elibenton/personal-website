import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.div`
  position: sticky;
  top: 0;
  transition: top 0.2s;
  background-color: white;
  height: 50px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: thick double;
  @media screen {
    justify-content: center;
  }
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
  @media screen and (min-width: 350px) {
    width: 40px;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 3px 20px;
`
var prevScrollPos

class Navbar extends React.Component {
  state = { scrollingUp: false }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    var currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos) {
      this.setState({ scrollingUp: true })
    } else {
      this.setState({ scrollingUp: false })
    }
    prevScrollPos = currentScrollPos
    // console.log(this.state.scrollingUp)
  }

  render() {
    const links = navLinks.map((link, i) => {
      return (
        <NavLink key={i} to={link.to}>
          <h4>{link.label}</h4>
        </NavLink>
      )
    })

    return (
      <Nav
        onScroll={this.handleScroll}
        style={{ top: this.state.scrollingUp ? "0px" : "-50px" }}
      >
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
}
const navLinks = [
  { label: "About", to: "/about" }, // /about
  { label: "Portfolio", to: "/portfolio" }, // /portfolio
]

export default Navbar
