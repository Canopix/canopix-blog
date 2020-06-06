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
import Sidebar from "./Sidebar"
import Hero from "./Hero"
import MobileFooter from "./MobileFooter"
import Footer from "./Footer"
import "./layout.css"
import wave from "./../static/svg/wave.svg"

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
    <div className="bg-gray-900">
      <section style={{ background: "#41337A" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </section>
      <img
        className="z-0 mt-2 md:mt-0"
        style={{
          position: "absolute",
          top: "20px",
        }}
        src={wave}
      />
      <Hero />
      <div className="z-1 bg-gray-900 Nunito-400 text-white flex flex-col md:-mt-8" style={{minHeight:'90vh'}}>
        <div
          className="w-11/12 p-0"
          style={{
            margin: `0 auto`,
            zIndex: 1,
          }}
        >
          <div
            className="flex flex-col p-4 md:p-8 rounded-lg"
            style={{ background: "#2E333E" }}
          >
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />

        </div>
      </div>
      <MobileFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
