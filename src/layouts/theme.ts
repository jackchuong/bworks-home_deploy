import { createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: green,

    background: {
      default: '#64b5f6',
    },
  },
  position: {
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
  },
});

export default theme;
