import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, setPage } from '../store/moviesSlice';

const SearchForm = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setPage(1)); // Reset to page 1 on new search
    dispatch(fetchMovies({ term, page: 1 }));
  };

  return (
    <form onSubmit={handleSearch}>
      <header>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className='bg-green-400 text-gray-50'>Search</button>
      </header>
    </form>
  );
};

export default SearchForm;
