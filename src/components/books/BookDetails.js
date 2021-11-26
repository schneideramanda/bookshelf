import {
  FormControl,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';
import useBookDetails from './hooks/useBookDetails';

const BookDetails = ({ author, category, created, description, token }) => {
  const { selectCategory, categories, edit, nameCategory, handleChange } =
    useBookDetails(token, category);

  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography variant="body1">Author:</Typography>
          <Typography variant="body2">{author}</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="body1">Category:</Typography>
          {edit ? (
            <FormControl required variant="standard" sx={{ minWidth: '100px' }}>
              <Select
                labelId="category-label"
                id="category-id"
                value={selectCategory}
                onChange={handleChange}
                label="Category"
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
            <Typography variant="body2">{nameCategory}</Typography>
          )}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="body1">Description:</Typography>
          <Typography variant="body2">{description}</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="body1">Created at:</Typography>
          <Typography variant="body2">{created}</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default BookDetails;
