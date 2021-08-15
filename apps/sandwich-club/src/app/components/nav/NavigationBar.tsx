import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { LoginModal } from '@sandwich-club/auth';
import { useState } from 'react';
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
  homeLinkIcon: {
    height: '2rem',
  },
  appbar: {
    boxShadow: 'none',
  },
}));

function NavigationBar() {
  const classes = useStyles();
  const [modalIsOpen, setIsLoginOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.homeLink} to="/">
              <img src="/assets/LunchBunch-logo.png" className={classes.homeLinkIcon} alt="icon" />
            </Link>
          </Typography>
          {!userLoggedIn && (
            <Button onClick={openLoginModal} className={classes.homeLink}>
              Login
            </Button>
          )}
          {userLoggedIn && (
            <>
              <Button onClick={() => setUserLoggedIn(false)}>
                {' '}
                <Link className={classes.homeLink} to="/my-account">
                  My Account
                </Link>
              </Button>

              <Button onClick={() => setUserLoggedIn(false)}>
                {' '}
                <Link className={classes.homeLink} to="/">
                  Logout
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <LoginModal
        modalIsOpen={modalIsOpen}
        closeLoginModal={closeLoginModal}
        setUserLoggedIn={setUserLoggedIn}
      />
    </>
  );
}

export { NavigationBar };
