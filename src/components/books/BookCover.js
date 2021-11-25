import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';

const Books = ({ title, id }) => {
  return (
    <Box
      bgcolor='#303030'
      width='10rem'
      height='15rem'
      mt={3}
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ cursor: 'pointer' }}
    >
      <Typography key={id}>{title}</Typography>
    </Box>
  );
};

export default Books;
