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

export default function DateAndTime({ eventData, setEventData }) {
  const is_date_time_equal =
    eventData.endDate.valueOf() === eventData.startDate.valueOf();
  const handleStartDateChange = (e) => {
    setEventData((prevState) => {
      return {
        ...prevState,
        startDate: e,
      };
    });
  };
  const handleEndDateChange = (e) => {
    setEventData((prevState) => {
      return {
        ...prevState,
        endDate: e,
      };
    });
  };
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
              name="startDate"
              value={eventData.startDate}
              onChange={handleStartDateChange}
              minDate={new Date()}
              maxDate={!is_date_time_equal && eventData.endDate}
              // maxDate={eventData.endDate}
              onError={console.log}
              autoOk={false}
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
              name="endDate"
              value={eventData.endDate}
              minDate={eventData.startDate}
              onChange={handleEndDateChange}
              onError={console.log}
              autoOk={false}
              format="yyyy/MM/dd HH:mm"
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
