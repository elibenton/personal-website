import React from "react"
import "./layout.css"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Spacer from "../utils/spacer"
import styled from "styled-components"
import { Grid } from "react-flexbox-grid"

const Padding = styled.div`
	padding-left: 25px;
	padding-right: 25px;
	@media screen and (max-width: 767px) {
		padding: 0;
	}
`

export default ({ children }) => (
	<Grid fluid>
		<Helmet>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			></meta>
			<link rel='stylesheet' href='https://use.typekit.net/pls6imv.css ' />
			<link
				href='https://fonts.googleapis.com/css?family=Merriweather&display=swap:300,600,800'
				rel='stylesheet'
			></link>
			<meta
				name='Eli Benton Cohen'
				content='Traveling the world to understand the politics of digitally networked life'
			/>
		</Helmet>
		<SEO />
		<Padding>
			<Spacer height={50} xsHeight={0} />
			{children}
		</Padding>
	</Grid>
)
