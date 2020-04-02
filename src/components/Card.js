import React from 'react'

const Card = ({post}) => {
    const {
        node: article
    } = post;
    const img = article.frontmatter.featuredImage.childImageSharp.fluid.src;
    return (
        <div className="flex text-white content-end p-2  min-w-full">
            <a href={article.frontmatter.path}>
                <div>
                    <h2 className="m-0 Nunito-800">{article.frontmatter.title}</h2>
                    <p className="Nunito-200">{article.frontmatter.date}</p>
                    <p className="Nunito-400">{article.excerpt}</p>
                </div>
            </a>
        </div>
    )
}

export default Card
