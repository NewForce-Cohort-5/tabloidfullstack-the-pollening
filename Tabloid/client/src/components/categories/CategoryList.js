import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../providers/CategoryProvider";
import {ListGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Category} from "./Category";
import "./Category.css";

export const CategoryList = () => {
    const {categories, getAllCategories} = useContext(CategoryContext)

    useEffect(() => {
        getAllCategories();
      }, []);
// const user = JSON.parse(localStorage.getItem("gifterUser"))

return (
    <>
        <p className="category__title"> Category Page</p>
        <Button className="category__button" variant="outline-primary" href="/categories/add">Create Category</Button>
        <p className="categoryList__title"> List of Categories</p>
            <section className="categoryList">
                <ListGroup> 
                    {categories.map((singleCategoryInLoop) =>{
                    return (
                    <Category key={singleCategoryInLoop.id} CategoryProp={singleCategoryInLoop} />  
                    )})}
                </ListGroup>
            </section>
    </>
);

};


