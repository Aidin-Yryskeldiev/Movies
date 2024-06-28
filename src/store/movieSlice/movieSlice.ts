import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, addMovie, deleteMovie, updateMovie } from "./movieThunk";
import { Movie } from "../../types";

interface MovieState {
	movies: Movie[];
	editMovie: Movie | null;
	deleteId: number | null;
}

const initialState: MovieState = {
	movies: [],
	editMovie: null,
	deleteId: null,
};

export const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		setEditMovie: (state, action) => {
			state.editMovie = action.payload;
		},
		setDeleteId: (state, action) => {
			state.deleteId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.movies = action.payload;
			})
			.addCase(addMovie.fulfilled, (state, action) => {
				state.movies.push(action.payload);
			})
			.addCase(deleteMovie.fulfilled, (state, action) => {
				state.movies = state.movies.filter(
					(movie) => movie.id !== action.payload
				);
			})
			.addCase(updateMovie.fulfilled, (state, action) => {
				const index = state.movies.findIndex(
					(movie) => movie.id === action.payload.id
				);
				if (index !== -1) {
					state.movies[index] = action.payload;
				}
			});
	},
});

export const { setEditMovie, setDeleteId } = movieSlice.actions;
