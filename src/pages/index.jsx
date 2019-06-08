import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/site-config";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Link from "gatsby-link";

const PostMetaTextContainer = styled.div`
	margin-right: 20px;
	width: 60%;
	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const PostContainer = styled.div`
	position: relative;
	margin: 40px 0;
	background: white;
`;

const Line = styled.div`
	margin-top: 12px;
	height: 4px;
	border-radius: 2px;
	width: 100%;
	background-color: ${props =>
		props.color ? Color(props.color) : Color("pink")};
`;

const PostTitle = styled.h2`
	text-decoration: none;
	color: #323232;
	text-align: right;
	margin: 0;

	@media not all and (hover: none) {
		&:hover {
			text-decoration: underline;
			text-decoration-color: ${props =>
				props.color ? Color(props.color) : "#333"};
		}
	}
	@media screen and (max-width: 767px) {
		text-align: left;
	}
`;

const MetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	@media screen and (max-width: 767px) {
		align-items: flex-start;
	}
`;

const PostImageContainer = styled.div`
	width: 80%;
`;
const PostImage = styled.img`
	object-fit: cover;
	width: calc(100% - 20px);
	max-height: 66px;
	border-radius: 2px;
	margin-right: 20px;
`;

const PostLink = styled(Link)`
	text-decoration: none;
`;
const KeepReading = styled(Link)`
	text-align: right;
	margin-top: 10px;
	text-decoration: none;
	color: #333;
	@media not all and (hover: none) {
		&:hover {
			text-decoration: underline;
			text-decoration-color: ${props =>
				props.color ? Color(props.color) : "#333"};
		}
	}
`;
const Author = styled.h4`
	color: #999;
	text-align: right;
	margin-top: 10px;
	@media screen and (max-width: 767px) {
		text-align: left;
	}
`;

const Date = styled.h4`
	color: #999;
	margin-top: 5px;
	margin-bottom: 15px;
	text-align: right;
	margin-right: 20px;
`;

const BlogTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	padding: 0 40px 1rem;
	@media screen and (max-width: 767px) {
		justify-content: flex-start;
		flex-direction: column;
	}
`;

const BlogDescription = styled.div`
	font-style: italic;
	@media screen and (max-width: 767px) {
		margin-top: 0;
		margin-left: 0;
		text-align: left;
	}
`;

const BlogName = styled.h1`
	font-size: 64px;
	letter-spacing: -4px;
	line-height: 1em;
	margin-bottom: 10px;
`;

const Excerpt = styled.div`
	margin-top: 19px;
	margin-bottom: 20px;
`;

class Index extends React.Component {
	render() {
		const postEdges = this.props.data.allMarkdownRemark.edges;
		// const siteData = this.props.data.site.siteMetadata;
		return (
			<Layout>
				<div className="index-container">
					<Helmet title={config.siteTitle} />
					<SEO />
					<StyledLink to="/">
						<BlogTitle>
							<BlogName>{config.siteTitle}</BlogName>
							<BlogDescription>{config.siteDescription}</BlogDescription>
						</BlogTitle>
					</StyledLink>
					<Row>
						<Col
							xsOffset={1}
							xs={10}
							smOffset={2}
							sm={8}
							mdOffset={0}
							md={6}
							lgOffset={4}
							lg={6}
						>
							<PostListing postEdges={postEdges} />
						</Col>
					</Row>
				</div>
			</Layout>
		);
	}
}

export default Index;

/* eslint no-undef: "off" */
// site {
// 	siteMetadata {
// 		siteTitle
// 		siteDescription
// 	}
// }
export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					excerpt(pruneLength: 300)
					id
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						tags
						location
					}
				}
			}
		}
	}
`;
