export const getNews = () => {
    return fetch('http://localhost:8088/news?_expand=user')
    .then(response => response.json())
}

export const getEvents = () => {
    return fetch('http://localhost:8088/events?_expand=user')
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