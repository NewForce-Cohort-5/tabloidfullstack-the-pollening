import React from "react";
import { Accordion, Badge } from "react-bootstrap";


export const Post = ({post}) => {
    return (
        <Accordion.Item eventKey={post.id}>
        <Accordion.Header><Badge>{post.publishDateTime.slice(0,10)}</Badge>{post.title}</Accordion.Header>
        <Accordion.Body>
            {post.userProfile.displayName}
            {post.category.name}
        </Accordion.Body>
      </Accordion.Item>
    )
}