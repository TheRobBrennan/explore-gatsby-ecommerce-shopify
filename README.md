# Welcome

This project has been created to explore some initial thoughts and ideas when working with [Gatsby](https://www.gatsbyjs.org) and [Shopify](https://www.shopify.com)

## Getting started

### Generate a new app using the Gatsby CLI

Let's create an app using `npx` to run the latest Gatsby CLI:

```sh
$ npx gatsby new app
```

### Start the application

To run the app, simply run the `start` script in either the root directory or the `app` directory:

```sh
$ npm start
```

The app should be available at [http://localhost:8000](http://localhost:8000).

The GraphiQL IDE should be available at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

### Deployment to ZEIT Now

As a bonus, I wanted to configure this project so that I can deploy it to my favorite static and [JAMstack](https://jamstack.org) host - [ZEIT Now](https://zeit.co).

Feel free to configure `now.json` to match a project name for your (free) [ZEIT Now](https://zeit.co) account and then you can deploy the site with:

```sh
$ npm run deploy

> explore-gatsby-ecommerce-shopify@0.0.0 deploy /Users/rob/repos/explore-gatsby-ecommerce-shopify
> npm run deploy:zeit-now


> explore-gatsby-ecommerce-shopify@0.0.0 deploy:zeit-now /Users/rob/repos/explore-gatsby-ecommerce-shopify
> now

> UPDATE AVAILABLE Run `npm i -g now@latest` to install Now CLI 17.0.2
> Changelog: https://github.com/zeit/now/releases/tag/now@17.0.2
> Deploying ~/repos/explore-gatsby-ecommerce-shopify under therobbrennan
> Using project explore-gatsby-ecommerce-shopify
> NOTE: Deployed to production. Run `now --prod` to overwrite later (https://zeit.ink/2F).
> Synced 4 files [2s]
> https://explore-gatsby-ecommerce-shopify-5ykm942bk.now.sh [2s]
> Ready! Deployment complete [53s]
- https://explore-gatsby-ecommerce-shopify.now.sh
- https://explore-gatsby-ecommerce-shopify.therobbrennan.now.sh [in clipboard]
```

In the example deployment above, note that our site is available at [https://explore-gatsby-ecommerce-shopify.therobbrennan.now.sh](https://explore-gatsby-ecommerce-shopify.therobbrennan.now.sh) as well as a link to this specific deployment [https://explore-gatsby-ecommerce-shopify-5ykm942bk.now.sh ](https://explore-gatsby-ecommerce-shopify-5ykm942bk.now.sh ) along with the free `.now.sh` [URL](https://explore-gatsby-ecommerce-shopify.now.sh) associated with your project.

## Shopify

### Initial setup

#### Create a developer account

To create a developer account for Shopify, you will want to go to [http://developers.shopify.com/](http://developers.shopify.com/) and sign up for a free account.

#### Create a new development store

Once you have verified your developer account for Shopify, navigate to the `Stores` menu and follow the on-screen instructions to add a new development store.

I've created a demo store to play around with at [https://therobbrennan-explore-gatsby-ecommerce-s0.myshopify.com](https://therobbrennan-explore-gatsby-ecommerce-s0.myshopify.com)

#### Create a private app

Now that we have a store defined, navigate to the `Apps` menu, click on the link to `Manage private apps` and follow the on-screen instructions to `Create a new private app` with the following `App Details`:

+ Private app name - Use something that makes sense for you (e.g. `explore-gatsby-ecommerce-shopify`)
+ Emergency developer email - Your email address

The default values for the `Admin API` are fine for now. As of this writing, the ones immediately visible were:

+ Store content like articles, blogs, comments, pages, and redirects - `Read access`
+ Customer details and customer groups - `Read access`
+ Orders, transactions and fulfillments - `Read access`
+ Products, variants and collections - `Read access`

Be sure that the `Webhook API version` is using the latest - `2020-01 (Latest)` as of this writing.

Please ensure the `Storefront API Permissions` listed below are selected:

+ Read products, variants, and collections
+ Read product tags
+ Read and modify customer details
+ Read customer tags
+ Read and modify checkouts
+ Read content like articles, blogs, and comments

Once you are satisfied with your settings, please review the `Shopify API Terms` and then click on `I understand, create the app`

Scroll to the bottom to find the `Storefront access token` - this API token is not secret and can be placed in any JavaScript file or any public HTML document.
