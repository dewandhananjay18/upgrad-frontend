import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        color="menu"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        {/* ToggleButton for All */}
        <ToggleButton value="All">All</ToggleButton>
        {/* ToggleButton for Apparel */}
        <ToggleButton value="Apparel">Apparel</ToggleButton>
        {/* ToggleButton for Electronics */}
        <ToggleButton value="Electronics">Electronics</ToggleButton>
        {/* ToggleButton for Personal Care */}
        <ToggleButton value="PersonalCare">Personal Care</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
}
