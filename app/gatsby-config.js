module.exports = {
  siteMetadata: {
    title: `[DEMO] Gatsby Ecommerce with Shopify`,
    description: `This is a demo incorporating Gatsby and Stripe`,
    author: `@therobbrennan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // Storefront access token that is not secret and can be shared with any JavaScript or public HTML file safely
        accessToken: 'b74e3661addd04b85ab06fc6cd7fef39',
        // Turn on verbose mode to have detailed output while developing with Gatsby and Shopify
        verbose: true,
        // Keep the pagination size reasonable
        paginationSize: 250,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
