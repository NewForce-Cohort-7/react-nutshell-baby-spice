//Arnold Rispress
//This module is used to create a new article for the app

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../ApiManager";




export const ArticleForm = () => {
    const [article, update] = useState({
        title: "",
        synopsis: "",
        url: "",
        date: "",
        tags: ""
    })

    

    const navigate = useNavigate()

    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button")

        const ticketToSendToAPI = {
            userId: userObject.id,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
            date: new Date().toISOString(),
            tags: article.tags.split(",").map((tag) => ({name: tag.trim()}))
        }

        return createArticle(ticketToSendToAPI)
        .then(() => {
            navigate("/")
        })
      
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm--title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title of the Article"
                        value={article.title}
                        onChange={
                            (evt) => {
                                const copy = {...article}
                                copy.title = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description about the article"
                        value={article.synopsis}
                        onChange={
                            (evt) => {
                                const copy = {...article}
                                copy.synopsis = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Please enter the URL for the article"
                        value={article.url}
                        onChange={
                            (evt) => {
                                const copy = {...article}
                                copy.url = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="tags-input-container">
                   
                    <label htmlFor="tags">Tags</label>
                    <input
                        type="text"
                        className="tags-input"
                        placeholder="Enter a tag"
                        value={article.tags}
                        onChange={
                            (evt) => {
                                const copy = {...article}
                                copy.tags = evt.target.value
                                update(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Article
            </button>
        </form>
    )
}