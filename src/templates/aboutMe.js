import React from "react"
import Layout from '../components/layout';
import Dump from '../components/Dump';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from "gatsby"

export default function Template({data}) {
  const { mdx } = data 
  return (
    <>
    <Layout>
     <div className="blog-post-container">
       <div className="blog-post text-white text-justify text-xl leading-snug">
       <h1 className="text-center w-full">{mdx.frontmatter.title}</h1>
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
        path
        title
      }
    }
  }
`