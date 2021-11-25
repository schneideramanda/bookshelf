import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';

const Header = () => {
  return (
    <Box m={4}>
      <Typography variant='h4' component='div' gutterBottom>
        Logo
      </Typography>
    </Box>
  );
};

export default Header;
