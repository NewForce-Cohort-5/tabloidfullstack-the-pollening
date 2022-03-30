import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  UserProfileContext,
  UserProfileProvider,
} from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import { CategoryProvider } from "../providers/CategoryProvider";
import { CategoryList} from "./categories/CategoryList";
import { CategoryForm } from "./categories/CategoryForm";
import { PostList } from "./Post/PostList";
import { PostContext, PostProvider } from "../providers/PostProvider";
import { PostDetails } from "./Post/PostDetails";
import { TagList } from "./Tag/TagList"
import TagForm from "./Tag/TagForm";
import { TagProvider } from "../providers/TagProvider";
import { PostForm } from "./Post/PostForm";
import { MyPostList } from "./Post/MyPostList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
        
      </Routes>
    );
  }
  else{
   return(
     <CategoryProvider>
     <TagProvider>
     <PostProvider>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/myposts" element={<MyPostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/create" element={<PostForm />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/add/tags" element={<TagForm />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/add" element={<CategoryForm />} />
      </Routes>
      </PostProvider>
      </TagProvider>
      </CategoryProvider>
   );
  }
}
