import { Button, Grid } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

import { Flows } from '../components/how-it-works/Flows';
import { Reviews } from '../components/reviewSection/Reviews';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';

const PREFIX = 'HomePage';

const classes = {
  gridPaper: `${PREFIX}-gridPaper`,
  hackBottomMargin: `${PREFIX}-hackBottomMargin`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.gridPaper}`]: {
    backgroundSize: '35px 35px',
    backgroundImage: `linear-gradient(to right, #C0C0C0 1px, transparent 1px), linear-gradient(to bottom, #C0C0C0 1px, ${theme.palette.secondary.main} 1px)`,
  },

  [`& .${classes.hackBottomMargin}`]: {
    paddingBottom: '70px',
  },
}));

const HomePageHero: FC<PropsWithChildren<{ className: string }>> = ({ className, children }) => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    className={className}
  >
    {children}
  </Grid>
);

function HomePage() {
  return (
    <Root>
      <HomePageHero className={clsx(classes.gridPaper, classes.hackBottomMargin)}>
        <img src="/assets/LunchBunch.png" height="auto" alt="premium-lunch-bunch" />
        <Button size="large" variant="contained" color="primary">
          Join us this week
        </Button>
      </HomePageHero>
      <Flows />
      <Reviews />
    </Root>
  );
}

export default HomePage;
