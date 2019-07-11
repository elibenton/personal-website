const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const moment = require("moment")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postWriting = path.resolve(`./src/templates/post-writing.js`)
  const imagePost = path.resolve(`./src/templates/post-image.js`)
  const indexFiltered = path.resolve(`./src/templates/index-filtered.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query allPages {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                    month
                  }
                  frontmatter {
                    title
                    tags
                    template
                    country
                    date
                    publication
                  }
                }
              }
            }
            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const mdx = result.data.allMdx.edges

        // We'll call `createPage` for each result
        mdx.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/mdx-layout.js`),
            context: {
              id: inode.d,
            },
          })
        })

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(post => {
          const { template } = post.node.frontmatter
          const { slug } = post.node.fields

          createPage({
            path: `/${template}${slug}`,
            component: postWriting,
            context: {
              slug: slug,
            },
          })
        })

        // Tag pages:
        let tags = []
        let countries = []
        let months = []
        let templates = []

        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
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
            path: `/tags/${_.kebabCase(filter_tag)}/`,
            component: indexFiltered,
            context: {
              name: filter_tag,
              filter: { frontmatter: { tags: { in: [filter_tag] } } },
            },
          })
        })

        // Make country pages
        countries.forEach(filter_country => {
          createPage({
            path: `/countries/${_.kebabCase(filter_country)}/`,
            component: indexFiltered,
            context: {
              name: filter_country,
              filter: { frontmatter: { country: { in: [filter_country] } } },
            },
          })
        })

        // Make template pages
        templates.forEach(filter_template => {
          createPage({
            path: `/${filter_template}`,
            component: indexFiltered,
            context: {
              name: filter_template,
              filter: { frontmatter: { template: { in: [filter_template] } } },
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
              .toLowerCase()}/`,
            component: indexFiltered,
            context: {
              name: filter_month,
              filter: { fields: { month: { in: [filter_month] } } },
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
    const value = createFilePath({ node, getNode })

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    })
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const monthYear = moment(node.frontmatter.date).format("YYYY-MM")

    // Create custom slug field for each markdown file
    createNodeField({
      name: `slug`,
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
