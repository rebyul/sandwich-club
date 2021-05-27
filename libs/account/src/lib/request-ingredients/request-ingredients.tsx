import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RequestIngredientsProps {}

const StyledRequestIngredients = styled.div`
  color: pink;
`;

export function RequestIngredients(props: RequestIngredientsProps) {
  return (
    <StyledRequestIngredients>
      <h1>Welcome to request-ingredients!</h1>
    </StyledRequestIngredients>
  );
}

export default RequestIngredients;
