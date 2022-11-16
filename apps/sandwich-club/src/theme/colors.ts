import { createPalette } from '@mui/material/styles';

const lunchbunchYellowPalette = {
  50: '#fffbee',
  100: '#fff6d4',
  200: '#fff0b7',
  300: '#ffea9a',
  400: '#ffe685',
  500: '#ffe16f',
  600: '#ffdd67',
  700: '#ffd95c',
  800: '#ffd552',
  900: '#ffcd40',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#fff9e8',
  A700: '#fff2cf',
};

const lunchbuncGreenPalette = {
  50: '#f3fae4',
  100: '#e0f2bc',
  200: '#ccea90',
  300: '#b8e163',
  400: '#a8da41',
  500: '#99d420',
  600: '#91cf1c',
  700: '#86c918',
  800: '#7cc313',
  900: '#6bb90b',
  A100: '#f2ffe5',
  A200: '#d9ffb3',
  A400: '#c0ff80',
  A700: '#b3ff66',
};

const lunchbunchPalette = createPalette({
  primary: {
    main: lunchbuncGreenPalette[500],
    light: lunchbuncGreenPalette[300],
    dark: lunchbuncGreenPalette[700],
  },
  secondary: {
    main: lunchbunchYellowPalette[500],
    light: lunchbunchYellowPalette[300],
    dark: lunchbunchYellowPalette[700],
  },
});
export { lunchbunchPalette };
