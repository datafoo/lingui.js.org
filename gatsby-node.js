const path = require("path")
const fs = require("fs-extra")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    const component = path.resolve("src/components/DocumentationPage.js")
    resolve(
      graphql(
        `
          {
            allFile(
              filter: {
                sourceInstanceName: { eq: "docs" }
                extension: { eq: "fjson" }
              }
            ) {
              edges {
                node {
                  sourceInstanceName
                  absolutePath
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create blog post pages.
          return Promise.all(
            result.data.allFile.edges.map(edge =>
              fs.readJson(edge.node.absolutePath).then(data => {
                const urlPath =
                  data.current_page_name !== "index"
                    ? data.current_page_name
                    : ""

                const path = `/docs/${urlPath}`
                createPage({
                  path,
                  component,
                  context: {
                    title: data.title,
                    body: data.body,
                    toc: data.toc
                    // Add optional context data. Data can be used as
                    // arguments to the page GraphQL query.
                    //
                    // The page "path" is always available as a GraphQL
                    // argument.
                  }
                })

                const oldPath = `/${urlPath}`
                if (oldPath !== "/") {
                  createRedirect({
                    fromPath: oldPath,
                    isPermanent: true,
                    redirectInBrowser: true,
                    toPath: path
                  })

                  createRedirect({
                    fromPath: `${oldPath}.html`,
                    isPermanent: true,
                    redirectInBrowser: true,
                    toPath: path
                  })
                } else {
                  createRedirect({
                    fromPath: `index.html`,
                    isPermanent: true,
                    redirectInBrowser: true,
                    toPath: path
                  })
                }
              })
            )
          )
        })
        .catch(e => console.error(e))
    )
  })
}
