//Arnold Rispress - Articles
//This module is used to edit articles on the app

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editArticle, getArticleById } from "../ApiManager.js";

export const ArticleEdit = () => {
    const [article, update] = useState({
        title: "",
        synopsis: "",
        url: "",
        date: "",
        tags: ""
    })

    const navigate = useNavigate()

    const { articleId } =useParams()

    useEffect(() => {
        getArticleById(articleId)
        .then((articleArray) => {
            update(articleArray)
        })
    }, [])

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        editArticle(article)
        .then(()=> {
            navigate("/")
        })
    }

    return <>
        <form className="articleForm">
            <h2 className="articleForm--title">Edit Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title of the Article"
                        value={article?.title}
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
                        value={article?.synopsis}
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
                        value={article?.url}
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
                        type="tag"
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
                Edit Article
            </button>
        </form>
    </>
}