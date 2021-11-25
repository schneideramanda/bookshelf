import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeComment } from '../../../store/reducers/books';
import { useDispatch } from 'react-redux';

const Comment = ({ comment, token }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeComment({ token: token, id: comment.id }));
  };

  return (
    <Box>
      <Typography variant='body2' textAlign='left' ml={2}>
        Wrote on {comment.date} - by {comment.user}
      </Typography>
      <Box bgcolor='#424242' borderRadius={2} p={1} mt={1} mb={2} ml={2} mr={2}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography maxWidth='52rem' sx={{ wordBreak: 'break-word' }}>
            {comment.text}
          </Typography>
          <IconButton
            color='primary'
            component='span'
            aria-label='delete comment'
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;
