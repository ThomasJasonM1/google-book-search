import React, { useState } from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import API from "../utils/index";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
// import "../styles/BookSearch.css";

const BookSearch = () => {
	const [BookList, setBookList] = useState([]);
	// useEffect(() => {
		
	// })

	const onSearchSubmit = (searchTerm) => {
		API.findBooks(searchTerm)
			.then((response) => {
                console.log(response.data.items);
				setBookList(response.data.items);
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
