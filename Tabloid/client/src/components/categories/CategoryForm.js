import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../providers/CategoryProvider";
import { Category } from "./Category";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const CategoryForm = () => {
    const { addCategory} = useContext(CategoryContext);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const submit = (e) => {
        const category = {
            name
        };
        addCategory(category).then((c) => {
            
            navigate("/categories");
          });
        };

    return (
        <div className="container pt-4">
        <div className="row justify-content-center">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="name" placeholder="Enter new category" id="userId"
                onChange={(e) => setName(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" onClick={submit}>
    Create
  </Button>
</Form>
</div>
  </div>
        );
};