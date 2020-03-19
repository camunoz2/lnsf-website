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
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-postcss`
  ],
}