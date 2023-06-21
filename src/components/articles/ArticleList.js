//Arnold Rispress//
//This module is used for rendering the Articles on the main page//

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNews } from "../ApiManager";
import { deleteArticle } from "../ApiManager";
import "./articles.css"
import TagsInput from "react-tagsinput";
import 'react-tagsinput/react-tagsinput.css';

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
                    
                    <div className="article--tags">Tags: <ul>
                                 {article.tags.map((tag, index) => (
                             <li key={index}>{tag}</li>
                          ))}
                        </ul> 
                    </div>
                    {/* WILL HAVE TO RESET PAGE TO SEE THAT ARTICLE IS GONE */}
                    <button onClick={() => deleteArticle(article.id)}  className="button--delete">
                        I don't want to see this article</button>
                        
                   

                </section>
            })
        }

        <button onClick={() => navigate("/article/create")} className="btn btn-primary" >Add Article</button>
    
    </article>
    
}