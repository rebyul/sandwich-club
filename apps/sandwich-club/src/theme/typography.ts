import createTypography from '@mui/material/styles/createTypography';
import { lunchbunchPalette } from './colors';

const lunchbunchTypography = createTypography(lunchbunchPalette, {
  fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
  button: {
    fontWeight: 700,
    fontSize: '1rem',
  },
});

export { lunchbunchTypography };
