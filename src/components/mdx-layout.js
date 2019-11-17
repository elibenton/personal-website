// Core Libraries
import React from "react"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

// Yarn Packages
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"
import styled from "styled-components"
import {
	FaCalendarDay,
	FaMapMarkerAlt,
	FaBook,
	FaHeadphones,
} from "react-icons/fa"

// Components
import Layout from "../components/layout"
import Nav from "../components/nav-top"

// Utilities and Ancillary Libraries
import { kebabCase, upperFirst } from "lodash"
import moment from "moment"
import Spacer from "../utils/spacer"

// Created locally-scoped styled components
const PostLink = styled(Link)`
	text-decoration: none;
	:hover,
	:active {
		color: #ffd666;
	}
`
const Title = styled.h2`
	margin-top: 0px;
	text-align: left;
	line-height: 9vw;
	font-size: 8.2vw;
	@media screen and (max-width: 767px) {
		line-height: 15vw;
		font-size: 14.2vw;
	}
`
const StyledRow = styled(Row)`
	@media screen and (max-width: 767px) {
		margin-left: 2% !important;
		margin-right: 2% !important;
	}
`
export const TagSpan = styled.div`
	color: #999;
	@media screen and (max-width: 767px) {
		margin-top: 0;
		margin-left: 5%;
		margin-right: 5%;
	}
`

function PageTemplate({ data }) {
	const siteTitle = data.site.siteMetadata.title
	const { mdx } = data
	const {
		title,
		description,
		date,
		city,
		country,
		tags,
		template,
	} = mdx.frontmatter

	return (
		<Layout location={data.location} title={siteTitle}>
			<Helmet title={title} />
			<Nav title={title} date={date} city={city} country={country} />
			<Spacer height={60} xsHeight={30} />
			<StyledRow>
				<Col
					xsOffset={0}
					smOffset={0}
					mdOffset={1}
					lgOffset={1}
					xs={12}
					sm={12}
					md={6}
					lg={6}
				>
					<Title>{title}</Title>
				</Col>
				<br />
				<Col
					xsOffset={0}
					smOffset={0}
					mdOffset={1}
					lgOffset={1}
					xs={12}
					sm={12}
					md={6}
					lg={3}
				>
					<Spacer height={30} xsHeight={0} />
					<Col>
						<h4 css={{ fontSize: "15px" }}>{description}</h4>
					</Col>
					<Col>
						<div>
							{tags.map(tag => (
								<PostLink to={`/tags/${kebabCase(tag)}/`}>
									<h5 class='tag'>{tag}</h5>
								</PostLink>
							))}
						</div>
						<div>
							<h5>
								<PostLink
									to={`/${moment(date, "YYYY")}/${moment(date, "MMMM")
										.format("MMMM")
										.toLowerCase()}/`}
								>
									<FaCalendarDay /> {date}
								</PostLink>
							</h5>
							<h5>
								<PostLink to={`/countries/${kebabCase(country)}/`}>
									<FaMapMarkerAlt /> {city}, {country}
								</PostLink>
							</h5>
							{template === "writing" ? (
								<h5>
									<PostLink to={`/${template}`}>
										<FaBook /> {upperFirst(template)}
									</PostLink>
								</h5>
							) : (
								<h5>
									<PostLink to={`/${template}`}>
										<FaHeadphones /> {upperFirst(template)}
									</PostLink>
								</h5>
							)}
						</div>
					</Col>
				</Col>
				<Col
					xsOffset={0}
					xs={12}
					smOffset={0}
					sm={12}
					mdOffset={2}
					md={8}
					lgOffset={3}
					lg={6}
				>
					<Spacer height={80} xsHeight={20} />
					<div css={{ lineHeight: "1.6em" }}>
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</div>
				</Col>
			</StyledRow>
			<Spacer height={100} />
		</Layout>
	)
}

export default PageTemplate

export const pageQuery = graphql`
	query MdxPostQuery($id: String) {
		site {
			siteMetadata {
				title
				author
			}
		}
		mdx(id: { eq: $id }) {
			id
			frontmatter {
				title
				description
				date(formatString: "MMMM DD, YYYY")
				city
				country
				tags
				template
			}
			body
		}
	}
`
