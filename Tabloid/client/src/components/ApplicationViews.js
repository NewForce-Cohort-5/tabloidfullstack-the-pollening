import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  UserProfileContext,
  UserProfileProvider,
} from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import { PostList } from "./Post/PostList";
import { PostContext, PostProvider } from "../providers/PostProvider";
import { TagList } from "./Tag/TagList"
import { TagProvider } from "../providers/TagProvider";

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
     <TagProvider>
     <PostProvider>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/tags" element={<TagList />} />
      </Routes>
      </PostProvider>
      </TagProvider>
   );
  }
}
