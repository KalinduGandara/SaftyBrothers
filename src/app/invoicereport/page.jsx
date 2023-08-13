'use client'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RestoreIcon from '@mui/icons-material/Restore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'Po Number', width: 300 },
  { field: 'companyname', headerName: 'Company Name', width: 300},
  { field: 'Date', headerName: 'Date', width: 300},
  {
    field: 'view',
    headerName: '',
    renderCell: (params) => (
      <IconButton aria-label="show" color="primary">
        <VisibilityIcon />
      </IconButton>),
  
  },
  {
    field: 'return',
    headerName: '',
    renderCell: (params) => (
      <IconButton aria-label="normal" color="primary">
        <RestoreIcon />
      </IconButton>),
   
  },
  {
    field: 'delete',
    headerName: '',
    renderCell: (params) => (
      <IconButton aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>),
   
  }
];


const rows = [
  { id: 1,companyname: 'Mas active', Date: '2023-05-06' },
  { id: 2,companyname: 'Dimo', Date: '2023-06-06' },
  { id: 3,companyname: 'Toyota', Date: '2023-10-06' },
  { id: 4,companyname: 'ATG Hand care', Date: '2023-03-06'}

];



export default function DataTable() {
  return (
    
    <div>
      <Grid container spacing={2}>
        <Grid item xs = {12}>  </Grid>
        <Grid item xs = {12}>  </Grid>
        <Grid item xs = {2}> <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={invoicesearch.map((option) => option.ponumber)}
        renderInput={(params) => <TextField {...params} label="PO Number" />}
      /> </Grid>
         <Grid item xs = {2}>  <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={invoicesearch.map((option) => option.companyname)}
        renderInput={(params) => <TextField {...params} label="Company Name" />}
      /> </Grid>
         <Grid item xs = {2}>  <Button variant="outlined">Search</Button> </Grid>
         <Grid item xs={6}>  </Grid>
         <Grid item xs = {12}>  </Grid>
    
         </Grid>
    
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
const invoicesearch = [
  { ponumber: '100', companyname: 'MAS Active' },
  { ponumber: '101', companyname: 'ATG' }];