import React, { useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostProvider";
import { Accordion } from "react-bootstrap";
import { Post } from "./Post";

export const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
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
