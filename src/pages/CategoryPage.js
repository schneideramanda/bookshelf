import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { categoriesSelect, changeFilter } from '../store/reducers/categories';
import Header from '../components/header/Header';
import { Box } from '@material-ui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, Link, Typography } from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import BookCover from '../components/books/BookCover';

const CategoryPage = () => {
  const { id } = useParams();
  const { categories } = useSelector(categoriesSelect);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const matchCategory = Object.entries(categories).filter(
    ([key, value]) => key === id
  );
  const nameCategory = matchCategory[0][1];

  const categoryBooks = useSelector((state) => {
    let filteredBooks = [...state.books.books];
    switch (state.categories.filter) {
      case 'alphabet':
        return filteredBooks
          .sort((a, b) => a.title.localeCompare(b.title))
          .filter((book) => book.category === id);
      case 'date':
        return filteredBooks
          .sort((a, b) => a.created - b.created)
          .filter((book) => book.category === id);
      default:
        return filteredBooks.filter((book) => book.category === id);
    }
  });

  return (
    <div>
      <Header />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        backgroundColor='#212121'
        p={1}
        mt={5}
        ml={12}
        mr={12}
      >
        <Box>
          <IconButton
            color='primary'
            aria-label='go back'
            component='span'
            onClick={() => navigate('/', { replace: true })}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography variant='h5'>
            {nameCategory} ({categoryBooks.length})
          </Typography>
        </Box>
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
      <Box
        display='grid'
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={1}
        p={1}
        mt={1}
        ml={12}
        mr={12}
        mb={2}
      >
        {categoryBooks &&
          categoryBooks.map((book) => (
            <Link
              key={book.token}
              component={RouterLink}
              to={`/books/${book.token}`}
              underline='none'
            >
              <Box>
                <BookCover title={book.title} id={book.token} />
              </Box>
            </Link>
          ))}
      </Box>
    </div>
  );
};

export default CategoryPage;
