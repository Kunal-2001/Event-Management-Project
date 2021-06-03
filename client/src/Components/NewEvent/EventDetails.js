import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function AddressForm({ eventData, setEventData }) {
  const classes = useStyles();
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setEventData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleFileChange = async (e) => {
    e.preventDefault();
    const fileData = e.target.files[0];
    setEventData((prevState) => {
      return {
        ...prevState,
        thumbnailImage: fileData,
      };
    });
    let formData = new FormData();
    formData.append("thumbnailImage", fileData);
    await axios({
      method: "POST",
      data: formData,
      url: "http://localhost:5000/thumbnailUpload",
    })
      .then((res) => {
        console.log(res);
        // history.push("/newevent");
      })
      .catch((err) => {
        console.log(err);
        console.log("Mine");
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("thumbnailImage", eventData.thumbnailImage);
    console.log(formData);
    console.log(eventData);
    await axios({
      method: "POST",
      data: formData,
      url: "http://localhost:5000/newevent",
    })
      .then((res) => {
        console.log(res);
        // history.push("/newevent");
      })
      .catch((err) => {
        console.log(err);
        console.log("Mine");
      });
  };

  const handleEventRemoteStatus = (e) => {
    let eventOnlineStatus = eventData.isOnline;
    setEventData((prevState) => {
      return {
        ...prevState,
        isOnline: !eventOnlineStatus,
      };
    });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Event Information:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="eventName"
            value={eventData.eventName}
            label="Event Name"
            fullWidth
            autoComplete="given-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="genre"
            name="genre"
            value={eventData.genre}
            label="Choose genre"
            fullWidth
            autoComplete="Genre"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <form enctype="multipart/form-data">
            <div>
              <input type="file" onChange={handleFileChange} />
              {/* <input type="submit" onClick={handleSubmit} /> */}
            </div>
          </form>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={eventData.websiteLink}
            id="eventWebsite"
            name="websiteLink"
            label="Event Website Link"
            fullWidth
            autoComplete="Event Website Link"
            onChange={handleChange}
          />
        </Grid>
        {!eventData.isOnline && (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                value={eventData.city}
                required
                id="City"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={eventData.venue}
                id="venue"
                name="venue"
                label="Venue"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={eventData.cost}
            id="cost"
            name="cost"
            label="Price ($)"
            fullWidth
            type="number"
            autoComplete="Price"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={eventData.organizer}
            id="organizer"
            name="organizer"
            label="Organizer"
            fullWidth
            autoComplete="organizer"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="isEventOnline"
                checked={eventData.isOnline}
                onChange={handleEventRemoteStatus}
              />
            }
            label="Select for Online event"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
