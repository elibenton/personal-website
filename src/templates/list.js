// core libraries
import React from "react"
import { Link, graphql } from "gatsby"

// yarn packages
import { Row, Col } from "react-flexbox-grid"
import Collapsible from "react-collapsible"
import Helmet from "react-helmet"
import styled from "styled-components"

// components and utils
import Layout from "../components/layout"
import Spacer from "../utils/spacer"
import Nav from "../components/nav-left"
import Footer from "../components/footer"

// ancillary libraries
import moment from "moment"
import { kebabCase, upperFirst } from "lodash"

const MobileHeader = styled.h3`
	font-size: 22px;
	margin: 0px 0px 12px 0px;
	padding-bottom: 10px;
	font-weight: 500;
	border-bottom: solid 2px;
	@media screen and (max-width: 767px) {
		margin-left: -8px;
		padding-left: 8px;
		margin-right: -8px;
		margin-top: 24px;
		padding-bottom: 6px;
		line-height: 1.2em;
	}
`

const Button = styled.h4`
	margin: 16px 0 30px 0;
	font-weight: 400;
	font-size: 13px;
	letter-spacing: 1px;
	text-transform: uppercase;
	:hover,
	:active {
		color: #ffd666;
	}
`
const MobileRowOuter = styled(Row)`
	display: flex;
	flex-direction: row;
	margin-bottom: 2px;
	justify-content: space-between;
	cursor: pointer;
	margin-left: 0px !important;
	margin-right: 0px !important;
	@media screen and (max-width: 767px) {
		flex-direction: column !important;
	}
`
const MobileRowInner = styled(Row)`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 767px) {
		font-style: italic;
		margin: 0px 0px 8px -4px !important;
		flex-direction: row-reverse !important;
		justify-content: flex-end;
	}
`
const MobileTitle = styled.h4`
	letter-spacing: 0.7px;
	font-weight: 500;
	:hover,
	:active {
		color: #ffd666;
	}
	@media screen and (max-width: 767px) {
		font-size: 16px;
		:hover,
		:active {
			color: black;
		}
	}
`

const MobileContainer = styled.h4`
	width: 70%;
	@media screen and (max-width: 767px) {
		width: 100%;
	}
`

const BetterLink = styled(Link)`
	text-decoration: none;
	@media screen and (max-width: 767px) {
		:hover,
		:active {
			color: black;
		}
	}
`

const IndexFiltered = ({ pageContext, data }) => {
	const { name } = pageContext
	const posts = data.filtered.edges

	return (
		<Layout>
			<Helmet title={`${upperFirst(name)}`} />
			<Row>
				<Col xs={12} sm={12} md={4} lg={3}>
					<Nav />
				</Col>
				<Col
					xsOffset={0}
					xs={12}
					smOffset={0}
					sm={12}
					mdOffset={0}
					md={7}
					lgOffset={0}
					lg={8}
				>
					<Spacer height={0} xsHeight={15} />
					<MobileHeader>{upperFirst(name)}</MobileHeader>
					{posts.map(({ node }) => {
						const {
							title,
							date,
							city,
							country,
							description,
							template,
						} = node.frontmatter
						const { slug, month } = node.fields
						return (
							<Collapsible
								easing='ease-in-out'
								open={false}
								transitionTime={200}
								trigger={
									<div>
										<MobileRowOuter>
											<MobileTitle
												css={{
													fontSize: "15px",
													marginLeft: "0px",
													marginBottom: "0px",
												}}
											>
												{title}
											</MobileTitle>
											<MobileRowInner>
												<h5>
													<BetterLink to={`/${kebabCase(country)}/`}>
														{city}, {country}
													</BetterLink>
												</h5>
												<h5>&middot;</h5>
												<h5 css={{ paddingRight: "4px" }}>
													<BetterLink
														to={`/${moment(month).format("YYYY")}/${moment(
															month
														)
															.format("MMMM")
															.toLowerCase()}/`}
													>
														{date}
													</BetterLink>
												</h5>
											</MobileRowInner>
										</MobileRowOuter>
									</div>
								}
								triggerWhenOpen={
									<div>
										<MobileRowOuter
											css={{
												justifyContent: "space-between",
												cursor: "pointer",
												borderBottom: "dotted",
												borderBottomWidth: "2px",
												borderBottomColor: "#ffd666",
											}}
										>
											<MobileTitle
												css={{
													fontSize: "15px",
													marginLeft: "0px",
													marginBottom: "0px",
												}}
											>
												{title}
											</MobileTitle>
											<MobileRowInner>
												<h5>
													<BetterLink to={`/${kebabCase(country)}/`}>
														{city}, {country}
													</BetterLink>
												</h5>
												<h5>&middot;</h5>
												<h5 css={{ paddingRight: "4px" }}>
													<BetterLink
														to={`/${moment(month).format("YYYY")}/${moment(
															month
														)
															.format("MMMM")
															.toLowerCase()}/`}
													>
														{date}
													</BetterLink>
												</h5>
											</MobileRowInner>
										</MobileRowOuter>
									</div>
								}
							>
								<MobileContainer
									css={{
										marginLeft: "0px",
										fontSize: "15px",
									}}
								>
									{description}
								</MobileContainer>
								<BetterLink
									to={`/${template}${slug}`}
									css={{ textDecoration: "none" }}
								>
									<Button>Read More&nbsp;➤</Button>
								</BetterLink>
							</Collapsible>
						)
					})}
				</Col>
			</Row>
			<Spacer height={40} xsHeight={40} />
			<Footer />
		</Layout>
	)
}

export default IndexFiltered

export const pageQuery = graphql`
	query($filter: MdxFilterInput) {
		filtered: allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: $filter
		) {
			edges {
				node {
					id
					frontmatter {
						title
						city
						country
						date(formatString: "MM-DD-YYYY")
						description
						tags
						template
					}
					fields {
						slug
						month
					}
				}
			}
		}
	}
`
