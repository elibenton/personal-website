import React from "react"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import moment from "moment"

const FooterWrapper = styled(Row)`
	display: flex;
	background-color: white;
	margin-bottom: 30px;
	@media screen and (max-width: 767px) {
		display: none !important;
	}
`

const A = styled.a`
	text-decoration: none;
`

const Footer = () => {
	return (
		<FooterWrapper>
			<Col md={3} lg={3}>
				<h4>
					<span>
						<A href='https://github.com/elibenton/personal-website'>Codebase</A>
						,&nbsp;
						<A href='https://www.elibenton.co/sitemap.xml'>Sitemap</A>, &&nbsp;
						<A href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>
							CC License
						</A>
					</span>
					<br />
					©️ {moment().year()} Eli Cohen
				</h4>
			</Col>
		</FooterWrapper>
	)
}

export default Footer
