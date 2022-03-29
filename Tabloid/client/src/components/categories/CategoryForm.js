import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../providers/CategoryProvider";
import { Category } from "./Category";
import { useNavigate, useParams  } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const CategoryForm = () => {
    const { addCategory, getCategoryById, updateCategory} = useContext(CategoryContext);
    
    //for edit, hold on to state of task in this view
    const [category, setCategory] = useState({
      name:" "
    })
  //wait for data before button is active
    const [isLoading, setIsLoading] = useState(false);

    const {categoryId} = useParams();
    const navigate = useNavigate();


    

    const submit = (e) => {
      if (category.name ==="")
      {
      window.alert("Please enter a name")
      } else {
        setIsLoading(true);
        if(categoryId){
          updateCategory({
            name: category.name
          })
        .then(() => navigate("/categories"))
      }else{
         addCategory({
           name: category.name
         })
         .then(() => 
            navigate("/categories"));
          };
        };
      }
      
        // Get categories. If categoryId is in the URL, getCategoryById
  useEffect(() => {
    if (categoryId){
      getCategoryById(categoryId)
      .then(category => {
        setCategory(category)
          setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
}, [])

    return (
        <div className="container pt-4">
        <div className="row justify-content-center">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="name" placeholder="Enter new category" id="userId"
                onChange={(e) => setCategory(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" onClick={submit}>
    Create
  </Button>
</Form>
</div>
  </div>
        );
};