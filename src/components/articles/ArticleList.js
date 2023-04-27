//Arnold Rispress//
//This module is used for rendering the Articles on the main page//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNews } from "../ApiManager";
import "./articles.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([])

    const navigate = useNavigate()
    
    
    const fetchArticles = () => { // this is the GET request to get all articles from the database (fetchAllArticles)

       
    
        fetch(`http://localhost:8088/articles`)
          .then(response => response.json())
          .then(data => {
            const sortedArticles = data.sort((a, b) => new Date(b.date) - new Date(a.date)) // sorts articles by date
            const updatedArticles = sortedArticles.map(article => ({ // this is the map function to add tags to the articles
              ...article, 
              tags: article.tags ? article.tags.map(tag => tag.name) : [], // grabbing the tag names from the tags array 
            }))
            // update state with new articles
            setArticles(updatedArticles)
          })
      }
    
    
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
                    <div className="article--tags">Tags:</div>
                   

                </section>
            })
        }

        <button onClick={() => navigate("/article/create")} className="btn btn-primary" >Add Article</button>
    
    </article>
    
}