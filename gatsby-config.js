require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Hotel brochure`,
    description: `curtain`,
    author: `babusek`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "curtains",
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // PRISMIC_ACCESS_TOKEN
        path: "/brochure",
        previews: true,
        sharpKeys: [/image|photo|picture|logo|icon/],
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Brochure", // TypeName from prismic
            match: "/brochure/:uid", // Pages will be generated under this pattern
            path: "/brochure", // Placeholder page for unpublished documents
            component: require.resolve("./src/pages/index.js"),
            // component: require.resolve("./src/04.templates/brochure.js"),
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `curtains`,
        short_name: `curtains`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        cache_busting_mode: `none`,
        icon: `favicons/tile70x70.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
