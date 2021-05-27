import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { NavigationBar } from './components/nav/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home.page';
import MyAccountPage from './pages/my-account.page';
import { lunchBunchTheme } from '../theme';

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
      <ThemeProvider theme={lunchBunchTheme}>
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
