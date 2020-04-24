import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const subLinks = [
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "About Me",
    url: "/about-me",
  },
  {
    name: "Contact",
    url: "/",
  },
]

const Header = ({ siteTitle }) => (
  <>
  <header>
    <div
      className="w-11/12 mx-auto p-1 md:pt-4 md:w-9/12 flex flex-col md:flex-row  text-center md:text-left justify-between "
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 2,
      }}
    >
      <h3 className="text-4xl md:text-2xl my-0 text-yellow-500 Nunito-800 m-0 w-full md:w-1/4">
        <Link to="/">{siteTitle}</Link>
      </h3>
      <div className="hidden  md:flex flex-col md:flex-row w-full md:w-1/4 justify-between items-center padding-5 mt-1">
        {subLinks.map(link => (
          <Link to={link.url}>
            <h5 className="text-white Nunito-400 m-0">{link.name}</h5>
          </Link>
        ))}
      </div>
    </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
