const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const writingPost = path.resolve(`./src/templates/post-writing.js`)
  const imagePost = path.resolve(`./src/templates/post-image.js`)

  const tagTemplate = path.resolve(`./src/templates/index-tag.js`)
  const monthTemplate = path.resolve(`./src/templates/index-template.js`)
  const countryTemplate = path.resolve(`./src/templates/index-country.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                template
                country
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/${post.node.frontmatter.template}${post.node.fields.slug}`,
        component: writingPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Tag pages:
    let tags = []
    let countries = []

    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }

      if (_.get(edge, "node.frontmatter.country")) {
        countries = countries.concat(edge.node.frontmatter.country)
      }
    })

    // Eliminate duplicate tags
    tags = _.uniq(tags)
    countries = _.uniq(countries)

    // Make tag pages
    tags.forEach(tag => {
      console.log({ tag })
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    // countries.forEach(country => {
    //   console.log({ country })
    //   createPage({
    //     path: `/countries/${_.kebabCase(country)}/`,
    //     component: countryTemplate,
    //     context: {
    //       country,
    //     },
    //   })
    // })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `${value}`,
    })
  }
}
