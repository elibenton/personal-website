const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const moment = require("moment")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const writingPost = path.resolve(`./src/templates/post-writing.js`)
  const imagePost = path.resolve(`./src/templates/post-image.js`)

  const tagTemplate = path.resolve(`./src/templates/index-tag.js`)
  const monthTemplate = path.resolve(`./src/templates/index-month.js`)
  const countryTemplate = path.resolve(`./src/templates/index-country.js`)
  const templateTemplate = path.resolve(`./src/templates/index-template.js`)

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
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    // Make country pages
    countries.forEach(country => {
      createPage({
        path: `/countries/${_.kebabCase(country)}/`,
        component: countryTemplate,
        context: {
          country,
        },
      })
    })

    // Make template pages
    console.log(templates)
    templates.forEach(template => {
      console.log(template)
      createPage({
        path: `/${template}`,
        component: templateTemplate,
        context: {
          template,
        },
      })
    })

    // Make date pages
    months.forEach(month => {
      createPage({
        path: `/${moment(month).format("YYYY")}/${moment(month)
          .format("MMMM")
          .toLowerCase()}/`,
        component: monthTemplate,
        context: {
          month,
        },
      })
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
    })
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
