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
