import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm() {
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
            name="name"
            label="Event Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="genre"
            name="genre"
            label="Choose genre"
            fullWidth
            autoComplete="Genre"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="thumbnailImage"
            name="thumbnailImage"
            label="Thumbnail Image Link"
            fullWidth
            autoComplete="Thumbnail Image Link"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="eventWebsite"
            name="eventWebsite"
            label="Event Website Link"
            fullWidth
            autoComplete="Event Website Link"
          />
        </Grid>
        {!isOnline && (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="City"
                name="City"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="venue" name="venue" label="Venue" fullWidth />
            </Grid>
          </>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cost"
            name="cost"
            label="Price ($)"
            fullWidth
            type="number"
            autoComplete="Price"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="organizer"
            name="organizer"
            label="Organizer"
            fullWidth
            autoComplete="organizer"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="isEventOnline"
                checked={isOnline}
                onChange={(e) => setIsOnline(!isOnline)}
              />
            }
            label="Select for Online event"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
