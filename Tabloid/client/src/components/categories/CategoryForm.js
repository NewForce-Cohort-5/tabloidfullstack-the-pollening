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

    const handleControlledInputChange = (event) => {
      const newCategory = { ...category }
      newCategory[event.target.id] = event.target.value
      setCategory(newCategory)
  }


    const handleSaveCategory = (e) => {
      if (category.name ==="")
      {
      window.alert("Please enter a name")
      } else {
        setIsLoading(true);
        if(categoryId){
          updateCategory(category)
        .then(() => navigate("/categories"))
      }else{
         addCategory(category)
         .then(() => 
            navigate("/categories"));
          };
        };
      }
      
      console.log(category.name)
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
  <Form.Group className="mb-3" >
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="text" placeholder="Enter new category" id="name" value={category.name}
                onChange={handleControlledInputChange}/>
  </Form.Group>
  <Button variant="primary" disabled={isLoading} onClick={e => {
    e.preventDefault() 
    handleSaveCategory()}}>
    {categoryId ? <>Save Update</> : <>Create</>}
  </Button>{" "}
  <Button variant="secondary" onClick={() => navigate("/categories")}>Cancel</Button>
</Form>
</div>
  </div>
        );
};