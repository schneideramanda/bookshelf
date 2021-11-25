import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modal from './reducers/modal';
import books from './reducers/books';
import categories from './reducers/categories';

const reducer = combineReducers({ modal, books, categories });
const store = configureStore({ reducer });

export default store;
