require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  plugins: 
  [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '851yb6p7lkvc',
        accessToken: 'cr6r1HPJwuMxjWy3RF5z3Gg16SaVAgGt1aWQMSYljMQ',
      },
    },
    `gatsby-plugin-postcss`
  ],
}