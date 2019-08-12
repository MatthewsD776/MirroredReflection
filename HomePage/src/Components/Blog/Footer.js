import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    footer: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          DarrenMatthews.dev
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built using '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI.
        </Link>
      </Typography>
    );
}

export default function Footer(){
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Container maxWidth="lg">
              <Divider />
              <Typography variant="h6" align="center" gutterBottom>
                  ありがとうございました
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  You have reached the bottom of the page, there is no turning back!
              </Typography>
              <Copyright/>
            </Container>
        </footer>
    );
}