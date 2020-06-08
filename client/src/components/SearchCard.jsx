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

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const SearchCard = (props) => {
	const classes = useStyles();
	const { title, authors, description, imageLinks, infoLink } = props.book.volumeInfo;

	return (
		<>
			<Grid item key={props.id} xs={12} sm={6} md={4}>
				<Card className={classes.root}>
					<CardMedia
						className={classes.media}
						image={imageLinks.smallThumbnail || ''}
						title={title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{authors.map(author => `${author} `)}
						</Typography>
						<Typography>{description}</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							View
						</Button>
						{props.isSignedIn === true ? (
							<Button size="small" color="primary">
								Edit
							</Button>
						) : null}
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default SearchCard;
