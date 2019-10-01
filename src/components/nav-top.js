import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { kebabCase } from "lodash"
import moment from "moment"
import logoStill from "../../content/images/tinhat_america.png"

const Nav = styled.div`
  position: sticky;
  top: 0;
  transition: top 0.2s;
  background-color: white;
  height: 66px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: thick double;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
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

const Hide = styled.div`
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
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
  }

  render() {
    return (
      <Nav
        onScroll={this.handleScroll}
        style={{ top: this.state.scrollingUp ? "0px" : "-66px" }}
      >
        <NavLink to="/">
          <img
            src={logoStill}
            alt="Logo"
            width="31"
            height="40"
            css={{ margin: "16px 8px 8px 8px" }}
          />
        </NavLink>
        <h3 css={{ fontSize: "1.2em", lineHeight: "1.1em" }}>
          {this.props.title}
        </h3>
        <Hide>
          <h5>
            <NavLink
              to={`/${moment(this.props.date).format("YYYY")}/${moment(
                this.props.date
              )
                .format("MMMM")
                .toLowerCase()}/`}
            >
              {this.props.date}
            </NavLink>
          </h5>
          <h5>
            <NavLink to={`/countries/${kebabCase(this.props.country)}`}>
              {this.props.city}, {this.props.country}
            </NavLink>
          </h5>
        </Hide>
      </Nav>
    )
  }
}

export default Navbar
