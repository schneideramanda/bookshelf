import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { booksSelect, editCategory } from '../../../store/reducers/books';
import { categoriesSelect } from '../../../store/reducers/categories';

const useBookDetails = (token, category) => {
  const [selectCategory, setSelectCategory] = useState('');
  const { categories } = useSelector(categoriesSelect);
  const { edit } = useSelector(booksSelect);
  const dispatch = useDispatch();

  const matchCategory = Object.entries(categories).filter(
    ([key, value]) => key === category
  );
  const nameCategory = matchCategory[0][1];

  const handleChange = (event) => {
    setSelectCategory(event.target.value);
    dispatch(editCategory({ token: token, category: event.target.value }));
  };

  return {
    selectCategory,
    categories,
    edit,
    nameCategory,
    handleChange,
  };
};

export default useBookDetails;
