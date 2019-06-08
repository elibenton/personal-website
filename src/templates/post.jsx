import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/site-config";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Img from "gatsby-image";

const TitleContainer = styled.div`
	@media screen and (max-width: 767px) {
		margin-left: 10px;
	}
`;

const Title = styled.h1`
	text-align: left;
	margin-bottom: 5px;
`;

const Subtitle = styled.p`
	font-style: italic;
	text-align: left;
`;

const AttributionText = styled.h4`
	color: #777;
	line-height: 1.4em;
`;

const Attribution = styled.div`
	margin-top: ${props => props.offset}px;
	@media screen and (max-width: 767px) {
		margin-top: 0;
		margin-left: 10px;
		width: calc(100% - 20px);
	}
`;

export default class PostTemplate extends React.Component {
	render() {
		const { slug } = this.props.pageContext;
		const postNode = this.props.data.markdownRemark;
		const post = postNode.frontmatter;
		if (!post.id) {
			post.id = slug;
		}
		if (!post.category_id) {
			post.category_id = config.postDefaultCategoryID;
		}
		return (
			<Layout>
				<div>
					<Helmet>
						<title>{`${post.title} | ${config.siteTitle}`}</title>
					</Helmet>
					<SEO postPath={slug} postNode={postNode} postSEO />

					<Row>
						<Col
							xsOffset={0}
							xs={12}
							smOffset={1}
							sm={10}
							mdOffset={1}
							md={6}
							lgOffset={1}
							lg={6}
						>
							<TitleContainer>
								<Title>{post.title}</Title>
								<Subtitle>{post.escription}</Subtitle>
							</TitleContainer>
						</Col>
						<Col
							xsOffset={0}
							xs={12}
							smOffset={1}
							sm={10}
							mdOffset={1}
							md={4}
							lgOffset={1}
							lg={4}
						>
							<Attribution offset={130}>
								<AttributionText>
									<i class="fas fa-map-marker-alt fa-fw" /> {post.location}
								</AttributionText>
								<AttributionText>
									<i class="fas fa-calendar-day fa-fw" /> {post.date}
								</AttributionText>
							</Attribution>
						</Col>
					</Row>
					<Img fluid={this.props.data.file.childImageSharp.fluid} />
					<div className="blog-post-body">
						<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
						<div className="post-meta">
							<PostTags tags={post.tags} />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		file(relativePath: { regex: "/zion.jpg/" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			excerpt
			frontmatter {
				title
				cover
				date(formatString: "MMMM DD, YYYY")
				category
				tags
				location
			}
			fields {
				slug
				date
			}
		}
	}
`;
