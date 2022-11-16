import { createTheme, adaptV4Theme } from '@mui/material';
import { lunchbunchPalette } from './colors';
import { lunchbunchTypography } from './typography';

const lunchBunchTheme = createTheme(adaptV4Theme({
  palette: lunchbunchPalette,
  typography: lunchbunchTypography,
}));

export { lunchBunchTheme };
