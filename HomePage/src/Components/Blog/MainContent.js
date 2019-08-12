import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import post1 from '../../Resources/blog-post.1.md';
import post2 from '../../Resources/blog-post.2.md';
import post3 from '../../Resources/blog-post.3.md';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  }
}));

const posts = [post1, post2, post3];

export default function MainContent() {
    const classes = useStyles();

    console.log(post1);

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                From the Firehose
            </Typography>
            <Divider />
            {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
        </Grid>
    );
}