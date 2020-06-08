import React from "react";
import { Grid } from "@material-ui/core";
import SearchCard from "./SearchCard";

const SearchResults = (props) => {
	return (
		<Grid container spacing={4}>
			{props.bookList.map((book) => {
				return <SearchCard book={book} />;
			})}
		</Grid>
	);
};

export default SearchResults;
