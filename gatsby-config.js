module.exports = {
  siteMetadata: {
    title: `Eli Benton Cohen`,
    shortTitle: `Eli B. Cohen`,
    author: `Eli Benton Cohen`,
    description: `Traveling the world to understand the politics of digitally networked life`,
    siteUrl: `https://elibenton.co/`,
  },
  plugins: [
    "gatsby-plugin-netlify-cache",
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mediaTypes: [`text/x-markdown`],
        defaultLayouts: {
          default: require.resolve("./src/components/mdx-layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              // maxHeight: 600,
            },
          },
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://elibenton.us3.list-manage.com/subscribe/post?u=d1b94901dc20703c70ecddf85&amp;id=e8d93b9cc3", // add your MC list endpoint here; see instructions below
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.template +
                    edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.template +
                    edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
               {
                allMarkdownRemark
                  (
                  sort: {order: DESC, fields: [frontmatter___date]}, 
                  filter: {frontmatter: {template: {in: "writing"}}}
                  ) 
                    {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        description
                        template
                      }
                    }
                  }
                }
              }
        `,
            output: "/writing.xml",
            title:
              "Traveling the world to understand the politics of digitally networked life",
            match: "^/writing/",
          },
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                  enclosure: edge.node.frontmatter.date, // audio file path!
                })
              })
            },
            query: `
              {
                allMarkdownRemark
                  (
                  sort: {order: DESC, fields: [frontmatter___date]}, 
                  filter: {frontmatter: {template: {in: "audio"}}}
                  ) 
                    {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
        `,
            output: "/audio.xml",
            title:
              "Traveling the world to understand the politics of digitally networked life",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/audio/",
            setup: () => ({
              custom_namespaces: {
                itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
              },
              custom_elements: [
                {
                  "itunes:subtitle":
                    "Traveling the world to understand the politics of digitally networked life",
                },
                { "itunes:author": "Eli Benton Cohen" },
                {
                  "itunes:summary":
                    "A podcast documenting my travels across the globe, to better understand the connections of life online and off.",
                },
                {
                  "itunes:owner": [
                    { "itunes:name": "Eli Benton Cohen" },
                    { "itunes:email": "eliunited@gmail.com.com" },
                  ],
                },
                {
                  "itunes:image": {
                    _attr: {
                      href: "content/images/pod-logo.png",
                    },
                  },
                },
                {
                  "itunes:category": [
                    {
                      _attr: {
                        text: "Technology",
                      },
                    },
                    {
                      "itunes:category": {
                        _attr: {
                          text: "Places & Travel",
                        },
                      },
                    },
                  ],
                },
              ],
            }),
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/writing`,
        name: `writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "mdx",
    //     path: `${__dirname}/content/mdx/`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     offsetY: `25`,
          //   },
          // },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        base64: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eli Benton Cohen`,
        short_name: `Eli B. Cohen`,
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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-remove-trailing-slashes`,
  ],
}
