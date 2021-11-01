import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button color="secondary" variant="contained" style={{color : 'white'}}>Buy Kit</Button>
      <Button variant="text" style={{color : 'black'}}>Projects</Button>
      <Button variant="text" style={{color : 'black'}}>Contact Us</Button>
    </Stack>
  );
}
