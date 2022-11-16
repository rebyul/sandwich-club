import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const PREFIX = 'ClubJoin';

const classes = {
  card: `${PREFIX}-card`,
  gridItem: `${PREFIX}-gridItem`,
  cardActionArea: `${PREFIX}-cardActionArea`,
  media: `${PREFIX}-media`
};

const StyledGrid = styled(Grid)({
  [`& .${classes.card}`]: {
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  [`& .${classes.gridItem}`]: {
    alignSelf: 'stretch',
  },
  [`& .${classes.cardActionArea}`]: {
    marginBottom: 'auto',
  },
  [`& .${classes.media}`]: {
    height: 140,
  },
});

export function ClubJoin() {


  return (
    <StyledGrid container spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
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
            <Button size="small" color="primary" to="/sandwich-club" component={Link}>
              Join
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
    </StyledGrid>
  );
}

export default ClubJoin;
