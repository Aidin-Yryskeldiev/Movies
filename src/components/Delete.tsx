import React from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	DialogContentText,
	Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteMovie } from "../store/movieSlice/movieThunk";
import { setDeleteId } from "../store/movieSlice/movieSlice";

const Delete: React.FC = () => {
	const dispatch = useAppDispatch();
	const deleteId = useAppSelector((state) => state.movies.deleteId);

	const handleDelete = () => {
		if (deleteId !== null) {
			dispatch(deleteMovie(deleteId));
			dispatch(setDeleteId(null));
		}
	};

	return (
		<Dialog
			open={Boolean(deleteId)}
			onClose={() => dispatch(setDeleteId(null))}>
			<DialogTitle>Подтверждения удаления</DialogTitle>
			<DialogContent>
				<DialogContentText>Вы действительно хотите удалить ?</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={() => dispatch(setDeleteId(null))}>
					Отмена
				</Button>
				<Button variant="contained" onClick={handleDelete}>
					Удалить
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Delete;
