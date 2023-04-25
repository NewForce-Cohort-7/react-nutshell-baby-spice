//Arnold Rispress//
//This module is used for rendering the Articles on the main page//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNews } from "../ApiManager";
import "./articles.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getNews()
            .then(
                (articles) => {
                    setArticles(articles)
                }
            )
        },
        []
    )

    return <article className="articles">
        {
            articles.map(article => {
                return <section className="article" key={`article--${article.id}`}>
                    <div className="article--title">
                        <a href={`/article/edit/${article.id}`} title="Click to edit">{article.title}</a>
                    </div>
                    <div className="article--synopsis">Synopsis: {article.synopsis}</div>
                    <div className="article--url">URL: {article.url}</div>
                </section>
            })
        }

        <button onClick={() => navigate("/article/create")}>Add Article</button>
    
    </article>
    
}