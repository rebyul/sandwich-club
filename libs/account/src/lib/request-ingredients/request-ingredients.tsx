import { Fade, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import ListSubheader from '@mui/material/ListSubheader';
import LockIcon from '@mui/icons-material/Lock';
import { PlusOneOutlined } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const PREFIX = 'RequestIngredients';

const classes = {
  root: `${PREFIX}-root`,
  gridList: `${PREFIX}-gridList`,
  gridListItem: `${PREFIX}-gridListItem`,
  icon: `${PREFIX}-icon`,
  paper: `${PREFIX}-paper`,
  title: `${PREFIX}-title`,
  titleBar: `${PREFIX}-titleBar`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  [`& .${classes.gridList}`]: {
    width: '80%',
    height: 450,
  },

  [`& .${classes.gridListItem}`]: {},

  [`& .${classes.icon}`]: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

  [`& .${classes.paper}`]: {
    margin: theme.spacing(1),
    borderRadius: 25,
  },

  [`& .${classes.title}`]: {
    color: 'white',
  },

  [`& .${classes.titleBar}`]: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
}));

export interface RequestIngredientsProps {
  date: number;
}

export function RequestIngredients(props: RequestIngredientsProps) {
  const { date } = props;

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
      <StyledGrid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Request Ingredients
          </Typography>
          <Typography variant="h4" gutterBottom align="center">
            Locked <LockIcon />
          </Typography>
        </Grid>
      </StyledGrid>
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
          <ImageList rowHeight={180} className={classes.gridList} cols={5}>
            {ingredients.map((tile) => (
              <ImageListItem key={tile.id} cols={1} className={classes.gridListItem}>
                <Fade timeout={Math.random() * (1000 - 100) + 100} in={true}>
                  <Paper elevation={0} className={classes.paper}>
                    {tile.img && (
                      <img
                        src={tile.img}
                        alt={tile.name}
                        style={{ width: '100%', height: '100%', left: '25%' }}
                      />
                    )}

                    <ImageListItemBar
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
                          size="large"
                        >
                          <PlusOneOutlined />
                        </IconButton>
                      }
                    />
                  </Paper>
                </Fade>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Grid>
    </Grid>
  );
}

export default RequestIngredients;
