module.exports = {
  siteMetadata: {
    title: `Eli Benton Cohen`,
    shortTitle: `Eli B. Cohen`,
    author: `Eli Benton Cohen`,
    description: `Traveling the world to understand the politics of digitally networked life`,
    siteUrl: `https://elibenton.co/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    "gatsby-plugin-netlify-cache",
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
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://blog.elibenton.co`,
        contentApiKey: `e8f1d1580c7832c8ffb4eed769`,
        version: `v3`,
      },
    },
  ],
}
