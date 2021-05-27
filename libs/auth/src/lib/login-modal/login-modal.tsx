import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LoginModalProps {}

const StyledLoginModal = styled.div`
  color: pink;
`;

export function LoginModal(props: LoginModalProps) {
  return (
    <StyledLoginModal>
      <h1>Welcome to login-modal!</h1>
    </StyledLoginModal>
  );
}

export default LoginModal;
