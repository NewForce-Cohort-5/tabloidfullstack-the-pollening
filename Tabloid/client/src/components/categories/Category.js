import React from "react";
import {ListGroup} from "react-bootstrap";

import {Link } from "react-router-dom";
//we're just using the Card component that comes with reactstrap to organize some of the category details.
export const Category = ({CategoryProp}) => {
    return (
        <ListGroup.Item id={CategoryProp.id}> {CategoryProp.name}</ListGroup.Item>
    )
}

