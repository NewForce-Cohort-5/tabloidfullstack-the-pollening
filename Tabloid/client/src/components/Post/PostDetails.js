import React, {useState, useEffect, useContext} from "react";
import { PostContext } from "../../providers/PostProvider";
import { useParams } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

export const PostDetails = () => {
    const [post, setPost] = useState();
    const {getPostById} = useContext(PostContext);
    const {id} = useParams();

    useEffect(() => {
        getPostById(id)
        .then(setPost);
    }, [])

    if (!post) {
        return null;
    }

    return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
       
        <Card style={{ width: '30rem', margin: '3em auto' }}>
            <Badge bg="secondary">{post.publishDateTime.slice(0,10)}</Badge>
            <Card.Img variant="top" src={post.imageLocation} />
            <Card.Body>
            <Card.Title>{post.title.toUpperCase()}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Written by: {post.userProfile.displayName}</Card.Subtitle>
            <Card.Text>{post.content}</Card.Text>
            <div className="d-grid gap-2">
                <Button variant="primary" size="md">
                    Edit
                </Button>
                <Button variant="secondary" size="md">
                    Delete
                </Button>
            </div>
            </Card.Body>
        </Card>
        </div>
      </div>
    </div>
    )
}