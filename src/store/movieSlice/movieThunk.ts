import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../types";

const API_URL = "https://382592042945bdb4.mokky.dev/users";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
	const response = await axios.get<Movie[]>(API_URL);
	return response.data;
});

export const addMovie = createAsyncThunk(
	"movies/addMovie",
	async (movieText: any, { rejectWithValue }) => {
		console.log(movieText, "aidin");
		try {
			const response = await axios.post<Movie>(API_URL, movieText);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteMovie = createAsyncThunk(
	"movies/deleteMovie",
	async (id: number) => {
		await axios.delete(`${API_URL}/${id}`);
		return id;
	}
);

export const updateMovie = createAsyncThunk(
	"movies/updateMovie",
	async (updatedMovie: Movie) => {
		const response = await axios.patch<Movie>(
			`${API_URL}/${updatedMovie.id}`,
			updatedMovie
		);
		return response.data;
	}
);
