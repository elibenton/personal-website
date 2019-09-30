import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const Nav = styled.div`
  position: sticky;
  top: 0;
  transition: top 0.2s;
  background-color: white;
  height: 52px;
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
  @media screen and (max-width: 600px) {
    justify-content: space-even;
  }
`

const Flex = styled.div`
  display: flex;
  /* @media screen and (max-width: 600px) {
    flex-direction: column;
  } */
`

const Padding = styled.div`
  @media screen and (min-width: 320px) {
    width: 20px;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  @media screen and (max-width: 600px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  @media screen and (max-width: 600px) {
    padding-left: 5px;
    padding-right: 5px;
  }
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
    // console.log(this.props.site)
    // const { title, date, city, country } = this.props.data.mdx.frontmatter
    // const links = navLinks.map((link, i) => {
    //   return (
    //     <NavLink key={i} to={link.to}>
    //       <h4>{link.label}</h4>
    //     </NavLink>
    //   )
    // })

    return (
      <Nav
        onScroll={this.handleScroll}
        style={{ top: this.state.scrollingUp ? "0px" : "-52px" }}
      >
        <InnerContainer>
          <Flex>
            <Padding />
            <NavLink to="/">
              <h4>Home</h4>
            </NavLink>
          </Flex>
          <Flex>
            {/* {this.state.scrollingUp ? links : "hi"} */}
            <NavLink to="/about">
              <h4>About</h4>
            </NavLink>
            /
            <ExternalLink href="https://www.notion.so/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a">
              <h4>Reading</h4>
            </ExternalLink>
            /
            <NavLink to="/portfolio">
              <h4>Portfolio</h4>
            </NavLink>
            <Padding />
          </Flex>
        </InnerContainer>
      </Nav>
    )
  }
}

// const navLinks = [
//   { label: "About", to: "/about" }, // /about
//   { label: "Portfolio", to: "/portfolio" }, // /portfolio
// ]

export default Navbar

export const titleQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        city
        country
      }
    }
  }
`
