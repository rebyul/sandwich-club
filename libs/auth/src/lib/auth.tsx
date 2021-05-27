import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AuthProps {}

const StyledAuth = styled.div`
  color: pink;
`;

export function Auth(props: AuthProps) {
  return (
    <StyledAuth>
      <h1>Welcome to auth!</h1>
    </StyledAuth>
  );
}

export default Auth;
