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
  const aboutMeTemplate = path.resolve(`src/templates/aboutMe.js`)
  const result = await graphql(`
    {
      postsMDX: allMdx(sort: { order: DESC, fields: frontmatter___date }, filter: {frontmatter: {title: {ne: "About Me"}}}) {
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

      categoryGroup: allMdx {
        distinct(field: frontmatter___category)
      }

      aboutMe:  allMdx(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {title: {eq: "About Me"}}}) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.postsMDX.edges.forEach(({ node }) => {
    const { path } = node.frontmatter
      createPage({
        path: `${path}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
          title: node.title,
          pathDir: path,
        },
      })
  })

  result.data.categoryGroup.distinct.forEach(category => {
    createPage({
      path: `category/${category}`,
      component: categoryTemplate,
      context: {
        category: category,
      },
    })
  })

  result.data.aboutMe.edges.forEach(({ node }) => {
    const { path } = node.frontmatter
      createPage({
        path: `${path}`,
        component: aboutMeTemplate,
        context: {
          id: node.id,
          title: node.title,
          pathDir: path,
        },
      })
  })

}
