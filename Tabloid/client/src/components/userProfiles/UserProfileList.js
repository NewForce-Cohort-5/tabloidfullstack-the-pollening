import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { Accordion, Button } from "react-bootstrap";
import { UserProfile } from "./UserProfile";
import "../../index.css";
import { Link } from "react-router-dom";

export const UserProfileList = () => {
  const { userProfiles, getAllUserProfiles } = useContext(UserProfileContext);

  useEffect(() => {
    getAllUserProfiles();
  }, []);

  console.log(userProfiles)
  return (
    <>
    
    <div className="container">
    <h3 className="post__title">List of Users:</h3>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-lg-10">
          <Accordion defaultActiveKey="0">
            {userProfiles.map((u) => (
              <UserProfile key={u.id} userProfile={u} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
    </>
  );
};