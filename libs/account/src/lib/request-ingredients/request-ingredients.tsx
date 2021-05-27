import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Paper, Slide } from '@material-ui/core';
import { PlusOneOutlined } from '@material-ui/icons';

export interface RequestIngredientsProps {
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
      width: '80%',
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

export function RequestIngredients(props: RequestIngredientsProps) {
  const { date } = props;
  const classes = useStyles();

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('/api/ingredients')
      .then((r) => r.json())
      .then((r) => {
        setIngredients(r.ingredients);
      });
  }, []);

  if (date === 0 || !ingredients) {
    return <></>;
  }

  return (
    <>
      <h1>Request Ingredients for Week {date + 1}</h1>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList} cols={5}>
          {ingredients.map((tile) => (
            <GridListTile key={tile.id} cols={1}>
              <Slide direction="up" in={true}>
                <Paper elevation={0} className={classes.paper}>
                  {tile.img && (
                    <img
                      src={tile.img}
                      alt={tile.name}
                      style={{ width: '100%', height: '100%', left: '25%' }}
                    />
                  )}

                  <GridListTileBar
                    title={tile.name}
                    subtitle={<span>{tile.pricePerUnit}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`Request Ingredient ${tile.name}`}
                        className={classes.icon}
                      >
                        <PlusOneOutlined />
                      </IconButton>
                    }
                  />
                </Paper>
              </Slide>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default RequestIngredients;
