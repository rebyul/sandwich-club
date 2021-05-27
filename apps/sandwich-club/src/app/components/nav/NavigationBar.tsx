import {
  Backdrop,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
}));

function NavigationBar() {
  const classes = useStyles();
  const [modalIsOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.homeLink} to="/">
              Lunch Bunch
            </Link>
          </Typography>
          <Button onClick={openLoginModal}>Login</Button>
        </Toolbar>
      </AppBar>
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
    </>
  );
}

export { NavigationBar };
