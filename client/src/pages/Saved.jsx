import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import API from "../utils";
import SearchResults from "../components/SearchResults";

const BookSearch = () => {
	const [BookList, setBookList] = useState([]);
	useEffect(() => {
        let apiBooks = [];
		API.getBooks().then((response) => {
            response.data.map(book => {
                const thisBook = {
                    title: book.title,
                    authors: book.authors,
                    image: book.image,
                    description: book.description,
                    link: book.link,
                    id: book._id
                }
                console.log('thisBook', thisBook);
                apiBooks.push(thisBook);
            });
        })
        .then(() => {
            setBookList(apiBooks);
        })
        .catch((err) => console.log(err));;
    }, [])

	return (
		<div className="Book-saved">
			<CssBaseline />
			<Container>
				<SearchResults BookList={BookList} saved={true} />
			</Container>
		</div>
	);
};

export default BookSearch;
