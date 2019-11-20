// Core Libraries
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

// Components
import Nav from "../components/nav-left"
import Layout from "../components/layout"

// Yarn Packages
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"

// Utilities and Ancillary Libraries
import { kebabCase, upperFirst } from "lodash"
import Spacer from "../utils/spacer"

const BetterLink = styled(Link)`
	text-decoration: none;
`
const MarginCol = styled(Col)`
	margin-left: 50px;
	@media screen and (max-width: 767px) {
		margin-left: 0;
	}
`

export default () => (
	<StaticQuery
		query={graphql`
			{
				site {
					siteMetadata {
						title
					}
				}
				allMdx(limit: 2000) {
					tags: group(field: frontmatter___tags) {
						fieldValue
						totalCount
					}
					templates: group(field: frontmatter___template) {
						fieldValue
						totalCount
					}
					countries: group(field: frontmatter___country) {
						fieldValue
						totalCount
					}
				}
			}
		`}
		render={data => (
			<Layout>
				<Helmet title={`Topics`} />
				<Row>
					<Col xs={12} sm={12} md={3} lg={3}>
						<Nav />
					</Col>
					<MarginCol xs={12} sm={12} md={7} lg={6}>
						<Spacer height={0} xsHeight={30} />
						<div
							css={{
								marginLeft: "6px",
								display: "inline-block",
								lineHeight: "1.3em",
							}}
						>
							{data.allMdx.countries.map(country => (
								<BetterLink
									to={`/${kebabCase(country.fieldValue)}/`}
									css={{ textDecoration: "none" }}
								>
									<span class='tag-green'>
										{country.fieldValue}: {country.totalCount}
									</span>
								</BetterLink>
							))}
							<Spacer height={10} xsHeight={5} />
							{data.allMdx.templates.map(template => (
								<BetterLink
									to={`/${kebabCase(template.fieldValue)}/`}
									css={{ textDecoration: "none" }}
								>
									<span class='tag-blue'>
										{upperFirst(template.fieldValue)}: {template.totalCount}
									</span>
								</BetterLink>
							))}
							<Spacer height={10} xsHeight={5} />
							{data.allMdx.tags.map(tag => (
								<BetterLink
									to={`/tags/${kebabCase(tag.fieldValue)}/`}
									css={{ textDecoration: "none" }}
								>
									<span class='tag-red'>
										{tag.fieldValue}: {tag.totalCount}
									</span>
								</BetterLink>
							))}
						</div>
					</MarginCol>
				</Row>
				<Spacer height={20} xsHeight={20} />
			</Layout>
		)}
	/>
)
