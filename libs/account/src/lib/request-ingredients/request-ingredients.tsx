import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Grid, Paper, Fade, Typography } from '@material-ui/core';
import { PlusOneOutlined } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';

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
    gridListItem: {},
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    paper: {
      margin: theme.spacing(1),
      borderRadius: 25,
    },
    title: {
      color: 'white',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
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
    return (
      <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Request Ingredients
          </Typography>
          <Typography variant="h4" gutterBottom align="center">
            Locked <LockIcon />
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Request Ingredients
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList} cols={5}>
            {ingredients.map((tile) => (
              <GridListTile key={tile.id} cols={1} className={classes.gridListItem}>
                <Fade timeout={Math.random() * (1000 - 100) + 100} in={true}>
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
                      subtitle={<span>${tile.pricePerUnit}</span>}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
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
                </Fade>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    </Grid>
  );
}

export default RequestIngredients;
