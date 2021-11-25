import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
  modalComments: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    openModalComments: (state) => {
      state.modalComments = true;
    },
    closeModalComments: (state) => {
      state.modalComments = false;
    },
  },
});

export const { openModal, closeModal, openModalComments, closeModalComments } =
  modal.actions;
export const modalSelect = (state) => state.modal;
export default modal.reducer;
