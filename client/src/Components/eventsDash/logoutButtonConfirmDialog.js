import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link, useHistory } from "react-router-dom";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  let history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/");
    localStorage.clear();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Logout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to logout?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm
          </Button>
          {/* </Link> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
