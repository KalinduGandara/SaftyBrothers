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







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
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
          <Grid item xs={3} >
        <TextField id="outlined-basic" label="PO Number" variant="outlined" />
        </Grid>
        <Grid item xs ={3}>
        <TextField id="outlined-basic" label="Company Name" variant="outlined" />
             </Grid>
      <Grid item xs={6} ></Grid>
      <Grid item xs={3}>
        <TextField id="outlined-basic" label="Telephone/Mobile" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
        <TextField id="outlined-basic" label="Customer Name" variant="outlined" />
        </Grid>
        <Grid item xs={6} ></Grid>
        <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={3}>
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
