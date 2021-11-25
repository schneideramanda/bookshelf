import { Stack } from '@mui/material';
import React from 'react';
import Comment from './Comment';

const Comments = ({ comments, token }) => {
  return (
    <Stack>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} token={token} />
      ))}
    </Stack>
  );
};

export default Comments;
