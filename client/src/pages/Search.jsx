import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import API from "../utils/API.js";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import "../styles/BookSearch.css";

const BookSearch = () => {
	const [BookList, setBookList] = useState([]);
	useEffect(() => {
		
	})

	const onSearchSubmit = (searchTerm) => {
		API.BookNavSearch(searchTerm)
			.then((response) => {
				setBookList(response.data);
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="Book-search">
			<CssBaseline />
			<Container>
				<SearchBar onSearchSubmit={onSearchSubmit} />
				<SearchResults BookList={BookList} />
			</Container>
		</div>
	);
};

export default BookSearch;
