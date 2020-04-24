import React from "react"

const Card = ({ post }) => {
  console.log(post);
  const { node: article } = post
  return (
    <div className="flex text-white content-end p-2  min-w-full">
      <div>
        <a href={article.frontmatter.path}>
          <h2 className="m-0 Nunito-800">{article.frontmatter.title}</h2>
        </a>
        <a href={`/category/${article.frontmatter.category}`}>
          <p className="text-yellow-500 Nunito-400 m-0">
            {article.frontmatter.category}
          </p>
        </a>
        <p className="Nunito-200">{article.frontmatter.date}</p>
        <p className="Nunito-400">{article.excerpt}</p>
      </div>
    </div>
  )
}

export default Card
