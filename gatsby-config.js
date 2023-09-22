/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
 plugins: [
     'gatsby-transformer-remark',
     'gatsby-transformer-sharp',
     'gatsby-plugin-sharp',
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    // The unique name for each instance
    name: `notes`,
    // Path to the directory
    path: `${__dirname}/src/notes/`,
   },
  },
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    // The unique name for each instance
    name: `images`,
    // Path to the directory
    path: `${__dirname}/src/images/`,
   },
  },
 ],
  siteMetadata: {
   title: 'this is title',
    description: 'zarnigors gatsby projects',
    copyright: '2023'
  }
}
