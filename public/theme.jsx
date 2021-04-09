import { createMuiTheme } from '@material-ui/core/styles';
// Overwriting core styling taking color from material ui

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      main: '#f9a825',
    },
  },
});

export default theme;
