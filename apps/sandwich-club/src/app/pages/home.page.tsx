import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Section } from '../components/section/Section';
import { FlowCard } from '../components/container/FlowCard';
import { Flows } from '../components/container/Flows';

const useStyles = makeStyles((theme) => ({
  works: {
    backgroundColor: theme.palette.background.paper,
  },
  gridPaper: {
    backgroundSize: '35px 35px',
    backgroundImage: `linear-gradient(to right, #C0C0C0 1px, transparent 1px), linear-gradient(to bottom, #C0C0C0 1px, ${theme.palette.secondary.main} 1px)`,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" alignItems="center" className={classes.gridPaper}>
        <img src="/assets/LunchBunch.png" height="auto" alt="premium-lunch-bunch" />
      </Grid>
      <Section />
      <a href="">Enrol into this weeks Sandwich Club</a>
      <br />
      <br />
      <Section>
<<<<<<< HEAD
        <Flows></Flows>
=======
        <Container className={classes.works} fixed>
          <Typography variant="h2">How it works?</Typography>
          <br />
        </Container>
>>>>>>> b4b2c3d6dad1b0089b87daf2c8d6bcca74708964
      </Section>
      <br />
      <h2>reviews</h2>
    </>
  );
}

export default HomePage;
