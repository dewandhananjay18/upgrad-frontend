import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    logout: {
      main: "#f50157",
      darker: "#053e85",
    },
    menu: {
      main: "#4050b5",
      contrastText: "#fff",
    },
  },
});

export default function Select() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* ThemeProvider for custom theme */}
        <ThemeProvider theme={theme}>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            color="menu"
          >
            SortBy:
          </InputLabel>
        </ThemeProvider>
        <NativeSelect
          defaultValue={"Default"}
          inputProps={{
            name: "Default",
            id: "uncontrolled-native",
          }}
        >
          {/* Select options */}
          <option value={"Default"}>Default</option>
          <option value={"High to Low"}>Price: High to Low</option>
          <option value={"Low to High"}>Price: Low to High</option>
          <option value={"Newest"}>Newest</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
