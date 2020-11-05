require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `graphqlData`,
        url: process.env.GATSBY_API_URL,
        typeName: `VacuumCleaner`,
        refetchInterval: 60,
        batch: true,
      },
    },
  ],
}
