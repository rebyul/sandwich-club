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
} from '@material-ui/core';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LoginModalProps {
  modalIsOpen: boolean;
  closeLoginModal: () => void;
}

export function LoginModal(props: LoginModalProps) {
  const { modalIsOpen, closeLoginModal } = props;

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
            type="email"
            fullWidth
          />
          <TextField margin="dense" id="password" label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeLoginModal} color="primary">
            Cancel
          </Button>
          <Button onClick={closeLoginModal} color="primary">
            <Link to="/login">Login</Link>
          </Button>
        </DialogActions>
      </>
    </Dialog>
  );
}

export default LoginModal;
