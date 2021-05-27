import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/home.page';
import MyAccountPage from './pages/my-account.page';
import { LoginModal } from '@sandwich-club/auth';

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
  homeLinkIcon: {
    height: '1.2em',
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
              <img src="/assets/LunchBunchIcon.png" className={classes.homeLinkIcon} />
              Lunch Bunch
            </Link>
          </Typography>
          <Button onClick={openLoginModal}>Login</Button>
        </Toolbar>
      </AppBar>
      <LoginModal modalIsOpen={modalIsOpen} closeLoginModal={closeLoginModal} />

      <Switch>
        <Route path="/login">
          <MyAccountPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
