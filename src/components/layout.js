/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from './Sidebar'
import "./layout.css"
import wave from './../static/svg/wave.svg'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  return (
    <>
      <section style={{  background: '#41337A'}} >
        <Header siteTitle={data.site.siteMetadata.title} />
      </section>
      <img
        className="z-0"
        style={{
          position: "absolute",
          top: '20px',
        }} src={wave} />
      <div className="z-1 bg-gray-900 Nunito-400 text-white flex flex-col min-h-screen">
        <div className="h-8"/>
        <div
          style={{
            margin: `0 auto`,
            width: 960,
            padding: `0px 1.0875rem 1.45rem`,
            zIndex: 1,
          }}
        >
          <div className=' flex flex-row p-16 rounded-lg'
            style={{ background: '#2E333E' }}
          >
            <main className="flex-grow">{children}</main>
            <Sidebar categories={data.allMdx.distinct} />
          </div>
          <footer className="bottom-0 Nunito-800 text-yellow-500">
            © {new Date().getFullYear()},
          {` `}
            <a href="https://www.emanuelcanova.com">Emanuel Canova</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
