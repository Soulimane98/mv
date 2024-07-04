import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/moviesSlice";
import Movie from "./components/Movie";
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";

function App() {
  const movies = useSelector((state) => state.movies.movies);
  const currentPage = useSelector((state) => state.movies.currentPage);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ term: "", page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <>
      <SearchForm />
      <div className="movie-container">
        {movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <div className="w-full flex justify-center my-5">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}

export default App;
