// Core Libraries
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

// Static Content
import logo from "../../content/images/tinhat.gif"

// Yarn Packages
import styled from "styled-components"

// Utilities and Ancillary Libraries
import Spacer from "../utils/spacer"
import { kebabCase, upperFirst } from "lodash"

const Name = styled.h1`
	display: flex;
	text-transform: none;
	font-weight: 600;
	font-size: 29px;
	margin-top: 0;
	margin-bottom: 2px;
	line-height: 1.1em;
	@media screen and (max-width: 767px) {
		margin: 16px 0 0 4px;
		font-weight: 500;
	}
`
const Hide = styled.div`
	@media screen and (max-width: 767px) {
		display: none;
	}
`
const ReverseHide = styled.div`
	display: none;
	@media screen and (max-width: 767px) {
		display: inline;
	}
`
const Col = styled.div`
	@media screen and (max-width: 767px) {
		display: flex;
		flex-direction: column;
	}
`
const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: -4px;
	align-items: center;
`
const InnerRow = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: -4px;
	@media screen and (max-width: 767px) {
		margin-left: 0px;
	}
`
const SubTitle = styled.h2`
	margin-top: 30px;
	text-align: left;
	line-height: 24px;
	font-size: 16px;
	font-style: italic;
	font-weight: 200;
	margin-bottom: 10px;
	color: grey;
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
			<div>
				<Row>
					<Link css={{ textDecoration: "none" }} to='/'>
						<img
							css={{ marginRight: "10px" }}
							src={logo}
							alt='Logo'
							width='60'
							height='60'
						/>
					</Link>
					<Col>
						<Name>{data.site.siteMetadata.title}</Name>
						<InnerRow>
							<Hide>
								<Link
									to={`/`}
									css={{ textDecoration: "none", textTransform: "uppercase" }}
								>
									<h4>home&nbsp;</h4>
								</Link>
							</Hide>
							<Link
								to='/about'
								css={{ textDecoration: "none", textTransform: "uppercase" }}
							>
								<h4>about&nbsp;</h4>
							</Link>
							<ReverseHide>
								<Link
									to={`/tags`}
									css={{ textDecoration: "none", textTransform: "uppercase" }}
								>
									<h4>tags&nbsp;</h4>
								</Link>
							</ReverseHide>
							<a
								href='https://www.notion.so/elibentoncohen/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a'
								css={{ textDecoration: "none", textTransform: "uppercase" }}
							>
								<h4>reading</h4>
							</a>
						</InnerRow>
					</Col>
				</Row>
				<Hide>
					<SubTitle>
						Traveling the world to understand the politics of digitally
						networked life
					</SubTitle>
				</Hide>
				<Hide>
					<div
						css={{
							marginTop: "36px",
							marginLeft: "-6px",
							display: "inline-block",
							lineHeight: "1.3em",
						}}
					>
						{data.allMdx.countries.map(country => (
							<Link
								to={`/${kebabCase(country.fieldValue)}/`}
								css={{ textDecoration: "none" }}
							>
								<span class='tag-green'>
									{country.fieldValue}: {country.totalCount}
								</span>
							</Link>
						))}
						<Spacer height={10} xsHeight={5} />
						{data.allMdx.templates.map(template => (
							<Link
								to={`/${kebabCase(template.fieldValue)}/`}
								css={{ textDecoration: "none" }}
							>
								<span class='tag-blue'>
									{upperFirst(template.fieldValue)}: {template.totalCount}
								</span>
							</Link>
						))}
						<Spacer height={10} xsHeight={5} />
						{data.allMdx.tags.map(tag => (
							<Link
								to={`/${kebabCase(tag.fieldValue)}/`}
								css={{ textDecoration: "none" }}
							>
								<span class='tag-red'>
									{tag.fieldValue}: {tag.totalCount}
								</span>
							</Link>
						))}
					</div>
				</Hide>
			</div>
		)}
	/>
)
