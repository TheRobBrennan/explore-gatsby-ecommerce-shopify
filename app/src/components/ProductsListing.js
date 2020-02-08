import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
  const data = useStaticQuery(PRODUCTS_LISTING_QUERY)
  return <div></div>
}

export default ProductsListing
