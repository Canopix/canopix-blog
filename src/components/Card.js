import React from 'react'

const Card = ({post}) => {
    const {
        node: article
    } = post;
    return (
        <div className="p-2 border min-w-full rounded border-gray-400">
            <h1>{article.frontmatter.title}</h1>
            <p>{article.excerpt}</p>
            <img src={article.frontmatter.featuredImage.childImageSharp.fluid.src}></img>

            </div>
    )
}

export default Card
