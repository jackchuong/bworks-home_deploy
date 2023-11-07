import { createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: green,

    background: {
      default: 'white',
    },
  },
  position: {
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
  },
});

export default theme;
