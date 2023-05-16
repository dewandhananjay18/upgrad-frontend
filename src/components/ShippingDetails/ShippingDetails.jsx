import React from "react";
import { Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
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

// Custom Alert component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const steps = ["Items", "Select Address", "Confirm Order"];

// Helper function to render content based on the active step
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Box>
          <Grid container sx={{ flexGrow: 1 }} spacing={2}>
            {/* Content for step 1 */}
            <Box>
              <Grid container sx={{ flexGrow: 1 }} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      marginTop: 1,
                      display: "flex",
                    }}
                  >
                    <img
                      src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                      alt="Product"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      marginTop: 5,
                      marginLeft: 15,
                      display: "block",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="h4">IPhone 14 Pro</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="h7" sx={{ marginTop: 2 }}>
                        Quantity: 1
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="h7" sx={{ marginTop: 2 }}>
                        Category: Electronics
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="h7" sx={{ marginTop: 2 }}>
                        The iPhone 14 Pro and iPhone 14 Pro Max are smartphones
                        designed, developed, and marketed by Apple Inc. They are
                        the sixteenth-generation flagship iPhones, succeeding
                        the iPhone 13 Pro and iPhone 13 Pro Max. The devices
                        were unveiled alongside the iPhone 14 and iPhone 14 Plus
                        during the Apple Event at Apple Park in Cupertino,
                        California, on September 7, 2022.
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        variant="h5"
                        sx={{ marginTop: 2 }}
                        color="red"
                      >
                        Rs: 1,00,000
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      );
    case 1:
      return (
        <ThemeProvider theme={theme}>
          <Box>
            <Container component="main" maxWidth="md">
              {/* Content for step 2 */}
              <ThemeProvider theme={theme}>
                <Box>
                  {/* Select Address */}
                  <Container component="main" maxWidth="md">
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        color="menu"
                      >
                        Select Address
                      </InputLabel>
                      <NativeSelect
                        defaultValue={"Default"}
                        inputProps={{
                          name: "Default",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={"Select"}>Default</option>
                        <option value={"Address1"}>Address-1</option>
                      </NativeSelect>
                    </FormControl>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: 2 }}
                      align="center"
                    >
                      _OR_
                    </Typography>
                  </Container>

                  {/* Add Address */}
                  <Container component="main" maxWidth="xs">
                    <Typography
                      variant="h5"
                      sx={{ marginTop: 2 }}
                      align="center"
                    >
                      Add Address
                    </Typography>
                    <Box
                      sx={{
                        marginTop: 2,
                        display: "block",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        required
                        id="Name"
                        name="Name"
                        label="Name"
                        fullWidth
                        autoComplete="full-name"
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <TextField
                        required
                        id="ContactNumber"
                        name="Contact Number"
                        label="Contact Number"
                        fullWidth
                        autoComplete="contact"
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <TextField
                        required
                        id="Street"
                        name="Street"
                        label="Street"
                        fullWidth
                        autoComplete="Street"
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <TextField
                        id="City"
                        name="City"
                        label="City"
                        fullWidth
                        autoComplete="City"
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <TextField
                        required
                        id="State"
                        name="State"
                        label="State"
                        fullWidth
                        autoComplete="State"
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <TextField
                        id="Landmark"
                        name="Landmark"
                        label="Landmark"
                        fullWidth
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <TextField
                        required
                        id="zip"
                        name="Zip Code"
                        label="Zip Code"
                        fullWidth
                        autoComplete="ZipCode"
                        variant="outlined"
                        color="menu"
                        sx={{
                          marginTop: 2,
                        }}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="menu"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Save Address
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </ThemeProvider>
            </Container>
            <Container component="main" maxWidth="xs">
              {/* Content for step 2 */}
            </Container>
          </Box>
        </ThemeProvider>
      );
    case 2:
      return (
        <Box>
          <Grid container sx={{ flexGrow: 1 }} spacing={2}>
            {/* Content for step 3 */}
            <Box>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Grid container sx={{ flexGrow: 1 }} spacing={2}>
                  {/* Product Details */}
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        marginTop: 2,
                        marginLeft: 2,
                        display: "block",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h4">IPhone 14 Pro</Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography variant="h7" sx={{ marginTop: 2 }}>
                          Quantity: 1
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography variant="h7" sx={{ marginTop: 2 }}>
                          Category: Electronics
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography variant="h7" sx={{ marginTop: 2 }}>
                          The iPhone 14 Pro and iPhone 14 Pro Max are
                          smartphones designed, developed, and marketed by Apple
                          Inc. They are the sixteenth-generation flagship
                          iPhones, succeeding the iPhone 13 Pro and iPhone 13
                          Pro Max. The devices were unveiled alongside the
                          iPhone 14 and iPhone 14 Plus during the Apple Event at
                          Apple Park in Cupertino, California, on September 7,
                          2022.
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          variant="h5"
                          sx={{ marginTop: 2 }}
                          color="red"
                        >
                          Rs:100000
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Address Details */}
                  <Grid item sm={1}>
                    <Divider orientation="vertical" />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Box
                      sx={{
                        marginTop: 2,
                        marginLeft: 2,
                        display: "inline-block",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h4">
                            Address Details:{" "}
                          </Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">Name: Default</Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">
                            Contact: +91-9999999999
                          </Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">Street</Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">City</Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">State</Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">Landmark</Typography>
                        </ThemeProvider>
                      </Box>
                      <Box sx={{ display: "block" }}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h7">Zip: 111111</Typography>
                        </ThemeProvider>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Box>
      );
    default:
      throw new Error("Unknown step");
  }
}

export default function ShippingDetails() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ p: 1 }} color="menu">
            {/* Render each step of the stepper */}
            {steps.map((label) => (
              <Step key={label} color="menu">
                <StepLabel color="menu">{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* Render different content based on the active step */}
        {activeStep === steps.length ? (
          <>
            {/* Render a success message and a button to navigate to the product page */}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Product Ordered Successfully!
              </Alert>
            </Snackbar>
            <Navigate onClick={handleClick} to="/ProductPage" />
          </>
        ) : (
          <React.Fragment>
            {/* Render content specific to the active step */}
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {/* Render back button if not on the first step */}
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}

              {/* Render next/submit button */}
              <Button
                variant="contained"
                color="menu"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {/* Display "Place order" on the last step, otherwise "Next" */}
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Container>
    </ThemeProvider>
  );
}
