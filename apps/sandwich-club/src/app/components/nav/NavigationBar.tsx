import { Button, AppBar as MuiAppBar, Toolbar, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom';
import { LoginModal } from '@sandwich-club/auth';
import { useState } from 'react';

const PREFIX = 'AppBar';

const classes = {
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`,
  homeLink: `${PREFIX}-homeLink`,
  homeLinkIcon: `${PREFIX}-homeLinkIcon`,
  appbar: `${PREFIX}-appBar`,
};

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  boxShadow: 'none',
  flexGrow: 1,

  [`& . ${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
  [`& .${classes.homeLink}`]: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  [`& .${classes.homeLinkIcon}`]: {
    height: '2rem',
  },
  [`& .${classes.appbar}`]: {},
}));

function NavigationBar() {
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
