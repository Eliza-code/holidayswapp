import React from "react";
import { useFormik } from "formik"
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const initialValues = {
    title: "",
    owner: "",
    description: "",
    country: "",
    state: "",
    city: "",
    type: "",
    points: "",
    sleeps: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    surfaceM2: "",
    smokersWelcome: "",
    petsWelcome: "",
    childremWelcome: "",
    wifi: "",
    tv: "",
    washing_machine: "",
    fridge: "",
    a_c: "",
    private_parking: "",
    image: [],
    rating : "",
}

const PostCreation = () => {

    const formik = useFormik({
        initialValues,

    })
    return (  
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Box 
                    component="form" 
                    sx={{ 
                        display: "flex", 
                        flexDirection: "column",
                        alignItems: "center", 
                        "& .MuiTextField-root": { m: 2, width: "17rem" },
                    }}
                    autoComplete="off"
                >
                    <TextField
                    required
                    id= 'title'
                    name= 'title'
                    label= 'Title'
                    type= 'text'
                    placeholder= 'Title'
                    value= {}
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
                </Box>
            </div>

        </div>
    );
}
 
export default PostCreation;