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

    const getCategoryById = (id) => {
      return fetch(`${apiUrl}/api/Category/${id}`)
          .then(res => res.json())
  }

  const updateCategory = (category) => {
    return fetch(`${apiUrl}/api/Category/${category.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    })
      .then(getAllCategories)
  }

      return (
        <CategoryContext.Provider value={{categories, getAllCategories, getCategoryById, addCategory, hardDeleteCategory, updateCategory
         }}>
          {props.children}
        </CategoryContext.Provider>
      );

};
