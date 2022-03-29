import React, { useContext, useNavigate} from "react";
import { Card, CardBody} from "reactstrap"
import { TagContext } from "../../providers/TagProvider";
import { button }

 export const Tag = ({ tag }) => {

    const { DeleteTag, GetAllTags } = useContext(TagContext)

    const handleDelete = (d) => {
        let confirmD = window.confirm("You are about to delete this tag.. are you sure?")

        if(confirmD) {
            DeleteTag(Tag.id)
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

