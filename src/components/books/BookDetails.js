import {
  FormControl,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksSelect, editCategory } from '../../store/reducers/books';
import { categoriesSelect } from '../../store/reducers/categories';

const BookDetails = ({ author, category, created, description, token }) => {
  const [selectCategory, setSelectCategory] = useState('');
  const { categories } = useSelector(categoriesSelect);
  const { edit } = useSelector(booksSelect);
  const dispatch = useDispatch();

  const matchCategory = Object.entries(categories).filter(
    ([key, value]) => key === category
  );
  const nameCategory = matchCategory[0][1];

  const handleChange = (event) => {
    setSelectCategory(event.target.value);
    dispatch(editCategory({ token: token, category: event.target.value }));
  };

  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography variant='body1'>Author:</Typography>
          <Typography variant='body2'>{author}</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant='body1'>Category:</Typography>
          {edit ? (
            <FormControl required variant='standard' sx={{ minWidth: '100px' }}>
              <Select
                labelId='category-label'
                id='category-id'
                value={selectCategory}
                onChange={handleChange}
                label='Category'
                autoWidth
              >
                {Object.entries(categories).map(([key, value]) => (
                  <MenuItem key={key} value={key}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Typography variant='body2'>{nameCategory}</Typography>
          )}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant='body1'>Description:</Typography>
          <Typography variant='body2'>{description}</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant='body1'>Created at:</Typography>
          <Typography variant='body2'>{created}</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default BookDetails;
