import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button
} from "@material-ui/core";
import API from "../utils";

const useStyles = makeStyles({
	root: {
	},
	media: {
        height: 500,
	}
});

const SearchCard = (props) => {
    const classes = useStyles();
    const { authors, title, description, image, link } = props.book;
    
    const addBook = (e) => {
        e.target.innerHTML = 'Saved'
        API.saveBook({
            title,
            authors,
            description,
            image,
            link
        });
    }

    const removeBook = () => {
        API.deleteBook(props.book.id);
    }

	return props.book ? (
		<>
			<Grid item xs={12} sm={6} md={4}>
				<Card className={classes.root}>
					<CardMedia
						className={classes.media}
						image={image || ''}
                        title={title}
                        src="img"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{authors && authors.map(author => `${author} `)}
						</Typography>
						<Typography>{description}</Typography>
					</CardContent>
					<CardActions>
                        <Button 
                            size="small" 
                            color="primary"
                            onClick={(e) => props.saved ? removeBook() : addBook(e)}
                        >
							{props.saved ? 'Remove Book' : 'Save Book'}
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	) : null;
};

export default SearchCard;
