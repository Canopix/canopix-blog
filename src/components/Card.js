import React from 'react'

const Card = ({post}) => {
    const {
        node: article
    } = post;
    const img = article.frontmatter.featuredImage.childImageSharp.fluid.src;
    return (
        <div className="flex content-end p-2  min-w-full">
            <a href={article.frontmatter.path}>
                <div>
                    <h2 className="m-0">{article.frontmatter.title}</h2>
                    <p>{article.frontmatter.date}</p>
                    <p>{article.excerpt}</p>
                </div>
            </a>
        </div>
    )
}

export default Card
