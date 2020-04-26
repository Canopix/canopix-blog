import React from "react"
import {Link} from "gatsby"

const Card = ({ post }) => {
  const { node: article } = post
  return (
    <div className="flex text-white content-end p-2  min-w-full">
      <div>
        <Link to={article.frontmatter.path}>
          <h2 className="m-0 Nunito-800">{article.frontmatter.title}</h2>
        </Link>
        <p className="m-0 leading-relaxed Nunito-400 italic text-gray-400">{article.frontmatter.summary}</p>
        <div className="flex flex-row text-yellow-500 items-center text-lg">
          <Link to={article.frontmatter.path}>
            <p className="m-0 mr-1">Read →</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
