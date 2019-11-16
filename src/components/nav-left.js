import React from "react"
import logo from "../../content/images/tinhat.gif"
import { Link, StaticQuery, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import upperFirst from "lodash/upperFirst"
import styled from "styled-components"
import Spacer from "../utils/spacer"

const Name = styled.h1`
	display: flex;
	text-transform: none;
	font-weight: 600;
	font-size: 29px;
	margin-top: 0;
	margin-bottom: 2px;
	line-height: 1.1em;
	width: 108%;
	@media screen and (max-width: 767px) {
		margin: 16px 0 0 4px;
		font-weight: 500;
	}
`

const BetterLink = styled(Link)`
	text-decoration: none;
`

const A = styled.a`
	text-decoration: none;
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
					<BetterLink to='/'>
						<img
							css={{ marginRight: "10px" }}
							src={logo}
							alt='Logo'
							width='60'
							height='60'
						/>
					</BetterLink>
					<Col>
						<Name>{data.site.siteMetadata.title}</Name>
						<InnerRow>
							<Hide>
								<BetterLink
									to={`/`}
									css={{ textDecoration: "none", textTransform: "uppercase" }}
								>
									<h4>home&nbsp;</h4>
								</BetterLink>
							</Hide>
							<BetterLink
								to='/about'
								css={{ textDecoration: "none", textTransform: "uppercase" }}
							>
								<h4>about&nbsp;</h4>
							</BetterLink>
							<ReverseHide>
								<BetterLink
									to={`/tags`}
									css={{ textDecoration: "none", textTransform: "uppercase" }}
								>
									<h4>tags&nbsp;</h4>
								</BetterLink>
							</ReverseHide>
							<A
								href='https://www.notion.so/elibentoncohen/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a'
								css={{ textDecoration: "none", textTransform: "uppercase" }}
							>
								<h4>reading</h4>
							</A>
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
								to={`/${kebabCase(tag.fieldValue)}/`}
								css={{ textDecoration: "none" }}
							>
								<span class='tag-red'>
									{tag.fieldValue}: {tag.totalCount}
								</span>
							</BetterLink>
						))}
					</div>
				</Hide>
			</div>
		)}
	/>
)
