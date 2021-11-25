import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { categoriesSelect } from '../../store/reducers/categories';
import BooksGrid from '../books/BooksGrid';

const Categories = () => {
  const { categories } = useSelector(categoriesSelect);

  return (
    <Stack spacing={8} mt={10} ml={4} mb={5}>
      {Object.entries(categories).map(([key, value]) => (
        <Box key={key}>
          <Typography variant='h6'>{value}</Typography>
          <BooksGrid objKey={key} />
        </Box>
      ))}
    </Stack>
  );
};

export default Categories;
