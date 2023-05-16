import * as React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LinkMUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.upgrad.com/">
        Upgrad
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#f50157" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  color="menu"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  color="menu"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              {/* Email Address */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  color="menu"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {/* Password */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  color="menu"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* Confirm Password */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm password"
                  color="menu"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* Contact Number */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Contact"
                  color="menu"
                  label="Contact Number"
                  type="number"
                  id="contact"
                  autoComplete="+91"
                />
              </Grid>
            </Grid>
            {/* Sign Up Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="menu"
              component={Link}
              to="/login"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* Sign In Link */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkMUI href="/login" variant="body2">
                  Already have an account? Sign in
                </LinkMUI>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Copyright */}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
