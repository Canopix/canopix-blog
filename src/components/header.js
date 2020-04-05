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
    url: "/",
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
      className="w-11/12 md:w-9/12 flex flex-col md:flex-row  text-center md:text-left justify-between "
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 2,
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 className="text-yellow-500 Nunito-800 m-0 w-full md:w-1/4">
        <Link to="/">{siteTitle}</Link>
      </h3>
      <div className="flex flex-col md:flex-row w-full md:w-1/4 justify-between padding-5 mt-1">
        {subLinks.map(link => (
          <Link to={link.url}>
            <h5 className="text-white Nunito-200 m-0">{link.name}</h5>
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
