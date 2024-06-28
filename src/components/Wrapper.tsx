import React from "react";
import Header from "./Header";
import MovieForm from "./MovieForm";
import Movie from "./Movie";
import Edit from "./Edit";
import Delete from "./Delete";

const Wrapper: React.FC = () => {
	return (
		<div>
			<Header />
			<MovieForm />
			<Movie />
			<Edit />
			<Delete />
		</div>
	);
};

export default Wrapper;
