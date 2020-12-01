require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `graphqlData`,
        url: `${process.env.GATSBY_API_URL}/graphql`,
        typeName: `VacuumCleaner`,
        refetchInterval: 60,
        batch: true,
        headers: {
          Authorization: process.env.GATSBY_API_SOURCE_TOKEN,
        },
      },
    },
    `gatsby-plugin-numl`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
  ],
}
