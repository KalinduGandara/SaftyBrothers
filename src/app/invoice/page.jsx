'use client'
import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';






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

function invoice() {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [save, setSave] = React.useState(false);
  const saveOpen = () => setSave(true);
  const saveClose = () => setSave(false);

  return (
    

    
      <Grid container spacing={2}>
        
       <Grid item xs={12}></Grid>
      <Grid item xs={12} textAlign={'center'} fontWeight={'bold'} fontSize={'40px'}><Box bgcolor={'#75C2F6'}>PURCHASE ORDER</Box></Grid>
     
        <Grid item xs={2}>
      <Autocomplete
      sx={{ width: 200 }}
        id="Enter Item Code"
        freeSolo
        options={Stockitems.map((option) => option.itemcode)}
        renderInput={(params) => <TextField {...params} label="Enter Item Code" />}
      />
      </Grid>
      <Grid item xs ={2}>
      <Autocomplete
      sx={{ width: 200 }}
        freeSolo
        id="Enter Item Name"
        disableClearable
        options={Stockitems.map((option) => option.itemname)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Item Name"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
          )}
          />
           </Grid>
          <Grid item xs={2}> <Button variant="outlined">Search</Button></Grid>
      
          <Grid item xs={6} >
          {companydetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </Grid>
    
        
        <Grid item xs={3}>
        <div>
      <Chip
        label={Stockitems.map((option) => option.itemname)}
        onClick={handleOpen}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            GS109
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Glows
          </Typography>
        </Box>
      </Modal>
    </div>
            </Grid>
          <Grid item xs={3}>
          <Fab size="small" color="secondary" aria-label="add" >
                              <AddIcon />
                              </Fab>
          </Grid>
          <Grid item xs={2} >
        <TextField id="outlined-basic" label="PO Number" variant="outlined" />
        </Grid>
        <Grid item xs ={2}>
        <TextField id="outlined-basic" label="Company Name" variant="outlined" />
             </Grid>
             <Grid item xs={2} >
        <TextField id="outlined-basic" label="Customer Email" variant="outlined" />
        </Grid>
      <Grid item xs={6} ></Grid>
      <Grid item xs={2}>
      <TextField id="outlined-basic" label="Customer Name" variant="outlined" />
        
        </Grid>
        <Grid item xs={2}>
        <TextField id="outlined-basic" label="Telephone/Mobile" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={6} ></Grid>
        
        <Grid item xs={2}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Payment Method</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          
          label="Payment Method"
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>CASH</MenuItem>
          <MenuItem value={20}>CHEQUE</MenuItem>
          <MenuItem value={30}>ONLINE PAYMENT</MenuItem>
        </Select>
        <FormHelperText>select payment method</FormHelperText>
      </FormControl>
        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" size="small" color="secondary">
          Save customer Details
        </Button>
        </Grid>
        <Grid item xs={12}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell bgcolor={'#75C2F6'}><b>Item Code</b></TableCell>
            <TableCell align="right" bgcolor={'#75C2F6'}><b>Item Name</b></TableCell>
            <TableCell align="right" bgcolor={'#75C2F6'}><b>Qty.</b></TableCell>
            <TableCell align="right" bgcolor={'#75C2F6'}><b>Unit Price (Rs.)</b></TableCell>
            <TableCell align="right" bgcolor={'#75C2F6'}><b>Discount</b></TableCell>
            <TableCell align="right" bgcolor={'#75C2F6'}><b>Total (Rs.)</b></TableCell>
            <TableCell align="right" bgcolor={'#75C2F6'}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
            <TableCell>GS109</TableCell>
          
              <TableCell align="right">Glows</TableCell>
              <TableCell align="right"><Input defaultValue="0"/></TableCell>
              <TableCell align="right"><Input defaultValue="500"/></TableCell>
              <TableCell align="right"><Input defaultValue="0"/></TableCell>
              <TableCell align="right">5000</TableCell>
              <TableCell align="right">  <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton></TableCell>
            </TableRow>
            <TableRow >
            <TableCell>GS110</TableCell>
          
              <TableCell align="right">Jacket</TableCell>
              <TableCell align="right"><Input defaultValue="0"/></TableCell>
              <TableCell align="right"><Input defaultValue="1000"/></TableCell>
              <TableCell align="right"><Input defaultValue="0"/></TableCell>
              <TableCell align="right">50000</TableCell>
              <TableCell align="right">  <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton></TableCell>
            </TableRow>
         
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            
            <TableCell colSpan={1}><b>Subtotal</b></TableCell>
            <TableCell align="right">55000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}><b>Discount</b></TableCell>
            <TableCell align="right"><Input defaultValue="0"/></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}><b>Total</b></TableCell>
            <TableCell align="right">55000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>

        <Grid item xs={8}></Grid>
        <Grid item xs={2}><Button variant="contained" color='error' size="medium">
          Cancel
        </Button></Grid>
        <Grid item xs={2}> 
        <Button variant="contained" endIcon={<SendIcon />}onClick={saveOpen}>
        Save
      </Button> 
      <Modal
        open={save}
        onClose={saveClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography id="modal-modal-title" variant="h6" component="h2"  textAlign={'center'}>
            Are You Sure
          </Typography>
            </Grid>
                          
          <Grid item xs={12}> </Grid>
            <Grid item xs={12}> </Grid>
            <Grid item xs={3}> </Grid>
            <Grid item xs={3} alignItems={'center'}>
            <Button variant="contained" color='error' size="medium">
          No
        </Button>
            </Grid>
          <Grid item xs={6} alignItems={'center'}>
          <Button variant="contained" endIcon={<SendIcon />}onClick={saveOpen}>
        Yes
      </Button>
          </Grid>
      </Grid> 
        </Box>
      </Modal>
      </Grid>
        




          </Grid>
          
    
    
  
  )
}

export default invoice
const Stockitems = [
  { itemcode: 'GS109', itemname: 'Glows' },
  { itemcode: 'GS110', itemname: 'Jacket' },
 ]

 const companydetails = [
    'SAFETY BROTHERS HODLDINGS',
    'No - 259/41 Bandaranayakapura',
    'Hot Line :- +94760120290',
    'Telephone :- +94 0760120291',
    'Email :- brotherssafety@gmail.com'
  ];
