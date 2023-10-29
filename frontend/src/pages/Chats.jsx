import React from "react";
import ChatCard from "../components/ChatCard";
import { Grid } from "@mui/material";

export default function Chats({changeState, setAccount}) {
    return (
        <Grid container spacing={2}>
            {["Gaurish Baliga", "Tejal Ambhore", "Nidhi Bhandari", "Raj Agrawal", "Jagjit Bhumra"].map(
                (text, index) => 
                    <Grid item sx={3}>
                        <ChatCard name = {text} index = {index} changeState={changeState} setAccount = {setAccount}/>
                    </Grid>
            )}
        </Grid>
    );
}
