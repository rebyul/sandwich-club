import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Section } from '../components/section/Section';
import { FlowCard } from '../components/container/FlowCard';
import { Flows } from '../components/container/Flows';

const useStyles = makeStyles({});

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
        <Flows></Flows>
      </Section>
      <br />
      <h2>reviews</h2>
    </>
  );
}

export default HomePage;
