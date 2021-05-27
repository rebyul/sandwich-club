import { Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import clsx from 'clsx';
import { Flows } from '../components/how-it-works/Flows';

const useStyles = makeStyles((theme) => ({
  gridPaper: {
    backgroundSize: '35px 35px',
    backgroundImage: `linear-gradient(to right, #C0C0C0 1px, transparent 1px), linear-gradient(to bottom, #C0C0C0 1px, ${theme.palette.secondary.main} 1px)`,
  },
  hackBottomMargin: {
    paddingBottom: '70px',
  },
}));

const HomePageHero: FC<{ className?: string }> = ({ className, children }) => (
  <Grid container direction="column" justify="center" alignItems="center" className={className}>
    {children}
  </Grid>
);

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <HomePageHero className={clsx(classes.gridPaper, classes.hackBottomMargin)}>
        <img src="/assets/LunchBunch.png" height="auto" alt="premium-lunch-bunch" />
        <Button size="large" variant="contained" color="primary">
          Join us this week
        </Button>
      </HomePageHero>

      <Flows></Flows>
      <h2>reviews</h2>
    </>
  );
}

export default HomePage;
