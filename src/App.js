import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookPage from './pages/BookPage';
import { booksSelect } from './store/reducers/books';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  const { books } = useSelector(booksSelect);

  useEffect(() => {
    window.localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BrowserRouter>
      <Grid container direction='column'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/books/:token' element={<BookPage />} />
          <Route path='/categories/:id' element={<CategoryPage />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
};

export default App;
