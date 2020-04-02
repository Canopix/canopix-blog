import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Dump from '../components/Dump'

function categoryTemplate({ pageContext, data }) {
  const {nodes} = data.allMdx;
  return (
    <Layout>
      <Dump data={data}/>
      <h3>Category: {pageContext.category}</h3>
      {nodes.map(post => post.frontmatter.title)}
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
