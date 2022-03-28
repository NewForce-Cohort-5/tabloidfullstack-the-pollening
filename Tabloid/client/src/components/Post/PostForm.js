import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../providers/CategoryProvider";
import {PostContext} from "../../providers/PostProvider";
import { Button } from "react-bootstrap";

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
        <div className="container">
        <h3 className="postForm__title">New Post:</h3>
        <div className="row justify-content-center">
        <div className="col-sm-10 col-lg-10">
        <form className="postForm"> 
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input value={post.title} type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="title"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select>
                        {categories.map((category) =>{
                            return (
                                <option value={category.Id}>{category.Name}</option>
                            )
                        })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <input value={post.content} type="text" id="content" onChange={handleControlledInputChange} required  className="form-control" placeholder="content"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageLocation">Gif Image:</label>
                    <input value={post.imageLocation} type="text" id="imageLocation" onChange={handleControlledInputChange}   className="form-control" placeholder="imageLocation"/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="publishDateTime">Publish Date:</label>
                    <input value={post.publishDateTime} type="text" id="publishDateTime" onChange={handleControlledInputChange}   className="form-control" placeholder="publishDateTime"/>
                </div>
            </fieldset>
            <Button onClick={handleClickSavePost} variant="primary" size="md">
                    Save Post
            </Button>
        </form>
        </div>
        </div>
        </div>
        </>
    )
}