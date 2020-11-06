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
      },
    },
    `gatsby-plugin-numl`,`gatsby-plugin-react-helmet`
  ],
}
