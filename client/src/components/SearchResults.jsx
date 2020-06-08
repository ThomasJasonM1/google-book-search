import React from "react";
import { Grid } from "@material-ui/core";
import SearchCard from "./SearchCard";

const SearchResults = (props) => {
    console.log('props', props);
	return (
		<Grid container spacing={4}>
			{props.BookList.map((book) => {
                console.log(book);
				return <SearchCard book={book} />;
			})}
		</Grid>
	);
};

export default SearchResults;
