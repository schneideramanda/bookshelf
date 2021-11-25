import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModalComments } from '../../store/reducers/modal';
import CommentsList from './comments/CommentsList';

const BookComments = ({ comments, token }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModalComments());
  };

  return (
    <Box mt={6}>
      <Typography variant='h6' textAlign='center'>
        Comments Section
      </Typography>
      <Box>
        <Box bgcolor='#303030' mt={1}>
          <Box textAlign='right' p={1}>
            <IconButton
              color='primary'
              aria-label='delete comment'
              onClick={handleClick}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
          <Box pb={4} textAlign='center'>
            {comments.length ? (
              <CommentsList comments={comments} token={token} />
            ) : (
              "There's still no comments for this book, should we add one?"
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookComments;
