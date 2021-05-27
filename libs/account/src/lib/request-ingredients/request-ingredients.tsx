import React from 'react';

/* eslint-disable-next-line */
export interface RequestIngredientsProps {
  date: number;
}

export function RequestIngredients(props: RequestIngredientsProps) {
  const { date } = props;
  return (
    <>
      {date > 0 && (
        <>
          <h1> Request Ingredients Now</h1>
        </>
      )}
    </>
  );
}

export default RequestIngredients;
