import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  gridItem: {
    alignSelf: 'stretch',
  },
  cardActionArea: {
    marginBottom: 'auto',
  },
  media: {
    height: 140,
  },
});

export interface ClubJoinProps {}

export function ClubJoin(props: ClubJoinProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
      <Grid item xs={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardActionArea}>
            <CardMedia
              className={classes.media}
              image="../assets/sandwich-club.jpg"
              title="Sandwich Club"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sandwich Club
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A club for sandwich lovers. Everything tastes better when its between two slices of
                bread right
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                4 People are enrolled in this club:
                <br />
                Marcus, Bo, Dom and Anders(?? Hint hint)
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/sandwich-club" {...props}>
                Join
              </Link>
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardActionArea}>
            <CardMedia
              className={classes.media}
              image="../assets/pizza-club.jpg"
              title="Pizza Club"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pizza Club
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Not associated with the pizza club chain but argueably better pizzas are produced
                here.
                {/* <br />
                <br />
                <br />
                <br /> */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Coming Soon
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardActionArea}>
            <CardMedia
              className={classes.media}
              image="../assets/chatting-club.jpg"
              title="Chatting Club"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Just Chatting
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A club for people who don't eat
                <br />
                <br />
                <br />
                <br />
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Coming Soon
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image="../assets/spa-club.jpg" title="Spa Club" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Spas and Hot Tubs
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Not advertiser friendly, created to give a place for non PG speakers
                <br />
                <br />
                <br />
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Coming Soon
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ClubJoin;
