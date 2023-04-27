//Arnold Rispress - Articles
//This module is used to edit articles on the app

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editArticle, getArticleById, getArticleTags } from "../ApiManager.js";
import TagsInput from "react-tagsinput";
import 'react-tagsinput/react-tagsinput.css'; //just copied from ChatGPT...no css file

export const ArticleEdit = () => {
    const [article, update] = useState({
        title: "",
        synopsis: "",
        url: "",
        date: "",
        tags: []
      
    })

    const [tags, setTags] = useState([])

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
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <TagsInput value={article.tags} 
                            onChange={setTags}
                            inputProps={{placeholder: 'Enter a tag'}}
                            addKeys={[9, 13, 32]} //Add tags on tab, enter, and space keys
                            onlyUnique={true} //Allow only unique tags
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