import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import "./App.css";
import Views from "./Views";

const {palette} = createTheme();

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
    secondary: {
      main: "#77F6CD",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
