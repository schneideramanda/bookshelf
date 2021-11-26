import { InputLabel, TextField } from '@material-ui/core';
import { Box } from '@material-ui/system';
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../store/reducers/books';
import { categoriesSelect } from '../../store/reducers/categories';
import { closeModal } from '../../store/reducers/modal';
import { dateTime, generateToken } from '../../utils/utils';

const BookContent = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const { categories } = useSelector(categoriesSelect);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addBook({
        title: title,
        author: author,
        category: category,
        description: description,
        token: generateToken(),
        created: dateTime(),
        comments: [],
      })
    );
    dispatch(closeModal());
  };

  return (
    <Stack spacing={8}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container direction="row" spacing={6}>
          <Grid item>
            <Box
              display="flex"
              bgcolor="#424242"
              width="20rem"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              Book
            </Box>
          </Grid>
          <Grid item>
            <Stack spacing={6}>
              <TextField
                required
                id="title"
                label="Title"
                variant="standard"
                onChange={({ target }) => setTitle(target.value)}
              />
              <TextField
                required
                id="author"
                label="Author"
                variant="standard"
                onChange={({ target }) => setAuthor(target.value)}
              />
              <FormControl required variant="standard">
                <InputLabel id="category-label">Category *</InputLabel>
                <Select
                  labelId="category-label"
                  id="category-id"
                  value={category}
                  onChange={handleChange}
                  label="Category"
                >
                  {Object.entries(categories).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                required
                id="description"
                label="Description"
                multiline
                rows={4}
                onChange={({ target }) => setDescription(target.value)}
              />
            </Stack>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" sx={{ mt: 5 }}>
            Add book
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default BookContent;
