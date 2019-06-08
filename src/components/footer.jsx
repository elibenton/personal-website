import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const FooterWrapper = styled(Row)`
	display: flex;
	background-color: white;
	padding-top: 40px;
	padding-bottom: 5px;
	border-top: thick double;
	@media print {
		display: none;
	}
`;

const FinePrint = styled.div`
	font-weight: normal;
	margin-bottom: 35px;
	font-size: 14px;
	line-height: 20px;
	color: black;
`;

const StyledLink = styled.a`
	color: black;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<Col
				xsOffset={1}
				xs={10}
				smOffset={1}
				sm={4}
				mdOffset={1}
				md={4}
				lgOffset={1}
				lg={4}
			>
				<FinePrint>
					💪 Coded by hand using{" "}
					<StyledLink href="https://www.gatsbyjs.com/">Gatsby</StyledLink>,
					<StyledLink href="https://reactjs.org/"> React</StyledLink>, and
					<StyledLink href="https://www.netlify.com/"> Netlify</StyledLink>.
					<br />
					🙏 Thanks Jimmy Chion for this incredible{" "}
					<StyledLink href="https://github.com/cjimmy/gatsby-netlify-cms-blog">
						starter
					</StyledLink>
					.
					<br />
					©️ Eli Cohen {new Date().getFullYear()}
				</FinePrint>
			</Col>
		</FooterWrapper>
	);
};

export default Footer;
