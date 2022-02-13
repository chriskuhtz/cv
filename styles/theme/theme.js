import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: { primary: "#cad2c5" },
    primary: { main: "#fefae0" },
    secondary: { main: "#84a98c" },
    background: { default: "#2f3e46" },
  },
});

export default theme;
