import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { FlowCard } from './FlowCard';

const PREFIX = 'Flows';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: '80vw',
    margin: 'auto',
    marginTop: '16px',
  },
}));

export const Flows: FC = () => {
  return (
    <StyledGrid
      className={classes.root}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3">How it works</Typography> <br />
      <br />
      <Grid container direction="row" justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <FlowCard
            imgUrl="/assets/Join.jpg"
            title="Sign up"
            subtitle="Sign up for free and enroll yourself to a given week"
          ></FlowCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FlowCard
            imgUrl="/assets/Ingredients.jpg"
            title="Browse"
            subtitle="Browse the wide selection of fresh ingredients and make requests for upcoming material"
          ></FlowCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FlowCard
            imgUrl="/assets/Invoice.png"
            title="Get invoiced"
            subtitle="Get sent an invoice with the total bill of all materials for the upcoming week (the more people join, the cheaper it gets! Economy of scale babyyyy)"
          ></FlowCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FlowCard
            imgUrl="/assets/Dish1.jpg"
            title="Chill and wait"
            subtitle="Chill and wait for Dom to buy everything and bring it all to work :heart: thanks a (lunch) bunch dom"
          ></FlowCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FlowCard
            imgUrl="/assets/Sandwich.jpg"
            title="Feel valued"
            subtitle="Make delicious scrumptious sandwiches together and feel valued"
          ></FlowCard>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};
