export const getNews = () => {
    return fetch('http://localhost:8088/news?_expand=user')
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

export const getChats = () => {
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

export const getChatById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
    .then(response => response.json())
}

export const editChat = (chatObject) => {
    return fetch(`http://localhost:8088/messages/${chatObject.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(chatObject)

})
.then(response => response.json())
}


