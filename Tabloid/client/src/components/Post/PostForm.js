import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../providers/CategoryProvider";
import {PostContext} from "../../providers/PostProvider";
import { Button, Form, FormSelect} from "react-bootstrap";

export const PostForm = () => {
    
    const {addPost} = useContext(PostContext);
    const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
    const currentUserId = currentUser.id;
   
    const { categories, getAllCategories } = useContext(CategoryContext);

  useEffect(() => {
    getAllCategories();
  }, []);


    const [post, setPost] = useState({
        userProfileId: currentUserId,
        title:"", 
        content:"",
        category:"",
        imageLocation: "",
        publishDateTime: ""    
    });

    const navigate = useNavigate();

    const handleControlledInputChange = (e) => {
        const newPost = { ...post }
        newPost[e.target.id] = e.target.value
        setPost(newPost)
    }

    const handleClickSavePost = (e) => {
        e.preventDefault();
        addPost(post).then(() => navigate('/'));  
    }

    return (
        <>
        <h3 className="postForm__title">New Post Form</h3>
        <Form className="post__form">
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>Title:</Form.Label>
    <Form.Control value={post.title} onChange={handleControlledInputChange} type="text" required autoFocus placeholder="Enter a title for your post" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="category">
    <Form.Label>Category:</Form.Label>
    <FormSelect required autoFocus onChange={handleControlledInputChange}>
        <option>Select a category</option>
        {categories.map((category) => {
            return (
                <option value={category.id}>{category.name}</option>
            )
        })}
    </FormSelect>
  </Form.Group>

  <Form.Group className="mb-3" controlId="content">
    <Form.Label>Content:</Form.Label>
    <Form.Control value={post.content} onChange={handleControlledInputChange} type="text" id="content" required autoFocus placeholder="Enter content for your post" as="textarea" aria-label="With textarea" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="gifImage">
    <Form.Label>Gif Image:</Form.Label>
    <Form.Control value={post.imageLocation} onChange={handleControlledInputChange} type="text" id="gifImage" autoFocus placeholder="Enter enter a url to your gif" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="gifImage">
    <Form.Label>Publish Date:</Form.Label>
    <Form.Control value={post.publishDateTime} onChange={handleControlledInputChange} type="date" autoFocus id="publishDateTime" />
  </Form.Group>


  <Button onClick={handleClickSavePost} variant="primary" size="md">
    Save Post
  </Button>
</Form>
        </>
    )
}