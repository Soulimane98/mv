// src/store/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'fa1192549721df01a1fb28a7788e6608';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ term, page }) => {
  const response = await fetch(
    term
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return { results: data.results, total_pages: data.total_pages };
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setPage } = moviesSlice.actions;
export default moviesSlice.reducer;
