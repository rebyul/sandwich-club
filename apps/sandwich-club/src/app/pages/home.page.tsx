import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Section } from '../components/section/Section';

const useStyles = makeStyles((theme) => ({
  works: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Section>
        {/* <Grid alignItems="center" justify="center"> */}
        <img src="/assets/LunchBunch.png" height="auto" alt="premium-lunch-bunch" />
        {/* </Grid> */}
      </Section>
      <Section />
      <a href="">Enrol into this weeks Sandwich Club</a>
      <br />
      <br />
      <Section>
        <Container className={classes.works} fixed>
          <Typography variant="h2">How it works?</Typography>
          <br />
        </Container>
      </Section>
      <br />
      <h2>reviews</h2>
    </>
  );
}

export default HomePage;
