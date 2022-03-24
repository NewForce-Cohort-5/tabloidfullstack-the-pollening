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

  return (
    <PostContext.Provider value={{ posts, getAllPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};