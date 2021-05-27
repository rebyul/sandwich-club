import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RequestIngredientsProps {
  date: number;
}

const StyledRequestIngredients = styled.div`
  color: pink;
`;

export function RequestIngredients(props: RequestIngredientsProps) {
  const { date } = props;
  return (
    <StyledRequestIngredients>
      {date > 0 && (
        <>
          <h1> Request Ingredients Now</h1>
        </>
      )}
    </StyledRequestIngredients>
  );
}

export default RequestIngredients;
