import React from "react"
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from "gatsby"

export default function Template({data}) {
  const { mdx } = data 
  return (
    <>
    <Layout>
     <div className="blog-post-container">
       <div className="blog-post">
       <MDXRenderer>{mdx.body}</MDXRenderer>
       </div>
     </div>
    </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`