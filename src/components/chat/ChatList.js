//AUTHOR:Aaron Dean
//Purpose: Lists all messages and handles the like and dislike button

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getChats, getOnlyChats } from "../ApiManager";

export const ChatList = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    getOnlyChats()
      .then((chatArray) => {
        const updatedChatArray = chatArray.map((chat) => {
          if (!chat.dislikes) {
            chat.dislikes = 0;
            chat.likes = 0
          }
          return chat;
        });
        setChats(updatedChatArray);
      });
  }, []);

  const handleLike = (id) => {
    const chatToUpdate = chats.find((chat) => chat.id === id);
    const updatedChat = { ...chatToUpdate, likes: chatToUpdate.likes + 1 };
    const updatedChats = chats.map((chat) =>
      chat.id === id ? updatedChat : chat
    );
    setChats(updatedChats);
    fetch(`http://localhost:8088/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedChat),
    });
  };

  const handleDislike = (id) => {
    const chatToUpdate = chats.find((chat) => chat.id === id);
    const updatedChat = {
      ...chatToUpdate,
      dislikes: chatToUpdate.dislikes + 1,
    };
    const updatedChats = chats.map((chat) =>
      chat.id === id ? updatedChat : chat
    );
    setChats(updatedChats);
    fetch(`http://localhost:8088/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedChat),
    });
    
  };
  return (
    <>
      <h2>List of Messages</h2>
      <article className="chats">
        {chats.map((chat) => (
          <section className="chat" key={`chat--${chat.id}`}>
            <Link to={`/messages/edit/${chat.id}`}>{chat.message}</Link>
            <div>
              <button className="button" onClick={() => handleLike(chat.id)}>Like</button>
              <span>{chat.likes}</span>
              <button className="button" onClick={() => handleDislike(chat.id)}>Dislike</button>
              <span>{chat.dislikes}</span>
            </div>
          </section>
        ))}
      </article>
    </>
  );
};
