import React, { useContext, useNavigate} from "react";
import { Card, CardBody} from "reactstrap";
import { TagContext } from "../../providers/TagProvider";
import { Button } from "reactstrap";

 export const Tag = ({ tag }) => {

    const { deleteTag, GetAllTags } = useContext(TagContext)

    const handleDelete = () => {
        let confirmD = window.confirm("You are about to delete this tag.. are you sure?")

        if(confirmD) {
            deleteTag(tag.id)
            .then(GetAllTags);
        
        }
        else {
            GetAllTags();
        }
    }

    




    return (
        <Card> 
        <CardBody>
        <p>{tag.name}</p>
        <div> <Button variant="secondary" size="md" onClick={handleDelete}> 
                Delete
             </Button></div>
        </CardBody>
        </Card>
    )
};

