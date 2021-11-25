import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    noCategory: 'No Category',
    wantToRead: 'Want to Read',
    reading: 'Reading',
    read: 'Read',
  },
  filter: '',
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = categories.actions;
export const categoriesSelect = (state) => state.categories;
export default categories.reducer;
