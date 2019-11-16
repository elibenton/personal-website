const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const moment = require("moment")

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const list = path.resolve(`./src/templates/list.js`)

	return new Promise((resolve, reject) => {
		resolve(
			graphql(
				`
					query allPages {
						allGhostPost(sort: { order: ASC, fields: published_at }) {
							edges {
								node {
									slug
									url
									id
								}
							}
						}
						allMdx {
							edges {
								node {
									id
									frontmatter {
										title
										city
										country
										date
										description
										tags
										template
									}
									internal {
										type
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
			).then(result => {
				// this is some boilerplate to handle errors
				if (result.errors) {
					console.error(result.errors)
					reject(result.errors)
				}

				// Collect all MDX and MD pages
				const mdxs = result.data.allMdx.edges
				const ghosts = result.data.allGhostPost.edges

				// Make home pages
				createPage({
					path: `/`,
					component: list,
					context: {
						name: "blog",
						filter: {},
					},
				})

				// We'll call `createPage` for each result
				mdxs.forEach(mdx => {
					const { template } = mdx.node.frontmatter
					const { slug } = mdx.node.fields
					createPage({
						path: `/${template}${slug}`,
						component: path.resolve(`./src/components/mdx-layout.js`),
						context: {
							id: mdx.node.id,
						},
					})
				})

				ghosts.forEach(ghost => {
					const { slug } = ghost.node
					createPage({
						path: `/ghost/${slug}`,
						component: path.resolve(`./src/templates/ghost-post.js`),
						context: {
							slug: ghost.node.slug,
						},
					})
				})

				// Tag pages:
				let tags = []
				let countries = []
				let months = []
				let templates = []

				// Iterate through each post, putting all found tags into `tags`
				_.each(mdxs, edge => {
					if (_.get(edge, "node.frontmatter.tags")) {
						tags = tags.concat(edge.node.frontmatter.tags)
					}

					if (_.get(edge, "node.frontmatter.country")) {
						countries = countries.concat(edge.node.frontmatter.country)
					}

					if (_.get(edge, "node.fields.month")) {
						months = months.concat(edge.node.fields.month)
					}

					if (_.get(edge, "node.frontmatter.template")) {
						templates = templates.concat(edge.node.frontmatter.template)
					}
				})

				// Eliminate duplicates in iterables
				tags = _.uniq(tags)
				countries = _.uniq(countries)
				months = _.uniq(months)
				templates = _.uniq(templates)

				// Make tag pages
				tags.forEach(filter_tag => {
					createPage({
						path: `/${_.kebabCase(filter_tag)}/`,
						component: list,
						context: {
							name: filter_tag,
							filter: {
								frontmatter: {
									tags: { in: [filter_tag] },
								},
							},
						},
					})
				})

				// Make country pages
				countries.forEach(filter_country => {
					createPage({
						path: `/${_.kebabCase(filter_country)}/`,
						component: list,
						context: {
							name: filter_country,
							filter: {
								frontmatter: {
									country: { in: [filter_country] },
								},
							},
						},
					})
				})

				// Make template pages
				templates.forEach(filter_template => {
					createPage({
						path: `/${filter_template}`,
						component: list,
						context: {
							name: filter_template,
							filter: {
								frontmatter: {
									template: { in: [filter_template] },
								},
							},
						},
					})
				})

				// Make date pages
				months.forEach(filter_month => {
					createPage({
						path: `/${moment(filter_month).format("YYYY")}/${moment(
							filter_month
						)
							.format("MMMM")
							.toLowerCase()}`,
						component: list,
						context: {
							name: moment(filter_month).format("MMMM YYYY"),
							filter: {
								fields: { month: { in: [filter_month] } },
							},
						},
					})
				})
			})
		)
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === "Mdx") {
		const value = createFilePath({
			node,
			getNode,
		})
		const monthYear = moment(node.frontmatter.date).format("YYYY-MM")

		createNodeField({
			name: "slug",
			node,
			value: `${value}`,
		})

		// Create custom month field for each markdown file
		createNodeField({
			name: `month`,
			node,
			value: `${monthYear}`,
		})

		if (node.frontmatter.publication === undefined) {
			// Create custom published field for each markdown file
			createNodeField({
				name: `published`,
				node,
				value: false,
			})
		} else {
			// Create custom published field for each markdown file
			createNodeField({
				name: `published`,
				node,
				value: true,
			})
		}
	}
}
