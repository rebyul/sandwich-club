import { createMuiTheme } from '@material-ui/core';
import { lunchbunchPalette } from './colors';
import { lunchbunchTypography } from './typography';

const lunchBunchTheme = createMuiTheme({
  palette: lunchbunchPalette,
  typography: lunchbunchTypography,
});

export { lunchBunchTheme };
