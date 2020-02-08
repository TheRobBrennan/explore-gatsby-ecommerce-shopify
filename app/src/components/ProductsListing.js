import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          publishedAt(fromNow: true)
          description
          descriptionHtml
          variants {
            sku
            id
            title
            price
          }
        }
      }
    }
  }
`

export const ProductsListing = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product key={edge.node.id} product={edge.node} />
      ))}
    </div>
  )
}

export default ProductsListing
