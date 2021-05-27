import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar, Grid, Paper, Fade, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

export interface CurrentIngredientsProps {
  date: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 800,
      height: 450,
    },
    gridListItem: {
      borderRadius: 25,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    paper: {
      margin: theme.spacing(1),
    },
    title: {
      color: 'white',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  })
);

const tileData = [
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/9415142008554.jpg',
    title: 'Bread',
    cost: '$3.49',
  },
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/9414735954537.jpg',
    title: 'Chicken',
    cost: '$7.99',
  },
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/9421026690722.jpg',
    title: 'Lettuce',
    cost: '$2.49',
  },
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/265691000009.jpg',
    title: 'Tomato',
    cost: '$9.99 per kg',
  },
];

export function CurrentIngredients(props: CurrentIngredientsProps) {
  const { date } = props;
  const classes = useStyles();

  const users = [
    {
      value: 0,
      name: 'Marcus',
      image: '../assets/Marcus.jpg',
    },
    {
      value: 1,
      name: 'Han Bo',
      image: '../assets/Hanbo.png',
    },
    {
      value: 2,
      name: 'Dom',
      image: '../assets/Dom.jpg',
    },
    {
      value: 3,
      name: '' +
        'Anders',
      image: '../assets/Anders.jpg',
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList} cols={3}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <ListSubheader component="div">Week {date + 1}</ListSubheader>
            </GridListTile>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={1} className={classes.gridListItem}>
                <Fade timeout={Math.random() * (1000 - 100) + 100} in={true}>
                  <Paper elevation={0} className={classes.paper}>
                    <img
                      src={tile.img}
                      alt={tile.title}
                      style={{ width: '100%', height: '100%', left: '25%' }}
                    />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>{tile.cost}</span>}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${tile.title}`}
                          className={classes.icon}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </Paper>
                </Fade>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" gutterBottom>
          Enrolled people
        </Typography>
        <List dense className={classes.root}>
          {users.map((user) => {
            const labelId = `checkbox-list-secondary-label-${user.value}`;
            return (
              <ListItem key={user.value} button>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${user.value + 1}`} src={user.image} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={user.name} />
              </ListItem>
            );
          })}
        </List>
        <Typography variant="h5" gutterBottom>
          Cost per person: <br />
          $4.54
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CurrentIngredients;
