import React from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import BookModal from '../components/modal/BookModal';
import Search from '../components/search/Search';

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <BookModal />
      <Categories />
    </div>
  );
};

export default Home;
