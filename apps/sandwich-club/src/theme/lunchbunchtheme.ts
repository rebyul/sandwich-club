import { adaptV4Theme, createTheme } from '@mui/material';

import { lunchbunchPalette } from './colors';
import { lunchbunchTypography } from './typography';

// in the file where you are creating the theme (invoking the function `createTheme()`)
// import { Theme } from '@mui/material/styles';

// declare module '@mui/styles' {
//   interface DefaultTheme extends Theme {}
// }

const lunchBunchTheme = createTheme(
  adaptV4Theme({
    palette: lunchbunchPalette,
    typography: lunchbunchTypography,
  })
);

export { lunchBunchTheme };
