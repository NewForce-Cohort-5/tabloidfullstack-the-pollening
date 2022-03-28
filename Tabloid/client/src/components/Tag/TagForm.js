import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { TagContext } from "../../providers/TagProvider"
import { Button } from "reactstrap";
const TagForm = () => {
    const { getAllTags, addTag } = useContext(TagContext)

    const [tag, setTags] = useState({
        name: " ",
    });

    const navigate = useNavigate();

    useEffect(() => {
        getAllTags()
    }, []);


    const handldeInputChange = (e) => {
        const NewTag = { ...tag }
        NewTag[e.target.id] = e.target.value

        setTags(NewTag)
    }

    const SaveTag = (e) => {
        e.preventDefault()

        if (tag.name === "") {
            alert("Please enter a tag name!")
        }
        else {
            addTag(tag)
                .then(navigate("/tags"));
        }
    }

    return (
        <form className="TagForm">

            <h3>Add New Tag</h3>
            <fieldset>
                <div className="Form">
                    <label>Tag Name:</label>
                    <input type="text" id="name" onChange={handldeInputChange} required autoFocus className="form-control" value={tag.name} />
                </div>
            </fieldset>

            <div className="form-group row col-sm-12 mx-auto mb-3">
                <div className="col-sm-12">
                    <Button primary type="submit" className="btn btn-primary" onClick={SaveTag}>
                        Save Tag
                    </Button>
                    <Button outline onClick={() => navigate("/tags")}>
                        Back to List
                    </Button>
                </div>
            </div>
        </form>
    

        
    )

}

export default TagForm;