import React, { useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostProvider";
import { Accordion } from "react-bootstrap";
import { Post } from "./Post";
import "../../index.css";

export const MyPostList = () => {
  const { posts, getPostsByUserId} = useContext(PostContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getPostsByUserId(currentUser.id);
  }, []);

  return (
    <>
    <div className="container">
    <h3 className="post__title">My List of Posts:</h3>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-lg-10">
          <Accordion defaultActiveKey="0">
            {posts.map((p) => (
              <Post key={p.id} post={p} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
    </>
  );
};
