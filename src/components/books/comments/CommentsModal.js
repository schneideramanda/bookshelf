import { Button, Fade, Modal, TextField, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../store/reducers/books';
import { closeModalComments, modalSelect } from '../../../store/reducers/modal';
import { dateTime, generateToken } from '../../../utils/utils';

const CommentsModal = ({ book }) => {
  const [comment, setComment] = useState('');
  const { modalComments } = useSelector(modalSelect);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModalComments());
  };

  const handleChange = ({ target }) => {
    setComment(target.value);
  };

  const handleSend = () => {
    dispatch(
      addComment({
        token: book.token,
        comment: {
          text: comment,
          date: dateTime(),
          user: `user_${generateToken()}`,
          id: generateToken(),
        },
      })
    );
    dispatch(closeModalComments());
    setComment('');
  };

  return (
    <div>
      <Modal open={modalComments} onClose={handleClose}>
        <Fade in={modalComments}>
          <Box
            top='35%'
            left='26%'
            width='30rem'
            position='absolute'
            bgcolor='#303030'
            p={8}
            borderRadius={2}
          >
            <Stack spacing={3}>
              <TextField
                variant='outlined'
                multiline
                rows='4'
                value={comment}
                fullWidth
                id='comment-text'
                label='Insert your comment here'
                onChange={handleChange}
              ></TextField>
              <Button variant='contained' onClick={handleSend}>
                Send
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CommentsModal;
