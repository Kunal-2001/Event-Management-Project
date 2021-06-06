import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./EventDetails";
import DateAndTime from "./DateAndTime";
import DescriptionForm from "./DescriptionForm";
import NewEventLoader from "./NewEventLoader";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function CreateEventPage() {
  let history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [eventData, setEventData] = useState({
    eventId: "",
    isOnline: false,
    eventName: "",
    genre: "",
    websiteLink: "",
    city: "",
    venue: "",
    cost: "",
    organizer: "",
    eventDescription: "",
    startDate: new Date(),
    endDate: new Date(),
  });
  const [loader, setLoader] = useState(false);
  const steps = ["Fill Form", "Add description", "Choose a date"];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm eventData={eventData} setEventData={setEventData} />
        );
      case 1:
        return (
          <DescriptionForm eventData={eventData} setEventData={setEventData} />
        );
      case 2:
        return (
          <DateAndTime eventData={eventData} setEventData={setEventData} />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    let userID = JSON.parse(localStorage.getItem("data"));
    console.log(userID.id);
    axios({
      method: "POST",
      data: { eventData: eventData, userID: userID.id },
      url: "http://localhost:5000/newevent",
    })
      .then((res) => {
        history.push("/events");
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("Mine");
      });
  };

  return (
    <React.Fragment>
      <NewEventLoader isOpen={loader} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Event
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                {activeStep < steps.length - 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                )}
                {activeStep === steps.length - 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
