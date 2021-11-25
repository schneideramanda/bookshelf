import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BookCover from './BookCover';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import { Box } from '@material-ui/system';
import { useMediaQuery, useTheme } from '@material-ui/core';

const BooksCategories = ({ objKey }) => {
  // Filters books by category and current filter (alphabet or date)
  const categoryBooks = useSelector((state) => {
    let filteredBooks = [...state.books.books];
    switch (state.categories.filter) {
      case 'alphabet':
        return filteredBooks
          .sort((a, b) => a.title.localeCompare(b.title))
          .filter((book) => book.category === objKey);
      case 'date':
        return filteredBooks
          .sort((a, b) => a.created - b.created)
          .filter((book) => book.category === objKey);
      default:
        return filteredBooks.filter((book) => book.category === objKey);
    }
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const categoryLegth = () => {
    if (matches) {
      return categoryBooks.length <= 2;
    } else {
      return categoryBooks.length <= 4;
    }
  };

  const categorySize = () => {
    if (matches) {
      return categoryBooks.slice(0, 2);
    } else {
      return categoryBooks.slice(0, 4);
    }
  };

  if (categoryBooks.length === 0)
    return (
      <Typography>
        There's still no books in this category. Try adding one!
      </Typography>
    );

  return (
    <Stack direction='row' spacing={2} alignItems='baseline'>
      {categoryBooks && categoryLegth() ? (
        categoryBooks.map((book) => (
          <Link
            key={book.token}
            component={RouterLink}
            to={`/books/${book.token}`}
            underline='none'
          >
            <BookCover title={book.title} id={book.token} />
          </Link>
        ))
      ) : (
        <>
          {categorySize().map((book) => (
            <Link
              key={book.token}
              component={RouterLink}
              to={`/books/${book.token}`}
              underline='none'
            >
              <BookCover title={book.title} id={book.token} />
            </Link>
          ))}
          <Link
            component={RouterLink}
            to={`/categories/${objKey}`}
            underline='none'
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Typography>View More</Typography>
              <IconButton size='large' color='primary'>
                <PendingRoundedIcon />
              </IconButton>
            </Box>
          </Link>
        </>
      )}
    </Stack>
  );
};

export default BooksCategories;
