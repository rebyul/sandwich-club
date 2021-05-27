import { DialogActions } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {
  AppBar,
  Backdrop,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, useHistory, Switch, Link } from 'react-router-dom';
import HomePage from './pages/home.page';

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
  headerToolbar: {
    backgroundColor: '#ffe16f',
  },
  homeLink: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

export const App = () => {
  const [m, setMessage] = useState({ message: '' });
  const [modalIsOpen, setIsLoginOpen] = React.useState(false);
  const classes = useStyles();

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar className={classes.headerToolbar}>
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

      <Switch>
        <Route path="/login">
          <h1>Login Page?</h1>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
