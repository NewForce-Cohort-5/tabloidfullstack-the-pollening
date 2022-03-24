import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";

export const CategoryContext = createContext();

export function CategoryProvider(props) {

    const apiUrl = "https://localhost:5001";

    const [categories, setCategories] = useState([]);

    const getAllCategories = () => {
        return fetch(`${apiUrl}/api/category`)
          .then((res) => res.json())
          .then(setCategories);
      };

      return (
        <CategoryContext.Provider value={{categories,
            getAllCategories
         }}>
          {props.children}
        </CategoryContext.Provider>
      );

};
