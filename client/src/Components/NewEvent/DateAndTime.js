import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function DateAndTime({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose Date and Time
      </Typography>
      <Divider style={{ marginBottom: "40px" }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Event Start</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              variant="inline"
              value={startDate}
              onChange={setStartDate}
              minDate={new Date()}
              maxDate={endDate}
              onError={console.log}
              autoOk={false}
              //   maxDate={eventDate}
              //   maxDateMessage={`Set a date before an event`}
              //   minDate={new Date()}
              //   minDateMessage={`Set a date after the current date`}
              format="yyyy/MM/dd HH:mm"
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Event End</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              variant="inline"
              value={endDate}
              minDate={startDate}
              onChange={setEndDate}
              onError={console.log}
              autoOk={false}
              //   maxDate={eventDate}
              //   maxDateMessage={`Set a date before an event`}
              //   minDate={new Date()}
              //   minDateMessage={`Set a date after the current date`}
              format="yyyy/MM/dd HH:mm"
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
