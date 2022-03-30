import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {

    const [posts, setPosts] = useState([]);
    const apiUrl = "https://localhost:5001";

  const getAllPosts = () => {
    return fetch(`${apiUrl}/api/Post`)
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostById = (id) => {
    return fetch(`${apiUrl}/api/Post/${id}`)
    .then((res) => res.json())
  }

  const addPost = (post) => {
    return fetch(`${apiUrl}/api/Post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getAllPosts);
  };

  const deletePost = (id) =>  {
    return fetch(`${apiUrl}/api/Post`, {
      method: "DELETE",
    }).then(getAllPosts);
  };


  return (
    <PostContext.Provider value={{ posts, getAllPosts, getPostById, addPost, deletePost }}>
      {props.children}
    </PostContext.Provider>
  );
};