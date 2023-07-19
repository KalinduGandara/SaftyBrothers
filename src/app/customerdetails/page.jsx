'use client'
import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#A7ECEE',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function customerdetails() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   <Grid container spacing={2}>
    <Grid item xs={12}> </Grid>
    <Grid item xs={12} textAlign={'center'} fontWeight={'bold'} fontSize={'40px'}><Box bgcolor={'#75C2F6'}>CUSTOMER DETAILS</Box></Grid>
    <Grid item xs={2}>
    <Autocomplete
      sx={{ width: 200 }}
        id="Company Name"
        freeSolo
        options={cutomerd.map((option) => option.companyname)}
        renderInput={(params) => <TextField {...params} label="Company Name" />}
      />
    </Grid>
    <Grid item xs={2}>
    <Autocomplete
      sx={{ width: 200 }}
        id="Customer Name"
        freeSolo
        options={cutomerd.map((option) => option.customername)}
        renderInput={(params) => <TextField {...params} label="Customer Name" />}
      />
    </Grid>
    <Grid item xs={2}>
<Button variant="outlined">Search</Button>
    </Grid>
  <Grid item xs={6}>
  <div>
  <Button variant="contained" size="small" color="secondary" onClick={handleOpen}>
          Add customer Details
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the Customer Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Company Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Customer Email" variant="outlined" />
            </Grid>
           
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Customer Name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Telephone/Mobile" variant="outlined" />
            </Grid>
            <Grid item xs={3}></Grid>
          <Grid item xs={3}>
          <Button variant="contained" color='error' size="medium">
          No
        </Button>
            </Grid>
          <Grid item xs={3}>
          <Button variant="contained" endIcon={<SendIcon />}>
        Save
      </Button>
            </Grid>
            <Grid item xs={3}></Grid>


          </Grid>
          
        </Box>
      </Modal>
    </div>
  </Grid>
  <Grid item xs={1}></Grid>
  <Grid item xs={10}> 
  <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell><b>Company Name</b></TableCell>
            <TableCell align="right"><b>Customer Name</b></TableCell>
            <TableCell align="right"><b>Customer Email</b></TableCell>
            <TableCell align="right"><b>Telephone Number</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow>
              <TableCell>Toyota</TableCell>
              <TableCell align="right">Prabath</TableCell>
              <TableCell align="right">prabath@toyota.lk</TableCell>
              <TableCell align="right">0771358540</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Maga pvt ltd</TableCell>
              <TableCell align="right">Sunil</TableCell>
              <TableCell align="right">sunil@maga.lk</TableCell>
              <TableCell align="right">071352021</TableCell>
            </TableRow>
        
       
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={1}></Grid>
    <Grid item xs={6}></Grid>
    <Grid item xs={2}></Grid>
    <Grid item xs={4}>  
    <Stack spacing={2}>

      <Pagination count={10} shape="rounded" />
      
    </Stack></Grid>


   </Grid>
  )
}
const cutomerd = [
    { companyname: 'Toyota', customername: 'Prabath' },
    { companyname: 'Maga pvt ltd', customername: 'Sunil' },
   ]

