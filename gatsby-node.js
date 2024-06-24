exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query  {
      allPrismicBlogpost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
    const data =  JSON.parse(JSON.stringify(result.data));
  if (result.errors) {
    reporter.panicOnBuild(`🔥 Error while running GraphQL query on Prismic.`)
    return
  }

  const pageTemplate = require.resolve(`./src/pages/index.js`)

  console.log(`🙏🏼 Begin creating pages from Prismic...`)
  
  data.allPrismicBlogpost.edges.forEach(({ node }) => {
    const parent = node.parent ? node.parent._meta.uid : ''
    const slug = node.uid
    const url = parent ? `${parent}/${slug}` : `${slug}`
    const parentId = parent ? node.parent._meta.id : ''

    console.log(`✅ Page: ${url}`)

    createPage({
      path: url,
      component: pageTemplate,
      context: {
        parentId: parentId,
        uid: slug,
      },
    })
  })

  console.log(`👌🏼 Done creating pages from Prismic!`)
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
