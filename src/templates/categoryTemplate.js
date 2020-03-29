import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

export default function categoryTemplate({ pageContext, data }) {
  return (
    <Layout>
      <h1>{pageContext.categoryName}</h1>
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
        }
      }
    }
  }
`
