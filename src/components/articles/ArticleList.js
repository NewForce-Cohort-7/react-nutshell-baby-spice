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

    return <>
    
    <button onClick={ () => navigate("/articles/create")}>Add Article</button>
    

    <h2>Articles</h2>

    <article className="articles">
        {
           
                articles.map(
                    getNews={getNews} 
                )
            
        }
    </article>
    </>
}