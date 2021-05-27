import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Section } from '../components/section/Section';

const useStyles = makeStyles({
  gridBg: {
    backgroundSize: '40px 40px',
    backgroundImage:
      'linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)',
  },
});

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Section>
        {/* <Grid alignItems="center" justify="center"> */}
        <img src="/assets/LunchBunch.png" width="100%" height="auto" alt="premium-lunch-bunch" />
        {/* </Grid> */}
      </Section>
      <Section />
      <a href="">Enrol into this weeks Sandwich Club</a>
      <br />
      <br />
      <Section>
        <Typography variant="h2">How it works?</Typography>
      </Section>
      <br />
      <h2>reviews</h2>
    </>
  );
}

export default HomePage;
