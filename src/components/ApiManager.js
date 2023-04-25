export const getNews = () => {
    return fetch('http://localhost:8088/articles')
    .then(response => response.json())
}

export const getEvents = () => {
    return fetch('http://localhost:8088/events?_expand=user&_sort=date&_order=asc')
    .then(response => response.json())
}

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks?_expand=user')
    .then(response => response.json())
}

export const getMessages = () => {
    return fetch('http://localhost:8088/messages?_expand=user')
    .then(response => response.json())
}

export const createEvent = (eventObject) => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObject)
    })
    .then(response => response.json())
}

export const getEventById = (id) => {
    return fetch(`http://localhost:8088/events/${id}`)
    .then(response => response.json())
}

export const editEvent = (eventObject) => {
    return fetch(`http://localhost:8088/events/${eventObject.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(eventObject)

})
.then(response => response.json())
}

export const createArticle = (articleObject) => {
    return fetch(`http://localhost:8088/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObject)
    })
    .then(r => r.json())
}

export const editArticle = (articleObject) => {
    return fetch(`http://localhost:8088/articles/${articleObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObject)
    })
    .then(r => r.json())
}

export const getArticleById = (id) => {
    return fetch(`http://localhost:8088/articles/${id}`)
    .then(r => r.json())
}