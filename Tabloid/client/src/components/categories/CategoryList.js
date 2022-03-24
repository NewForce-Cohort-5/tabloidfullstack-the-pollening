import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../providers/CategoryProvider";
import {Accordion} from "react-bootstrap";
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
    <section className="categoryList">
<Accordion defaultActiveKey="0">
    {categories.map((singleCategoryInLoop) =>{
        return (
            <Category key={singleCategoryInLoop.id} CategoryProp={singleCategoryInLoop} />  
    )})}
</Accordion>
</section>
</>
);

};


