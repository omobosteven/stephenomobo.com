import { createTheme } from "@material-ui/core";
import typography from './theme/typography';
import palette from "./theme/palette";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#25262B'
        }
      }
    }
  },
  palette,
  typography
});

export default theme;
