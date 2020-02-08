const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    query MyQuery {
      allShopifyProduct {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.handle}`,
      component: path.resolve('./src/pages/page-2.js'),
      context: {
        id: edge.node.id,
        handle: edge.node.handle,
      }
    })
  })
}
