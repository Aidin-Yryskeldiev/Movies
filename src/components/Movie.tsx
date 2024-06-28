import React, { useEffect } from "react";
import { List } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchMovies } from "../store/movieSlice/movieThunk";
import MovieItem from "./MovieItem";

const Movie: React.FC = () => {
	const dispatch = useAppDispatch();
	const movies = useAppSelector((state) => state.movies.movies);
	console.log(movies, "yryskeldiev");
	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	return (
		<List
			sx={{
				display: "flex",
				flexWrap: "wrap",
				marginTop: "-80px",
			}}>
			{movies.map((movies) => (
				<MovieItem key={movies.id} movie={movies} />
			))}
		</List>
	);
};

export default Movie;
