import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mainGreen: '#00FFC2',
    hoverRed: '#FF4000',
    white: '#FFFFFF',
    backgroundDark: '#003c2d',
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  devices: {
    mobile: `(max-width: 374px)`,
    sm_tablet: `(max-width: 499px)`,
    tablet: `(max-width: 799px)`,
    laptop: `(max-width: 1023px)`,
    desktop: `(max-width: 1439px)`,
  },
});
