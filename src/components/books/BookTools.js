import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { booksSelect, editMode, removeBook } from '../../store/reducers/books';

const BookTools = ({ token }) => {
  const { edit } = useSelector(booksSelect);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleDelete = () => {
    navigate('/', { replace: true });
    dispatch(removeBook(token));
  };

  const handleSave = () => {
    dispatch(editMode(false));
  };

  return (
    <Grid container alignItems='right' justifyContent='space-between'>
      <Grid item>
        <IconButton
          color='primary'
          aria-label='go back'
          component='span'
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item>
        {edit ? (
          <IconButton
            color='primary'
            aria-label='save edit'
            component='span'
            onClick={handleSave}
          >
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton
            color='primary'
            aria-label='go back'
            component='span'
            onClick={() => dispatch(editMode(true))}
          >
            <EditIcon />
          </IconButton>
        )}

        <IconButton
          color='primary'
          aria-label='delete book'
          component='span'
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default BookTools;
