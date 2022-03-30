import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { Accordion, Button } from "react-bootstrap";
import { Post } from "./Post";
import "../../index.css";
import { Link } from "react-router-dom";

export const UserProfileList = () => {
  const { userProfiles, getAllUserProfiles } = useContext(UserProfileContext);

  useEffect(() => {
    getAllUserProfiles();
  }, []);

  return (
    <>
    
    <div className="container">
    <h3 className="post__title">List of Users:</h3>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-lg-10">
          <Accordion defaultActiveKey="0">
            {userProfiles.map((p) => (
              <Post key={p.id} post={p} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
    </>
  );
};