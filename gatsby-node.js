const path = require(`path`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const list = path.resolve(`./src/templates/list.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query allPages {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
              edges {
                node {
                  excerpt
                  title
                  html
                  id
                  slug
                  updated_at(formatString: "MM-DD-YYYY")
                  date: published_at(formatString: "MM-DD-YYYY")
                  tags {
                    name
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

        // Collect all posts
        const ghosts = result.data.allGhostPost.edges

        // Make home pages
        createPage({
          path: `/`,
          component: list,
          context: {
            name: "All Posts",
            filter: {},
          },
        })

        // We'll call `createPage` for each result
        ghosts.forEach(ghost => {
          // console.log(ghost.node)
          const { slug } = ghost.node
          createPage({
            path: `/post/${slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: ghost.node.slug,
            },
          })
        })

        // Tag pages:
        let tags = []

        // Iterate through each post, putting all found tags into `tags`
        _.each(ghosts, edge => {
          _.each(edge.node.tags, tag => {
            tags = tags.concat(tag.name)
          })
        })

        // Eliminate duplicates in iterables
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(filter_tag => {
          console.log(filter_tag)
          createPage({
            path: `/tag/${_.kebabCase(filter_tag.split(": ")[1])}/`,
            component: list,
            context: {
              name: filter_tag.split(": ")[1],
              filter: {
                tags: {
                  elemMatch: {
                    name: { eq: filter_tag },
                  },
                },
              },
            },
          })
        })
      })
    )
  })
}
