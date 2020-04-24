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
import "./layout.css"
import wave from "./../static/svg/wave.svg"
import gatsbyLogo from "./../static/svg/gatsby-monogram.svg"
import netlify from "./../static/svg/netlify.svg"

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
      <div className="z-1 bg-gray-900 Nunito-400 text-white flex flex-col min-h-screen md:-mt-8">
        <div
          className="w-11/12 md:w-9/12 p-0"
          style={{
            margin: `0 auto`,
            zIndex: 1,
          }}
        >
          <div
            className="flex flex-row p-4 md:p-16 rounded-lg"
            style={{ background: "#2E333E" }}
          >
            <main className="flex-grow">{children}</main>
          </div>

          
          <footer className="bottom-0 mt-8 Nunito-200 text-sm flex flex-col">
            <div className="text-gray-200">
              © {new Date().getFullYear()},{` `}
              <a href="https://www.emanuelcanova.com">Emanuel Canova</a>
            </div>
            <div className="flex flex-row">
              <p>Made with </p>
              <a href="https://www.gatsbyjs.org/" target="_blank">
                <img
                  style={{ width: 25, height: 25, margin: "0 10px 0 10px" }}
                  src={gatsbyLogo}
                />
              </a>
              <p> deployed by </p>
              <a href="https://www.netlify.com/" target="_blank">
                <img
                  style={{ width: 25, height: 25, margin: "0 10px 0 10px" }}
                  src={netlify}
                />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
