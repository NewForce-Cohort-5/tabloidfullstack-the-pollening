import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";


export const TagContext = createContext();

export function TagProvider(props) {

  const apiUrl = "https://localhost:5001";

  const [tags, setTags] = useState([]);


  const getAllTags = () => {
    return fetch(`${apiUrl}/api/Tag`)
      .then((response) => response.json())
      .then(setTags);

  };

  const getTagById = (tagId) => {
    return fetch(`${apiUrl}/api/Tag/${tagId}`)
      .then(responed => responed.json())
  }

  const addTag = (tag) => {
    return fetch(`${apiUrl}/api/Tag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tag)

    }).then(getAllTags);

  }

  const deleteTag = (TagId) => {
    return fetch (`${apiUrl}/api/Tag/${TagId}`,{
      method: "DELETE"
    })
    .then(getAllTags)
  };


  return (
    <TagContext.Provider value={{ tags, getAllTags, addTag, getTagById, deleteTag }}>
      {props.children}
    </TagContext.Provider>
  );
}