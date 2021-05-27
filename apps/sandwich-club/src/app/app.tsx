import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { NavigationBar } from './components/nav/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home.page';
import { lunchBunchTheme } from '../theme';
import ClubJoinPage from './pages/club-join.page';
import SandwichClubPage from './pages/sandwich-club.page';

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
            <ClubJoinPage />
          </Route>
          <Route path="/sandwich-club">
            <SandwichClubPage />
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
