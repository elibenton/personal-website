import React from "react"
import "./layout.css"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Spacer from "../utils/spacer"
import styled from "styled-components"

const Padding = styled.div`
	padding-left: 30px;
	@media screen and (max-width: 767px) {
		padding-left: 0;
	}
`

export default ({ children }) => (
	<div>
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
			<Spacer height={60} xsHeight={0} />
			{children}
		</Padding>
	</div>
)
