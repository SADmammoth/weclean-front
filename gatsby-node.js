const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const query = await graphql(
    `
      {
        graphqlData {
          allVacuumCleaners {
            id
            model
            manufacturer
            oldPrice
            price
            construction
            cleaningFeatures
            dustCollectorType
            volumeOfDustCollector
            powerConsumption
            powerSource
            color
            powerCordLength
            weight
            noiseLevel
            imagesList {
              thumb
              image600x600
            }
          }
          units
        }
      }
    `
  )

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const vacuumCleanerTemplate = path.resolve(
    `src/pages/templates/VacuumCleanerPage.js`
  )

  const {
    data: {
      graphqlData: { allVacuumCleaners, units },
    },
  } = query

  allVacuumCleaners.forEach(node => {
    createPage({
      path: `/vc/${node.id}`,
      component: vacuumCleanerTemplate,
      context: { ...node, units },
    })
  })
}
