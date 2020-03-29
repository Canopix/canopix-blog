/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const categoryTemplate = path.resolve(`src/templates/categoryTemplate.js`)
  const result = await graphql(`
    {
      postsMDX: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              path
            }
          }
        }
      }
    }
    categoryGroup: allMdx {
      distinct(field: frontmatter___category)
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.postsMDX.allMdx.edges.forEach(({ node }) => {
    const { path } = node.frontmatter ;

    createPage({
      path: `${path}`,
      component: blogPostTemplate,
      context: { 
        id: node.id,
        title: node.title,
        pathDir: path,
      },
    });
  });

  result.data.categoryGroup.allMdx.distinct.forEach(({category}) => {
    createPage({
      category: `${category}`,
      component: categoryTemplate,
      context: {
        categoryName: category
      }
    })
  })
}
