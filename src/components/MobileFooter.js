import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faCoffee, faUserCircle } from "@fortawesome/free-solid-svg-icons"

const Links = [
  {
    title: "Home",
    icon: faHome,
  },
  {
    title: "Blog",
    icon: faCoffee,
  },
  {
    title: "About Me",
    icon: faUserCircle,
  },
  
]

const MobileFooter = () => {
  return (
    <div
      className="md:hidden m-0 w-full flex flex-row justify-between sticky z-10 bottom-0"
      style={{ background: "#41337A" }}
    >
      {Links.map(link => (
        <div className={`w-1/${Links.length} flex flex-col h-16 text-white items-center justify-center`}>
          <Link className='mx-auto text-center' to="/">
            <FontAwesomeIcon icon={link.icon} />
            <p className="m-0">{link.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MobileFooter
