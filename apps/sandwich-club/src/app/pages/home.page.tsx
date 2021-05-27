import { makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles({});

const sectionStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Section: FC = ({ children }) => {
  const classes = sectionStyles();

  if (!children) return null;
  return <div className={classes.root}>{children}</div>;
};

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Section>
        <img src="/assets/LunchBunch.png" width="100%" height="auto" alt="premium-lunch-bunch" />
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
