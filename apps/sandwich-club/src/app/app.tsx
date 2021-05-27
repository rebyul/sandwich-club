import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/nav/NavigationBar';

import HomePage from './pages/home.page';

const swcTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffe16f',
    },
    secondary: {
      main: green[500],
    },
  },
});

export const App = () => {
  const [m, setMessage] = useState({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={swcTheme}>
        <NavigationBar />
        <Switch>
          <Route path="/login">
            <h1>Login Page?</h1>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
