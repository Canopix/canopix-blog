import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Dump from './Dump';
import Card from './Card'


const Lastest = () => {
    const data = useStaticQuery(graphql`
    {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              frontmatter {
                date
                title
                category
                path
                featuredImage {
                    childImageSharp {
                     fluid {
                       ...GatsbyImageSharpFluid
                     }
                   }
                }
              }
              excerpt
            }
          }
        }
      }
    `)
    const {edges} = data.allMdx;
    return (
        <div>
            <Dump data={data}/>
            <Card post={edges[0]}/>
        </div>
    )
}

export default Lastest
