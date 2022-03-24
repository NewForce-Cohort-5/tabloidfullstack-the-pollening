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
import {CategoryList} from "./categories/CategoryList";
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
     <CategoryProvider>
     <TagProvider>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/category" element={<CategoryList />} />
      </Routes>
      </TagProvider>
      </CategoryProvider>
   );
  }
}
