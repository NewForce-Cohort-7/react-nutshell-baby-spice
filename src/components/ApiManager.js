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

export const getChats = () => {
  return fetch('http://localhost:8088/messages?_expand=user')
    .then(response => response.json())
}

export const getOnlyChats = () => {
    return fetch('http://localhost:8088/messages')
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

export const createTask = (taskObject) => {
  console.log('createTask called:', taskObject);
  return fetch('http://localhost:8088/tasks', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObject)
  })
    .then(response => response.json())
}


export const getTaskById = (id) => {
  return fetch(`http://localhost:8088/tasks/${id}`)
    .then(response => response.json())
}

export const getCompletedTasks = () => {
  return fetch(`http://localhost:8088/tasks?completed=true`)
    .then(response => response.json())
}
export const getTodos = () => {
  return fetch(`http://localhost:8088/tasks?completed=false`)
    .then(response => response.json())
}

export const editTask = (taskObject) => {
  return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObject)

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

export const getArticleTags = () => {
    return fetch(`http://localhost:8088/tags`)
    .then(r => r.json())
}

export const getFriendsByFriendId = (id) => {
    return fetch(`http://localhost:8088/friends?_expand=user&friendId=${id}`)
    .then(r => r.json())
}

export const getUserFriends = () => {
  return fetch('http://localhost:8088/users?_embed=friends')
    .then(response => response.json())
}

export const addFriend = (userId, friendId) => {
  return fetch(`http://localhost:8088/friends`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId: +userId,
      friendId: +friendId
    })

  })
    .then(response => response.json())
}

export const deleteFriend = (id) => {
    return fetch(`http://localhost:8088/friends/${id}`, {
        method: "DELETE"
    })
}