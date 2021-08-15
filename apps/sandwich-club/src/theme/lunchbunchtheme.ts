import { createTheme } from '@material-ui/core';
import { lunchbunchPalette } from './colors';
import { lunchbunchTypography } from './typography';

const lunchBunchTheme = createTheme({
  palette: lunchbunchPalette,
  typography: lunchbunchTypography,
});

export { lunchBunchTheme };
