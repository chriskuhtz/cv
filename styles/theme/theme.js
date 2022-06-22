import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: { primary: "rgb(201,191,160)" },
    primary: { main: "rgb(247,232,199)" },
    background: { default: "rgb(42,50,72)" },
  },
});

export default theme;
