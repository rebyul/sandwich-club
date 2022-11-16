import React from 'react';

import styled from '@emotion/styled';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Backdrop,
  Dialog,
} from '@mui/material';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LoginModalProps {
  modalIsOpen: boolean;
  closeLoginModal: () => void;
  setUserLoggedIn: (boolean) => void;
}

export function LoginModal(props: LoginModalProps) {
  const { modalIsOpen, closeLoginModal, setUserLoggedIn } = props;

  return (
    <Dialog
      open={modalIsOpen}
      onClose={closeLoginModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <>
        <DialogTitle id="form-dialog-title">Welcome back to Lunch Bunch!</DialogTitle>
        <DialogContent>
          <DialogContentText>Login to manage your lunch bunch account</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            autoComplete="off"
            type="email"
            fullWidth
          />
          <TextField margin="dense" id="password" label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLoginModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              closeLoginModal();
              setUserLoggedIn(true);
            }}
            color="primary"
          >
            <Link to="/my-account">Login</Link>
          </Button>
        </DialogActions>
      </>
    </Dialog>
  );
}

export default LoginModal;
