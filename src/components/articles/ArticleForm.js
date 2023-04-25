import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ArticleForm = () => {
    const [article, update] = useState({
        title: "",
        synopsis: "",
        url: ""
    })

    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button")

        const ticketToSendToAPI = {
            userId: nutshellUserObject.id,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url
        }

        return fetch(`http://localhost:8088/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSendToAPI)
        })
        .then(r => r.json())
        .then(() => {
            navigate("/articles")
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
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Article
            </button>
        </form>
    )
}