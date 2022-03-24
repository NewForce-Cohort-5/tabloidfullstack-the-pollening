import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";


export const TagContext = createContext();

export function TagProvider(props) {

    const apiUrl = "https://localhost:5001";

  const [tags, setTags] = useState([]);


    const getAllTags = () => {
    return  fetch(`${apiUrl}/api/Tag`) 
     .then((response) => response.json())
     .then(setTags);

    };





  return (
    <TagContext.Provider value={{ tags, getAllTags  }}>
       {props.children}
    </TagContext.Provider>
  );
}