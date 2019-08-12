import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

export default function MainContent() {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                Right From the Horse's Mouth
            </Typography>
            <Divider />
            <br/>
            <Markdown>
                # Me, Myself and I
            </Markdown>
            <Markdown>
                ## Life in a nutshell
            </Markdown>
            <Markdown>
                Born and raised in Kent, Gillingham to be exact. 
                Then went to Royal Holloway University in Egham. 
                Now living in Cambridge working as a Software Engineer at Citrix. 
                Working within the Localisation team I get to experience many different languages and cultures. 
                I can speak many languages and can almost form a sentence in most of them!
            </Markdown>
        </Grid>
    );
}