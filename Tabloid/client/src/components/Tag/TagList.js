import React, { useContext, useEffect } from "react";
import { TagContext } from "../../providers/TagProvider";
import { Tag }from "./Tag"

export const TagList = () => {

    const { tags, getAllTags } = useContext(TagContext)

    

    useEffect(() => {
        getAllTags();
    }, []);


    console.log(tags);

    return (
        <>
        <h2> Tags: </h2>

        <div className="container">
        {tags.map((tag) => (
            <Tag tag={tag} key={tag.id} />
        ))}
        </div>
        </>
    );
};

