import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CurrentIngredientsProps {}

const StyledCurrentIngredients = styled.div`
  color: pink;
`;

export function CurrentIngredients(props: CurrentIngredientsProps) {
  return (
    <StyledCurrentIngredients>
      <h1>Welcome to current-ingredients!</h1>
    </StyledCurrentIngredients>
  );
}

export default CurrentIngredients;
