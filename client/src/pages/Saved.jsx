import React from 'react';

const Portfolio = () => {
    const useStyles = makeStyles((theme) => ({
        cardStyles: {
            padding: '1em',
        },
        containerStyles: {
            marginBottom: '7em',
        },
    }));
    const classes = useStyles();

    const projects= [
        {
            name: 'Hangman',
            link: '',
            // image: '',
        },
        {
            name: 'RPG Game',
            link: '',
            image: '',
        },
        {
            name: 'Trivia Game',
            link: '',
            image: '',
        },
        {
            name: 'Weather App',
            link: '',
            image: '',
        },
        {
            name: 'Rock Paper Scissors',
            link: '',
            image: '',
        }
    ];

    return (
        <Container className={classes.containerStyles}>
            <Row>
                <h1>Portfolio</h1>
            </Row>
            <Row>
                {projects.map(project => {
                    return (
                        <Col className={classes.cardStyles} sm='12' md='4' >
                            <ProjectCard
                                name={project.name}
                                link={project.link}
                                image={project.image}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default Portfolio;