import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/site-config";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Img from "gatsby-image";

const About = styled.p`
	font-size: 26px;
	line-height: 1.2em;
`;

const AboutContainer = styled.div`
	display: flex;
	width: 30%;
	position: absolute;
	flex-direction: column;
	align-items: left;
	padding: 2em 4em 2em;
	@media screen and (max-width: 767px) {
		justify-content: flex-start;
		flex-direction: column;
	}
`;

class AboutPage extends Component {
	render() {
		return (
			<Layout>
				<div className="about-container">
					<Helmet title={`About | ${config.siteTitle}`} />
					<AboutContainer>
						<Img fluid={this.props.data.file.childImageSharp.fluid} />
					</AboutContainer>
					<Grid fluid>
						<Row>
							<Col
								xsOffset={1}
								xs={10}
								smOffset={1}
								sm={8}
								mdOffset={4}
								md={6}
								lgOffset={5}
								lg={6}
							>
								<About>
									As a 2019{" "}
									<a href="https://watson.foundation/">Watson Fellow</a>, I am
									traveling the world to explore the politics of technology. I
									am hoping to see how life online and off shape our
									understanding of the world around us. This website is where I
									post about my journey, discuss the things I am reading, and
									release episodes of my podcast documenting the year.
								</About>
								<About>
									Previously, I produced public radio at{" "}
									<a href="https://www.kqed.org/">KQED</a> in San Francisco and
									researched the US Congress at{" "}
									<a href="https://www.brookings.edu/">
										The Brookings Institution
									</a>{" "}
									in Washington D.C.
								</About>
								<About>
									I graduated from Pomona College in Los Angeles, where I
									studied politics and computer science among other topics.
								</About>
							</Col>
						</Row>
					</Grid>
				</div>
			</Layout>
		);
	}
}

export default AboutPage;

export const pageQuery = graphql`
	query AboutImageQuery {
		file(relativePath: { regex: "/eli.jpg/" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
