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

export default function RHUL() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="RHUL"
                height="140"
                image="https://intranet.royalholloway.ac.uk/staff/assets/img/brand-toolkit/logo-small-london-cmyk.jpg"
                title="RHUL"
                className={classes.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Royal Holloway University
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Started studying Computer Science in 2015. Graduated in 2018 with 1st Degree Honors.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Link component={Button} href="https://www.royalholloway.ac.uk/student-life/visit-royal-holloway/">
                    Visit RHUL
            </Link>
        </CardActions>
    </Card>
  );
}