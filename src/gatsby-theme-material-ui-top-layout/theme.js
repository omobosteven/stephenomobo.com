import { createTheme } from "@material-ui/core";
import typography from "./theme/typography";
import palette from "./theme/palette";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#2D2E32",
        },
      },
    },
  },
  palette,
  typography,
});

export default theme;
