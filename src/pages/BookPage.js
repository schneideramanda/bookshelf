import { Box } from '@material-ui/system';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import BookCover from '../components/books/BookCover';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookDetails from '../components/books/BookDetails';
import BookTools from '../components/books/BookTools';
import BookComments from '../components/books/BookComments';
import CommentsModal from '../components/books/comments/CommentsModal';

const BookPage = () => {
  const { token } = useParams();

  const currentBook = useSelector((state) => {
    const filteredBook = state.books.books.filter(
      (book) => book.token === token
    );
    return filteredBook[0];
  });

  return (
    <div>
      {currentBook && (
        <div>
          <Header />
          <CommentsModal book={currentBook} />
          <Box bgcolor='#212121' m={6} p={6}>
            <BookTools token={currentBook.token} />
            <Typography variant='h3' textAlign='center'>
              {currentBook.title}
            </Typography>
            <Grid container direction='row' spacing={6} alignItems='start'>
              <Grid item>
                <BookCover title={currentBook.title} id={currentBook.token} />
              </Grid>
              <Grid item>
                <BookDetails
                  author={currentBook.author}
                  created={currentBook.created}
                  description={currentBook.description}
                  category={currentBook.category}
                  token={currentBook.token}
                />
              </Grid>
            </Grid>
            <BookComments
              comments={currentBook.comments}
              token={currentBook.token}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default BookPage;
