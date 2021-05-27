import createTypography from '@material-ui/core/styles/createTypography';
import { lunchbunchPalette } from './colors';

const lunchbunchTypography = createTypography(lunchbunchPalette, {
  fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
});

export { lunchbunchTypography };
