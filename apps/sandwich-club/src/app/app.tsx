import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import { NavigationBar } from './components/nav/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home.page';
import MyAccountPage from './pages/my-account.page';

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
          <Route path="/my-account">
            <MyAccountPage />
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
