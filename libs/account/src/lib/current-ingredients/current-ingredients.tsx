import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Paper, Slide } from '@material-ui/core';

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
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    paper: {
      margin: theme.spacing(1),
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

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Week {date + 1}</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={1}>
            <Slide direction="up" in={true}>
              <Paper elevation={0} className={classes.paper}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  style={{ width: '100%', height: '100%', left: '25%' }}
                />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>{tile.cost}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Paper>
            </Slide>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default CurrentIngredients;
