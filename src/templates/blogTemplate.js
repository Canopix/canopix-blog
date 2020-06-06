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
       <div className="blog-post text-white">
        <p className="text-yellow-500 Nunito-800">Blog /<a className="ml-1" href={`/category/${data.mdx.frontmatter.category}`}>{`${data.mdx.frontmatter.category}`}</a></p>
        <h1 className="w-full text-center my-16">{data.mdx.frontmatter.title}</h1>
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
        category
      }
    }
  }
`