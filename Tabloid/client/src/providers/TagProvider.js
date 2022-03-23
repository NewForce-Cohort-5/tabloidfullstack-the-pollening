import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";


export const TagContext = createContext();

export function TagProvider(props) {


  const [tags, setTags] = useState([]);


    const getAllTags = () => {
    return  fetch("https://localhost:44360/api/Tag") 
     .then((response) => response.json())
     .then(setTags);

    };





  return (
    <TagContext.Provider value={{ tags, getAllTags  }}>
       {props.children}
    </TagContext.Provider>
  );
}