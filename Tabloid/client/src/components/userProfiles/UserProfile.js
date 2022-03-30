import React from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserProfile = ({userProfile}) => {
    return (
        <Accordion.Item eventKey={userProfile.id}>
         <Badge bg="secondary">{formattedDate}</Badge>
        <Accordion.Header>{post.title.toUpperCase()}</Accordion.Header>
        <Accordion.Body>
            <Row>
                <Col>
                <h5>Author</h5>
                {post.userProfile.displayName}
                </Col> 
                <Col>
                <h5>Category</h5>
                {post.category.name}
                </Col>
                <Col>
                <Link to={`/posts/${post.id}`}>
                    <Button className="mt-2" variant="secondary">Read Me!</Button>
                </Link>
                </Col> 
            </Row>  
        </Accordion.Body>
      </Accordion.Item>
    )
}