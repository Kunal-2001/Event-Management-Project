import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
export default function DescriptionForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Describe Your Event
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextareaAutosize
            style={{ width: "550px", resize: "none" }}
            rowsMin={9}
            rowsMax={20}
            aria-label="maximum height"
            placeholder="Attract Audience with catchy description"
            defaultValue=""
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
