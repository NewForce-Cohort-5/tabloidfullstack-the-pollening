import React from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserProfile = ({userProfile}) => {
    return (
        <Accordion.Item eventKey={userProfile.id}>
         <Badge bg="secondary">{userProfile.createDateTime}</Badge>
        <Accordion.Header>{userProfile.displayName}</Accordion.Header>
        <Accordion.Body>
            <Row>
                <Col>
                <h5>Full Name</h5>
                {userProfile.fullName}
                </Col> 
                <Col>
                <h5>User Type</h5>
                {userProfile.userType.name}
                </Col>
                <Col>
                <Link to={`/posts/${userProfile.id}`}>
                    <Button className="mt-2" variant="secondary">Read Me! or not</Button>
                </Link>
                </Col> 
            </Row>  
        </Accordion.Body>
      </Accordion.Item>
    )
}