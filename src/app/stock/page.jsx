'use client'
import * as React from 'react';
import { useState } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './page.module.css'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Textarea from '@mui/joy/Textarea';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StockData from '@/Component/StockData';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};




export default function stock() {
 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  function onIsSizeClicked(e) {
    setIsSize(e.target.checked)
}
const handleSizeChange = (index, event) => {
    const newSizes = [...sizes];
    newSizes[index].size = event.target.value;
    setSizes(newSizes);
};

const handleQuantityChange = (index, event) => {
    const newSizes = [...sizes];
    newSizes[index].quantity = event.target.value;
    setSizes(newSizes);
};

const handleAddSize = () => {
    setSizes([...sizes, { size: '', quantity: '' }]);
};

const handleRemoveSize = (index) => {
    const newSizes = [...sizes];
    newSizes.splice(index, 1);
    setSizes(newSizes);
};

const [isSize, setIsSize] = useState(false);
const [sizes, setSizes] = useState([{ 'size': '', 'quantity': '' }]);


  return (
    <div className={styles.row}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
        <Autocomplete
        id="Enter Item Code"
        freeSolo
        options={ITemlist.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Enter Item Code" />}
      />
        </Grid>
        <Grid xs>
        <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={ITemlist.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Enter Item Name" />}
      />
        </Grid>
        <Grid xs>
        <Button variant="outlined">Search</Button>
        </Grid>
        <Grid xs>
   <React.Fragment>
            <Button onClick={handleOpen} variant="contained" href="#contained-buttons"> ADD ITEM</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >



            {/* Stock Child Modal */}
        <Box sx={{ ...style, width:1300 , heigh: 1000}}>


        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
        <h2 id="child-modal-title">ADD ITEMS</h2>
        </Grid>
        <Grid xs={6}>
        
        </Grid>
        <Grid xs={6}>
        <div className={styles.chilmodaladd}>
      
      <TextField id="outlined-basic" label="Item Code" variant="outlined" />
      </div>
        
        <div className={styles.chilmodaladd}>
      <TextField id="outlined-basic" label="Item Name" variant="outlined" />
      </div>
     
        
      <div className={styles.chilmodaladd}>
      <Textarea
      placeholder="Discription"
      minRows={2}
      sx={{
        '--Textarea-focusedInset': 'var(--any, )',
        '--Textarea-focusedThickness': '0.25rem',
        '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
        '&::before': {
          transition: 'box-shadow .15s ease-in-out',
        },
        '&:focus-within': {
          borderColor: '#86b7fe',
        },
      }}
    />
    </div>
         
        </Grid>
        <Grid xs={6}>
        <>
        
            <FormControlLabel control={<Checkbox/>} name='size'  label="Size" onClick={onIsSizeClicked} />
            {isSize ?
                <div>
                    {sizes.map((size, index) => (
                        <div key={index}>
                            
                            <TextField id="outlined-basic" label="Enter Size" variant="outlined" value={size.size} onChange={(event) => handleSizeChange(index, event)} className={styles.sizeselection} size="small"/>
                            
                            <TextField id="quantity" label="Enter QTY" variant="outlined" value={size.quantity} onChange={(event) => handleQuantityChange(index, event)}className={styles.sizeselection} size="small"/>

                            <IconButton aria-label="delete" size="large" onClick={() => handleRemoveSize(index)}>
                             <DeleteIcon fontSize="inherit" />
                            </IconButton>
                            <Fab size="small" color="secondary" aria-label="add" onClick={handleAddSize}  >
                              <AddIcon />
                              </Fab>
                        </div>
                    ))}
                    
                    
                </div> : null
            }
        </>
        
        
        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6} columns={24}>
      

        <Grid xs={8}>
          </Grid>
        
        <Grid xs={8}>
        </Grid>
        <Grid xs={8}>       
        </Grid>
        <Grid xs={8}>
        <>
          <input type="file" name="image" id="image"/>
        </>
        </Grid>
        
        <Grid xs ={8}>
        <Button variant="contained" >
        Save
      </Button>
      </Grid>
      </Grid>
    </Box>





        </Grid>
        
      </Grid>
    </Box>


        </Box>
      </Modal>
    </React.Fragment>
        
  

        </Grid>
      </Grid>
    </Box>
    <div>
      <StockData/>
    </div>
  </div>

  
  
  )




  
  }
  const ITemlist = [
    { title: 'gs109', name: 'Glows' },
    { title: 'gs110', name: 'Helmet' },
    
  ];