import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, modalSelect } from '../../store/reducers/modal';
import { Box } from '@material-ui/system';
import { Modal } from '@mui/material';
import { Fade } from '@material-ui/core';
import BookContent from './BookContent';

const BookModal = () => {
  const { modal } = useSelector(modalSelect);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Fade in={modal}>
          <Box bgcolor="#303030" m={12} p={5} borderRadius={2}>
            <BookContent />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookModal;
