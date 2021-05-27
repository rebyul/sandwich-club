import { Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  gridPaper: {
    backgroundSize: '35px 35px',
    backgroundImage: `linear-gradient(to right, #C0C0C0 1px, transparent 1px), linear-gradient(to bottom, #C0C0C0 1px, ${theme.palette.secondary.main} 1px)`,
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
      <HomePageHero className={classes.gridPaper}>
        <img src="/assets/LunchBunch.png" height="auto" alt="premium-lunch-bunch" />
        <Button>Join us this week</Button>
      </HomePageHero>
      <br />
      <br />
      <HomePageHero>
        <Paper elevation={0}>
          <Container>
            <Typography variant="h2">How it works?</Typography>
            <br />
          </Container>
        </Paper>
      </HomePageHero>
      <br />
      <h2>reviews</h2>
    </>
  );
}

export default HomePage;
