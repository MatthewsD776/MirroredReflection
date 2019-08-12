import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from './Toolbar';
import SiteNav from './SiteNav';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeature from './MainFeature';
import FeaturedPostsData from '../../Data/FeaturePostsData';
import FeaturedPosts from './FeaturedPosts';
import SideBar from './SideBar';
import MainContent from './MainContent';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar/>

        <SiteNav/>

        <main>
          <MainFeature/>

          <Grid container spacing={4} className={classes.cardGrid}>
            {FeaturedPostsData.map(post => (
              <FeaturedPosts data={post}/>
            ))}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            <MainContent/>
            <SideBar/>
          </Grid>

        </main>

      </Container>

      <Footer/>

    </React.Fragment>
  );
}
