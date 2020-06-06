import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Dump from "../components/Dump"

function categoryTemplate({ pageContext, data }) {
  const { nodes } = data.allMdx
  return (
    <Layout>
      <div className="mt-4" style={{ minHeight: "50vh" }}>
        <h3>Post in Category: {pageContext.category}</h3>
        {nodes.map(post => (
          <div className="my-4">
            <a className="Nunito-800 text-lg" href={post.frontmatter.path}>{post.frontmatter.title} </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default categoryTemplate

export const pageQuery = graphql`
  query($category: String!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
          path
        }
      }
    }
  }
`
