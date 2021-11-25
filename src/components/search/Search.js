import { Button, IconButton } from '@material-ui/core';
import { Box } from '@material-ui/system';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/reducers/modal';
import AddIcon from '@mui/icons-material/Add';
import { changeFilter } from '../../store/reducers/categories';

const Search = () => {
  const dispatch = useDispatch();

  // Changes state to open the modal for new books
  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      backgroundColor='#212121'
      p={1}
      mt={5}
      ml={12}
      mr={12}
    >
      <Button variant='contained' startIcon={<AddIcon />} onClick={handleClick}>
        Add new book
      </Button>
      <Box>
        <IconButton
          color='primary'
          aria-label='sort name'
          component='span'
          onClick={() => dispatch(changeFilter('alphabet'))}
        >
          <SortByAlphaIcon />
        </IconButton>
        <IconButton
          color='primary'
          aria-label='sort date'
          component='span'
          onClick={() => dispatch(changeFilter('date'))}
        >
          <CalendarTodayIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Search;
