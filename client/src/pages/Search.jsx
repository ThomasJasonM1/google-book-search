import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import API from "../utils";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const BookSearch = () => {
    const [BookList, setBookList] = useState([]);
	useEffect(() => {
		onSearchSubmit('doomsday');
	}, [])

	const onSearchSubmit = (searchTerm) => {
        const bookSearchArray = [];
		API.findBooks(searchTerm)
			.then((response) => {
                response.data.items.map(item => {
                    const { authors, title, description, infoLink, imageLinks } =  item.volumeInfo;
                    const thisBook = {
                        title,
                        description,
                        link: infoLink,
                        authors,
                        image: imageLinks.smallThumbnail
                    }
                    bookSearchArray.push(thisBook);
                })
            }).then(() => {
                setBookList(bookSearchArray);
            })
			.catch((err) => console.log(err));
	};

	return (
		<div className="Book-search">
			<CssBaseline />
			<Container>
				<SearchBar onSearchSubmit={onSearchSubmit} />
				<SearchResults BookList={BookList} saved={false} />
			</Container>
		</div>
	);
};

export default BookSearch;
