import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AccountProps {}

const StyledAccount = styled.div`
  color: pink;
`;

export function Account(props: AccountProps) {
  return (
    <StyledAccount>
      <h1>Welcome to account!</h1>
    </StyledAccount>
  );
}

export default Account;
