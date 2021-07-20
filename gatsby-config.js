/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)
const assert = require('assert')

require('dotenv').config({
  path: '.env'
})

// Set the environment depending on the branch name from Netlify.
// Can use different env variables depending on this variable.
let env = 'DEVELOP'
if (process.env.BRANCH === 'master') {
  env = 'MASTER'
} else if (process.env.BRANCH === 'test') {
  env = 'TEST'
}

// Throttle file downloads from Drupal unless on master.
// Due to Pantheon/Acquia worker resources only available on live.
let concurrentFileRequests = process.env.BRANCH === 'master' ? 20 : 2

// These values are required for a fully functioning site. List all required env vars here.
const requiredEnvValues = [`DRUPAL`, `DRUPAL_API_KEY`]

// Fail fast if a required value is missing from .env
requiredEnvValues.forEach((name) => {
  assert(process.env[name], `${name} must be defined in .env.`)
})

// Set site url.
// Default to URL set in env.
let siteUrl = process.env.URL
if (env === 'DEVELOP') {
  siteUrl = 'https://dev.mysite.com'
}
if (env === 'TEST') {
  siteUrl = 'https://test.mysite.com'
}

module.exports = {
  siteMetadata: {
    title: 'Mediacurrent Gatsby Starter',
    siteUrl: siteUrl
  },
  // Proxy local runtime queries to avoid CORS errors for when you may query Drupal client side.
  proxy: {
    prefix: '/jsonapi',
    url: process.env.DRUPAL
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-files',
    '@mediacurrent/gatsby-plugin-silence-css-order-warning',
    'gatsby-plugin-loadable-storybook',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    // Allows lazy loading components.
    `gatsby-plugin-loadable-components-ssr`,

    // Sourcing images for use with gatsby-image.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      // Set robots.txt by environment.
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => env,
        env: {
          MASTER: {
            policy: [
              {
                userAgent: '*',
                // Add pages to disallow for prod here.
                disallow: ['/login']
              }
            ]
          },
          TEST: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          DEVELOP: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    // {
    //   resolve: 'gatsby-source-drupal',
    //   options: {
    //     baseUrl: process.env[`DRUPAL`],
    //     preview: true,
    //     concurrentFileRequests: concurrentFileRequests,
    //     // For all non-local environments, Gatsby accesses Drupal using a user
    //     // named `gatsby` with the API Services role. The API Key for this user
    //     // can be found in Drupal by finding the gatsby user and checking the
    //     // key authentication tab.
    //     //
    //     // The reason for this is that there are some fields that are not used
    //     // by any published content, and so excluding unpublished content during
    //     // build breaks the graphql schema. An alternative solution would be to
    //     // create custom GraphQL schema for empty fields as noted here:
    //     // eslint-disable-next-line max-len
    //     // https://www.jamesdflynn.com/development/gatsbyjs-drupal-create-custom-graphql-schema-empty-fields
    //     disallowedLinkTypes: ['self', 'describedby'],
    //     // If auth is needed, use this pattern, otherwise delete.
    //     headers: {
    //       'api-key': process.env[`DRUPAL_API_KEY`]
    //     },
    //     basicAuth: {
    //       username: process.env[`DRUPAL_BASIC_AUTH_USERNAME`],
    //       password: process.env[`DRUPAL_BASIC_AUTH_PASSWORD`]
    //     }
    //   }
    // },
    // Allows importing SVGs as React components.
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/.+\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        // Add process.env variables here that you want available in React code.
        whitelist: []
      }
    },
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }`,
        // Pages to exclude from sitemap.
        exclude: [],
        createLinkInHead: true,
        addUncaughtPages: true
      }
    },
    ///////////////////////////////////////////////
    //      All below here is for docs/demo      //
    //      and can be removed when setup is     //
    //      complete.                            //
    ///////////////////////////////////////////////
    // Sourcing docs markdown files. Can be removed.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`
      }
    },
    // Transforms markdown files. Used for docs. Can be removed.
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    `gatsby-plugin-source-template-demo`,
    `gatsby-plugin-docs-demo`
  ]
}
