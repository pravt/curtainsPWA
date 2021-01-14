require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `My Gatsby and Prismic blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        icon: `src/static/curtain.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
