import * as React from "react";
import {Box, CssBaseline} from "@mui/material";

import {createTheme, ThemeProvider} from "@mui/material/styles";

import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";

Page.defaultProps = {
  header: true,
  footer: true,
};

function Page(props) {
  const {children, footer, header, auth} = props;

  const theme = createTheme({
    typography: {
      fontFamily: `"Lexend", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },

    palette: {
      primary: {
        main: "#512DA8",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {header && <PageHeader auth={auth} />}
        <Box sx={{mt: 2}}>{children}</Box>
        {footer && <PageFooter />}
      </ThemeProvider>
    </>
  );
}

export default Page;
