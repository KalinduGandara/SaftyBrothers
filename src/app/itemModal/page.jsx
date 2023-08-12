'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemModal from '@/Component/ItemModal';
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

export default function itemModalPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const item = { name: "test", description: "aisbflasbf" }
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <ItemModal
        open={open}
        onClose={handleClose}
        item={item}
      >
      </ItemModal>
    </div>
  );
}