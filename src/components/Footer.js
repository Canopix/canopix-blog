import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import gatsbyLogo from "./../static/svg/gatsby-monogram.svg"
import netlify from "./../static/svg/netlify.svg"

const links = [
  {
    icon: faGithub,
    link: "https://github.com/Canopix",
  },
  {
    icon: faTwitter,
    link: "https://twitter.com/EmanuelCanova",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/canovaemanuel/",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/emanuel-canova/",
  },
]

const Footer = () => {
  return (
    <div className="flex flex-row space-between mt-8">
      <div className="Nunito-200 text-sm flex flex-col justify-center h-16 w-8/12 md:w-9/12">
        <div className="flex flex-row items-center">
          <p className="m-0">Made with </p>
          <a href="https://www.gatsbyjs.org/" target="_blank">
            <img
              style={{ width: 25, height: 25, margin: "0 10px 0 10px" }}
              src={gatsbyLogo}
            />
          </a>
          <p className="m-0"> deployed by </p>
          <a href="https://www.netlify.com/" target="_blank">
            <img
              style={{ width: 25, height: 25, margin: "0 10px 0 10px" }}
              src={netlify}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center h-16 w-4/12 md:w-3/12">
        {links.map(link => (
          <a target="_blank" href={link.link}>
            <FontAwesomeIcon
              className="cursor-pointer hover:text-yellow-500 text-xl md:text-3xl"
              icon={link.icon}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
