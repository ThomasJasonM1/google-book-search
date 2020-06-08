import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function Navbar() {
    useEffect(() => {
        const href = window.location.pathname;
        switch (href) {
            case '/contact':
                return setValue(1);
            case '/portfolio':
                return setValue(2);
            default:
                return setValue(0);
        }
    });

    const useStyles = makeStyles({
        tabsStyles: {
            background: '#edf2f7',
        },
        navStyles: {
            color: 'rgba(0,0,0,0.54)',
            margin: 'auto',
            height: '2em',
            paddingTop: '0.4em'
        }
    });

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                className={classes.tabsStyles}
            >
                
                <Tab label="Search" to='/home' component={Link} />
                <Tab label="Saved" to='/contact' component={Link} />
            </Tabs>
        </Paper>
    );
}