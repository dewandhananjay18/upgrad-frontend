import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";

const userIsAdmin = true;
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

export default function Cards() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, openSnak } = state;

  const handleClick = (newState) => () => {
    setState({ openSnak: true, ...newState });
  };

  const handleCloseSnak = () => {
    setState({ ...state, openSnak: false });
  };

  const handleClose = () => {
    setOpen(false);
    handleClick({
      vertical: "top",
      horizontal: "center",
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="iphone"
        height="140"
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
      />
      <CardContent>
        {/* Product name */}
        <Typography
          gutterBottom
          variant="h6"
          component="span"
          sx={{ mr: 10, mb: 2 }}
        >
          iPhone
        </Typography>
        {/* Product price */}
        <Typography
          gutterBottom
          variant="h6"
          component="span"
          sx={{ ml: 10, mb: 2 }}
        >
          Rs:40,000
        </Typography>
        {/* Product description */}
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          tristique senectus et netus.Purus sit amet luctus venenatis lectus
          magna. A erat nam at lectus. Vel eros donec ac odio.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ThemeProvider theme={theme}>
          {/* Buy button */}
          <Button
            variant="contained"
            size="small"
            color="menu"
            component={Link}
            to="/ProductDetail"
          >
            Buy
          </Button>
        </ThemeProvider>
        {userIsAdmin && (
          <>
            {/* Edit button */}
            <IconButton
              aria-label="delete"
              color="secoundey"
              sx={{ ml: 23 }}
              component={Link}
              to="/EditProduct"
            >
              <EditIcon />
            </IconButton>

            {/* Delete button */}
            <IconButton
              aria-label="delete"
              color="secoundey"
              onClick={handleClickOpen}
            >
              <DeleteIcon />
            </IconButton>

            {/* Confirmation dialog for deleting the product */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-delete"
              aria-describedby="alert-delete-description"
            >
              <DialogTitle id="alert-delete">
                {"Confirm Deletion of Product!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-delete-description">
                  Are you sure you want to delete the product?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <ThemeProvider theme={theme}>
                  {/* OK button */}
                  <Button
                    variant="contained"
                    size="small"
                    color="menu"
                    onClick={handleClose}
                  >
                    OK
                  </Button>
                  {/* Snackbar for displaying a message */}
                  <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={openSnak}
                    onClose={handleCloseSnak}
                    message="I love snacks"
                    key={vertical + horizontal}
                  />
                  {/* Cancel button */}
                  <Button
                    onClick={handleClose}
                    variant="bordered"
                    size="small"
                    color="menu"
                    autoFocus
                  >
                    Cancel
                  </Button>
                </ThemeProvider>
              </DialogActions>
            </Dialog>
          </>
        )}
      </CardActions>
    </Card>
  );
}
