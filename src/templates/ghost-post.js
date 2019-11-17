// Core Libraries
import React from "react"
import { graphql } from "gatsby"

// Yarn Packages
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"
import styled from "styled-components"

// Components
import Layout from "../components/layout"
import Nav from "../components/nav-left"
import Footer from "../components/footer"

// Utilities
import Spacer from "../utils/spacer"

const CustomRow = styled(Row)`
	margin: 0 0 0 0 !important;
`
const CustomCol = styled(Col)`
	margin-left: 30px !important;
	@media screen and (max-width: 767px) {
		padding: 0 !important;
		margin-left: 0;
	}
`
const Divider = styled(Col)`
	z-index: 100;
	@media screen and (max-width: 767px) {
		position: sticky;
		top: 0px;
	}
`

class AboutPrototype extends React.Component {
	render() {
		return (
			<Layout>
				<Helmet title={"About"} />
				<Spacer height={60} xsHeight={0} />
				<CustomRow>
					<Divider xs={12} sm={12} md={3} lg={3}>
						<Nav />
					</Divider>
					<CustomCol
						xsOffset={1}
						xs={10}
						smOffset={1}
						sm={10}
						mdOffset={1}
						md={7}
						lgOffset={1}
						lg={6}
					>
						<Spacer height={0} xsHeight={30} />
						<section
							dangerouslySetInnerHTML={{
								__html: this.props.data.ghostPost.html,
							}}
						/>
						<Spacer height={135} xsHeight={20} />
					</CustomCol>
				</CustomRow>
				<Footer />
			</Layout>
		)
	}
}

export default AboutPrototype

export const postQuery = graphql`
	query($slug: String!) {
		ghostPost(slug: { eq: $slug }) {
			html
			id
		}
	}
`
