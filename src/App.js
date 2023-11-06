import {
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Employee from "./pages/Employees/Employee";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },

    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },

    background: {
      default: "#f4f5fd",
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <div className={classes.appMain}>
        <Header />

        <Employee />
      </div>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
