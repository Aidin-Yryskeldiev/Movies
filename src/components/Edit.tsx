import React from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateMovie } from "../store/movieSlice/movieThunk";
import { setEditMovie } from "../store/movieSlice/movieSlice";

const Edit: React.FC = () => {
	const dispatch = useAppDispatch();
	const editMovie = useAppSelector((state) => state.movies.editMovie);
	const [editUrl, setEditUrl] = React.useState("");
	const [editTitle, setEditTitle] = React.useState("");
	const [editText, setEditText] = React.useState("");

	React.useEffect(() => {
		if (editMovie) {
			setEditUrl(editMovie.url);
			setEditTitle(editMovie.title);
			setEditText(editMovie.text);
		}
	}, [editMovie]);

	const handleSaveEdit = () => {
		if (editMovie) {
			const updatedMovie = {
				...editMovie,
				url: editUrl,
				title: editTitle,
				text: editText,
			};
			dispatch(updateMovie(updatedMovie));
			dispatch(setEditMovie(null));
		}
	};

	return (
		<Dialog
			open={Boolean(editMovie)}
			onClose={() => dispatch(setEditMovie(null))}>
			<DialogTitle>Изменить</DialogTitle>
			<DialogContent>
				<TextField
					label="URL"
					value={editUrl}
					onChange={(e) => setEditUrl(e.target.value)}
				/>
				<br />
				<br />
				<TextField
					label="Title"
					value={editTitle}
					onChange={(e) => setEditTitle(e.target.value)}
				/>
				<br />
				<br />
				<TextField
					label="Text"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					onClick={() => dispatch(setEditMovie(null))}>
					Отмена
				</Button>
				<Button variant="contained" onClick={handleSaveEdit}>
					Ок
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Edit;
