import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Dump from './Dump';
import Card from './Card'


const Lastest = () => {
    const data = useStaticQuery(graphql`
    {
        allMdx(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {title: {ne: "About Me"}}}) {
          edges {
            node {
              frontmatter {
                date
                title
                category
                path
                summary
                featuredImage {
                    childImageSharp {
                     fluid {
                       ...GatsbyImageSharpFluid
                     }
                   }
                }
              }
            }
          }
        }
      }
    `)
    const {edges} = data.allMdx;
    return (
        <div className="grid grid-cols-1 gap-3 mt-4">
            {edges.map(post =>
              <Card key={post.node.id} post={post}/>
            )}
        </div>
    )
}

export default Lastest
