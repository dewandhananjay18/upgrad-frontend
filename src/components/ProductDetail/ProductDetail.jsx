import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toggle from "../ToggleButton/ToggleButton";

// Creating a custom theme using MUI's `createTheme` function
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
    buy: {
      main: "#ff131d",
      contrastText: "#fff",
    },
  },
});

export default function ProductPage() {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      {/* Toggle Button Component */}
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toggle />
      </Box>
      <Box>
        <Grid container sx={{ flexGrow: 1 }} spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
              }}
            >
              {/* Product Image */}
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                alt="Product"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                marginTop: 15,
                marginLeft: 20,
                display: "block",
              }}
            >
              {/* Product Details */}
              <Box sx={{ display: "flex" }}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h4">IPhone 14 Pro</Typography>
                  <Chip
                    label="Available Quantity: 145"
                    sx={{ marginLeft: 2 }}
                    color="menu"
                  />
                </ThemeProvider>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h7" sx={{ marginTop: 2 }}>
                  Category: Electronics
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h7" sx={{ marginTop: 2 }}>
                  The iPhone 14 Pro and iPhone 14 Pro Max are smartphones
                  designed, developed, and marketed by Apple Inc. They are the
                  sixteenth-generation flagship iPhones, succeeding the iPhone
                  13 Pro and iPhone 13 Pro Max. The devices were unveiled
                  alongside the iPhone 14 and iPhone 14 Plus during the Apple
                  Event at Apple Park in Cupertino, California, on September 7,
                  2022.
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h5" sx={{ marginTop: 2 }} color="red">
                  Rs:100,000
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: 2 }}>
                {/* Quantity TextField */}
                <ThemeProvider theme={theme}>
                  <TextField
                    id="Quantity"
                    label="Quantity"
                    variant="outlined"
                    color="menu"
                  />
                </ThemeProvider>
              </Box>
              <Box sx={{ display: "flex", marginTop: 2 }}>
                {/* Place Order Button */}
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    size="medium"
                    color="menu"
                    component={Link}
                    to="/ShippingDetails"
                  >
                    Place Order
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
