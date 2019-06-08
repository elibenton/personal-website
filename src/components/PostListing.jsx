import React from "react";
import { Row, Col } from "react-flexbox-grid";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";

const PostMetaTextContainer = styled.div`
	margin-right: 20px;
	width: 60%;
	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

const PostContainer = styled.div`
	position: relative;
	margin: 40px 0;
	background: white;
`;

const PostTitle = styled.h2`
	text-decoration: none;
	color: #323232;
	text-align: right;
	margin: 0;
	margin-bottom: 20px;

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

const Location = styled.h4`
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
	margin-bottom: 20px;
`;

class PostListing extends React.Component {
	getPostList() {
		const postList = [];
		this.props.postEdges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.frontmatter.date,
				location: postEdge.node.frontmatter.location,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead
			});
		});
		return postList;
	}
	render() {
		const postList = this.getPostList();
		return (
			<div>
				{postList.map(post => (
					<PostContainer key={post.slug}>
						<Row>
							<Col
								xsOffset={1}
								xs={10}
								smOffset={2}
								sm={8}
								mdOffset={0}
								md={6}
								lgOffset={0}
								lg={6}
							>
								<MetaContainer>
									<PostMetaTextContainer>
										<PostLink to={post.path}>
											<PostTitle>{post.title}</PostTitle>
										</PostLink>
										<Location>{post.date}</Location>
										<Location>{post.location}</Location>
									</PostMetaTextContainer>
								</MetaContainer>
							</Col>
							<Col
								xsOffset={1}
								xs={10}
								smOffset={2}
								sm={8}
								mdOffset={0}
								md={6}
								lgOffset={0}
								lg={6}
							>
								<Excerpt>{post.excerpt}</Excerpt>
							</Col>
						</Row>
					</PostContainer>
				))}
			</div>
			//-------
			// <div>
			// 	{/* Your post list here. */
			// 	postList.map(post => (
			// 		<Link to={post.path} key={post.title}>
			// 			<h1>{post.title}</h1>
			// 		</Link>
			// 	))}
			// </div>
		);
	}
}

export default PostListing;
