module.exports = {
  siteMetadata: {
    title: `Colander World`,
    shortTitle: `CoWo`,
    author: `Eli Benton Cohen`,
    subTitle: `Reporting on the politics of digitally networked life.`,
    description: `Reporting on the politics of digitally networked life.`,
    siteUrl: `https://colanderworld.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Colander World`,
        short_name: `Colander World`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/images/world_map.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://blog.elibenton.co`,
        contentApiKey: `e8f1d1580c7832c8ffb4eed769`,
        version: `v3`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allGhostPost } }) => {
              return allGhostPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + "/post/" + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + "/post/" + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: ` 
            {
              allGhostPost(sort: { order: DESC, fields: published_at }) {
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
          `,
            output: "/posts.xml",
            title: "Reporting on the politics of digitally networked life.",
            match: "^/",
          },
        ],
      },
    },
  ],
}
