import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TagContext } from "../../providers/TagProvider";
import { Tag } from "./Tag"
import { Button } from "reactstrap";

export const TagList = () => {

    const { tags, getAllTags } = useContext(TagContext)

    const navigate = useNavigate();

    useEffect(() => {
        getAllTags();
    }, []);


    console.log(tags);

    return (
        <>
            <h2> Tags: </h2>

            <Button outline onClick={() => navigate("/add/tags")}>
                Create New
            </Button>
            {' '}

            <div className="container">
                {tags.map((tag) => (
                    <Tag tag={tag} key={tag.id} />
                ))}
            </div>
        </>
    );
};

