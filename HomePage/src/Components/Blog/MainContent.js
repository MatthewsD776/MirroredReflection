import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RHUL from './RHUL';
import Citrix from './Citrix';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
  
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function MainContent() {
    
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} md={8} >
                <Typography variant="h4" gutterBottom align="center">
                    Me, Myself and I
                </Typography>
                <Divider />
                <br/>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={6}>
                        <RHUL/>
                    </Grid>
                    <Grid item xs={6}>
                        <Citrix/>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}