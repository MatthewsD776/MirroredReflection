import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    }
}));

const socials = [
    {
        name: 'Github',
        link: 'https://github.com/MatthewsD776'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/darren.matthews.733'
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/theonetheonlyrazzledazzle/?hl=en'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/darren-matthews776/'
    }
]

export default function SideBar() {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                    About
                </Typography>
                <Typography>
                    This is all about showing off my skills, ideas, thoughts and opinions on anything I find interesting
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
            </Typography>
            {socials.map(network => (
                <Link display="block" variant="body1" href={network.link} key={network.name}>
                {network.name}
                </Link>
            ))}
        </Grid>
    );
}