import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';

import ClubJoinPage from './pages/club-join.page';
import HomePage from './pages/home.page';
import { NavigationBar } from './components/nav/NavigationBar';
import SandwichClubPage from './pages/sandwich-club.page';
import { lunchBunchTheme } from '../theme';

export const App = () => {
  const [, setMessage] = useState({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={lunchBunchTheme}>
          <NavigationBar />
          <Routes>
            <Route path="/my-account" element={<ClubJoinPage />} />
            <Route path="/sandwich-club" element={<SandwichClubPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};

export default App;
