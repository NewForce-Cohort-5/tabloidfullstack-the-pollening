import React, {useState, useEffect, useContext} from "react";
import { PostContext } from "../../providers/PostProvider";
import { useNavigate, useParams} from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../index.css";


export const PostDetails = () => {
    const [post, setPost] = useState();
    const {getPostById, deletePost} = useContext(PostContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
    const currentUserId = currentUser.id;

    useEffect(() => {
        getPostById(id)
        .then(setPost);
    }, [])

    if (!post) {
        return null;
    }

    let month = post.publishDateTime.slice(0,10).split("-")[1]
    let day = post.publishDateTime.slice(0,10).split("-")[2]
    let year = post.publishDateTime.slice(0,10).split("-")[0]
    const formattedDate = `${month}-${day}-${year}`;

    const handleDelete = () => {
      let userInput = prompt("Are you sure you want to delete this post? Press 'Y' for Yes and 'N' for No.");
      if (userInput !== null && userInput.toUpperCase() === "Y" ) {
        deletePost(id)
        .then(() => {
          navigate("/posts");
        });
      }
    };

    return (
     
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
       
        <Card style={{ width: '30rem', margin: '3em auto' }}>
            <Badge bg="secondary">{formattedDate}</Badge>
            <Card.Img variant="top" src={post.imageLocation} />
            <Card.Body>
            <Card.Title>{post.title.toUpperCase()}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Written by: {post.userProfile.displayName}</Card.Subtitle>
            <Card.Text style={{textIndent: '2rem'}}>{post.content}</Card.Text>
            {currentUserId === post.userProfile.id ?
            <>
            <div className="d-grid gap-2">
                <Button variant="primary" size="md" disabled>
                    Edit
                </Button>
                <Button onClick={handleDelete} variant="secondary" size="md">
                    Delete
                </Button>
            </div>
            </> 
            : 
            <>
            <div className="d-grid gap-2">
              <Link to={`/posts`}>
                <Button variant="primary" size="md" >
                    Go Back
                </Button>
              </Link>
            </div>
            </>
            }
            </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  
    )
}
