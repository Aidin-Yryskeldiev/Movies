import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Movie } from "../types";
import { useAppDispatch } from "../store/hooks";
import { setEditMovie, setDeleteId } from "../store/movieSlice/movieSlice";

interface MovieItemProps {
	movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
	const dispatch = useAppDispatch();

	const handleEditMovie = () => {
		dispatch(setEditMovie(movie));
	};

	const handleDeleteMovie = () => {
		dispatch(setDeleteId(movie.id));
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				marginTop: "20px",
				padding: "20px",
			}}>
			<img style={{ height: "300px" }} src={movie.url} alt="" />
			<Typography
				sx={{ textAlign: "center", maxWidth: "200px", fontSize: "15px" }}>
				{movie.title}
			</Typography>
			<Typography
				sx={{ textAlign: "center", maxWidth: "200px", fontSize: "15px" }}>
				{movie.text}
			</Typography>
			<Button variant="contained" onClick={handleEditMovie}>
				Изменить
			</Button>
			<Button variant="contained" onClick={handleDeleteMovie}>
				Удалить
			</Button>
		</Box>
	);
};

export default MovieItem;
