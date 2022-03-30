import React from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserProfile.css"

export const UserProfile = ({userProfile}) => {
    return (
        <Accordion.Item eventKey={userProfile.id}>
         <Badge bg="secondary">{userProfile.createDateTime}</Badge>
        <Accordion.Header ><p className="userProfile_diplayname">Display Name - </p> <p> {userProfile.displayName}</p> <p className="userProfile_firstname">First Name - </p> <p > {userProfile.firstName}</p></Accordion.Header>
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
                <Link to={"/"}>
                    <Button className="mt-2" variant="secondary">Read Me! or not</Button>
                </Link>
                </Col> 
            </Row>  
        </Accordion.Body>
      </Accordion.Item>
    )
}