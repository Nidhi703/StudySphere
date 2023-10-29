import React from 'react'
import { Grid } from '@mui/material';
import CallCard from '../components/CallCard';

export default function Calls({changeState, setAccount}) {
  return (
    <Grid container spacing={2}>
        {["Gaurish Baliga", "Tejal Ambhore", "Nidhi Bhandari", "Raj Agrawal", "Jagjit Bhumra"].map(
            (text, index) => 
                <Grid item sx={3}>
                    <CallCard name = {text} index = {index} changeState={changeState} setAccount = {setAccount}/>
                </Grid>
        )}
    </Grid>

  )
}
