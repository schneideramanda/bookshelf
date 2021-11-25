import { createSlice } from '@reduxjs/toolkit';

const savedBooks = window.localStorage.getItem('books');
const parsedBooks = JSON.parse(savedBooks);

const initialState = {
  books: parsedBooks || [],
  edit: false,
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    addComment: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.token === action.payload.token
      );
      state.books[index].comments.push(action.payload.comment);
    },
    removeComment: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.token === action.payload.token
      );
      state.books[index].comments = state.books[index].comments.filter(
        (comment) => comment.id !== action.payload.id
      );
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.token !== action.payload);
    },
    editMode: (state, action) => {
      state.edit = action.payload;
    },
    editCategory: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.token === action.payload.token
      );
      state.books[index].category = action.payload.category;
    },
  },
});

export const {
  addBook,
  addComment,
  removeComment,
  removeBook,
  editCategory,
  editMode,
} = books.actions;
export const booksSelect = (state) => state.books;
export default books.reducer;
