'use client'
import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';



export default function customerdetails() {

    

  return (
   <Grid container spacing={2}>
    <Grid item xs={12}> </Grid>
    <Grid item xs={12}></Grid>
    <Grid item xs={3}>
    <Autocomplete
      sx={{ width: 200 }}
        id="Company Name"
        freeSolo
        options={Stockitems.map((option) => option.itemcode)}
        renderInput={(params) => <TextField {...params} label="Company Name" />}
      />
    </Grid>
    <Grid item xs={3}>
    <Autocomplete
      sx={{ width: 200 }}
        id="Customer Name"
        freeSolo
        options={Stockitems.map((option) => option.itemcode)}
        renderInput={(params) => <TextField {...params} label="Customer Name" />}
      />
    </Grid>


   </Grid>
  )
}
const Stockitems = [
    { itemcode: 'GS109', itemname: 'Glows' },
    { itemcode: 'GS110', itemname: 'Jacket' },
   ]

