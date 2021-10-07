import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Header from "../Header/Header";

const PostCreation = () => {
    return (  
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <form onSubmit={() => {}}>
                    <TextField
                    id= 'title'
                    name= 'title'
                    label= 'Title'
                    fullWidth
                    />
                    <TextField
                    id= 'owner'
                    name= 'owner'
                    label= 'Owner'
                    fullWidth
                    />
                    <Button 
                    type='submit'
                    fullWidth
                    variant= 'raised'
                    color= 'primary'
                    >
                    Submit
                    </Button>
                </form>
            </div>

        </div>
    );
}
 
export default PostCreation;