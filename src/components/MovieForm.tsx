import React, { useState } from "react";
import {
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Box,
} from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { addMovie } from "../store/movieSlice/movieThunk";

const MovieForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [url, setUrl] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddMovie = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (text !== "" && title !== "" && url !== "") {
			const movieText = {
				text,
				url,
				title,
			};
			console.log(movieText);
			dispatch(addMovie(movieText));
		}
		setTitle("");
		setText("");
		setUrl("");
		handleClose();
	};

	return (
		<>
			<Box sx={{ position: "relative", top: "-60px", marginLeft: "500px" }}>
				<Button
					variant="contained"
					onClick={handleOpen}
					style={{ marginBottom: "20px", position: "relative", left: "90%" }}>
					Add
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<form onSubmit={handleAddMovie}>
					<DialogTitle>Добавить фильм</DialogTitle>
					<DialogContent>
						<TextField
							label="URL"
							onChange={(e) => setUrl(e.target.value)}
							type="url"
							value={url}
						/>
						<br />
						<br />
						<TextField
							label="Название"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
						<br />
						<br />
						<TextField
							label="Описание"
							onChange={(e) => setText(e.target.value)}
							value={text}
						/>
					</DialogContent>
					<DialogActions>
						<Button variant="contained" onClick={handleClose}>
							Отмена
						</Button>
						<Button variant="contained" type="submit">
							Добавить
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};

export default MovieForm;
