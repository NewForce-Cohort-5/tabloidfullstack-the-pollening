import React from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


export const Post = ({post}) => {
    return (
        <Accordion.Item eventKey={post.id}>
        <Accordion.Header><Badge bg="secondary">{post.publishDateTime.slice(0,10)}</Badge>{post.title}</Accordion.Header>
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
                <Button className="mt-2" variant="secondary" disabled>Read Me!</Button>
                </Col> 
            </Row>  
        </Accordion.Body>
      </Accordion.Item>
    )
}