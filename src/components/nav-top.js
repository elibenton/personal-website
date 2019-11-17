// Core Libraries
import React from "react"
import { Link } from "gatsby"

// Static Content
import logo from "../../content/images/tinhat.gif"

// Yarn Packages
import styled from "styled-components"

// Utilities and Ancillary Libraries
import { kebabCase } from "lodash"
import moment from "moment"

const Nav = styled.div`
	position: sticky;
	top: 0px;
	transition: top 0.2s;
	background-color: white;
	height: 66px;
	z-index: 10;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: solid 2px;
	justify-content: space-between;
	@media screen and (max-width: 767px) {
		justify-content: flex-start;
		margin-left: -16px;
		padding-left: 16px;
		margin-right: -16px;
		padding-right: 16px;
	}
`
const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
	padding: 5px 20px;
	@media screen and (max-width: 600px) {
		padding-left: 8px;
		padding-right: 5px;
	}
`
const Hide = styled.div`
	flex-direction: column;
	@media screen and (max-width: 767px) {
		display: none;
	}
`
const Img = styled.img`
	margin: 16px 80px 8px 0;
	@media screen and (max-width: 767px) {
		margin: 0 8px 4px 0;
	}
`

var prevScrollPos

class Navbar extends React.Component {
	state = { scrollingUp: true }
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
				<NavLink to='/'>
					<Img src={logo} alt='Logo' width='40' height='40' />
				</NavLink>
				<h3 css={{ fontSize: "1.1em", lineHeight: "1.1em", margin: "0" }}>
					{this.props.title}
				</h3>
				<Hide>
					<h5>
						<NavLink
							to={`/${moment(this.props.date, "YYYY").format("YYYYY")}/${moment(
								this.props.date
							)
								.format("YYYY")
								.toLowerCase()}/`}
						>
							{this.props.date}
						</NavLink>
					</h5>
					<h5>
						<NavLink to={`/${kebabCase(this.props.country)}`}>
							{this.props.city}, {this.props.country}
						</NavLink>
					</h5>
				</Hide>
			</Nav>
		)
	}
}

export default Navbar
