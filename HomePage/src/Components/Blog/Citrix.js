import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  image: {
    objectFit: "fill"
  }
});

export default function Citrix() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Citrix"
                height="140"
                image="https://www.citrix.com/content/dam/citrix61/en_us/images/logos/citrix/citrix-logo-black.jpg"
                title="Citrix"
                className={classes.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Citrix
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Started working at Citrix after graduating in 2019 as a Software Engineer within the Localisation Team.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Link component={Button} href="https://www.citrix.com/en-gb/">
                    Check out Citrix
            </Link>
        </CardActions>
    </Card>
  );
}