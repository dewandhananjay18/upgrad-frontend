import React from "react";
import Toggle from "../ToggleButton/ToggleButton";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../Cards/Cards";
import Select from "../Select/Select";

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
      {/* Select Component */}
      <Box sx={{ maxWidth: 300, m: 2 }}>
        <Select />
      </Box>

      <Box>
        {/* Grid of Product Cards */}
        <Grid
          container
          sx={{ flexGrow: 1 }}
          spacing={2}
          rowSpacing={{ xs: 2, sm: 3, md: 10 }}
        >
          {/* Product Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
