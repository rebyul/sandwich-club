import React from 'react';
import { WeekSelector, CurrentIngredients, RequestIngredients } from '@sandwich-club/account';

export default function MyAccountPage() {
  return (
    <>
      <WeekSelector /> <br />
      <CurrentIngredients /> <br />
      <RequestIngredients />
    </>
  );
}
