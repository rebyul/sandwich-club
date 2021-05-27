import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Section } from '../components/section/Section';
import { Reviews } from '../components/reviewSection/Reviews'

const useStyles = makeStyles({});

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Section >
        {/* <img src="/assets/LunchBunch.png" height="auto" alt="premium-lunch-bunch" /> */}
      </Section>
      <a href="">Enrol into this weeks Sandwich Club</a>
      <br />
      <br />
      <Section>
        <Typography variant="h2">How it works?</Typography>
      </Section>
      <br />
      <Reviews />
    </>
  );
}

export default HomePage;
