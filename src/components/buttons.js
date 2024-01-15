import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';

export default function ActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        1
      </Fab>
      <Fab size="small" color="secondary" aria-label="add">
        2
      </Fab>
      <Fab size="small" color="secondary" aria-label="add">
       3
      </Fab>
      <Fab size="small" color="secondary" aria-label="add">
        4
      </Fab>
      <Fab size="small" color="secondary" aria-label="add">
        5
      </Fab>
    
     {/*  <Fab size="small" color="secondary" aria-label="add">
        <StarIcon />
      </Fab> */}

    </Box>
  );
}