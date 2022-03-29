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
      const addCategory = (category) => {
        return fetch(`${apiUrl}/api/Category`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }).then(getAllCategories);
      };

      const hardDeleteCategory = (categoryId) => {
        return fetch(`${apiUrl}/api/Category/${categoryId}`, {
              method: "DELETE"
          })
              .then(getAllCategories)
      }

      return (
        <CategoryContext.Provider value={{categories, addCategory, getAllCategories, hardDeleteCategory
         }}>
          {props.children}
        </CategoryContext.Provider>
      );

};
