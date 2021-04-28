import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    marginRight: "50px",
    marginBottom: "70px",
  },
  media: {
    height: "300px",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
  list: {
    width: 600,
  },
  fullList: {
    width: "auto",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawerImage: {
    display: "flex",
    marginTop: "20px",
    marginRight: "10px",
    width: "50%",
    height: "500px",
    borderRadius: "10px",
  },
  infoPanel: {
    width: "50%",
    lineHeight: "50px",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginLeft: "10px",
  },
}));

export default function EventCard(props) {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setDrawerState(true)}
      onKeyDown={() => setDrawerState(false)}
    >
      <div className={classes.top}>
        <div className={classes.infoPanel}>
          <h2>ANT MAN</h2>
          <p>Comedy | English</p>
          {/* <Typography>
            <IconButton aria-label="add to favorites">
              <EventIcon />
            </IconButton>
            Online Streaming
          </Typography> */}
          <Typography
            style={{ marginTop: "15px", lineHeight: "25px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim diam ultricies aliquam tempus. Nam vel iaculis eros. Donec
            ultrices tellus eu facilisis facilisis. Ut et libero ut orci semper
            tincidunt et vulputate lorem. Fusce dapibus eros sit amet nisl
            condimentum, sit amet aliquam massa sollicitudin. Vestibulum finibus
            sit amet ex sed pharetra. Nulla et fringilla lacus, sed vulputate
            velit.
          </Typography>
          <Typography
            style={{ marginTop: "25px" }}
            variant="subtitle1"
            color="textPrimary"
            component="p"
            align="left"
          >
            Thu 29 Apr 2021 - Fri 30 Apr 2021
          </Typography>
          <Typography
            style={{ marginTop: "10px", marginLeft: "-10px" }}
            variant="subtitle1"
            color="textPrimary"
            component="p"
            align="left"
          >
            <IconButton color="secondary" aria-label="add to favorites">
              <LocationOnIcon />
            </IconButton>
            Online Streaming
          </Typography>
          <Typography
            style={{ marginTop: "10px", marginLeft: "10px" }}
            variant="subtitle1"
            color="textPrimary"
            component="p"
            align="left"
          >
            <span style={{ fontWeight: "600" }}>₹ 500</span> onwards
          </Typography>
        </div>
        <CardMedia className={classes.drawerImage} image={props.image} />
      </div>
    </div>
  );

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => setDrawerState(true)}
          >
            Book Now
          </Button>
          <Drawer
            anchor="right"
            open={drawerState}
            onClose={() => setDrawerState(false)}
          >
            {list("right")}
          </Drawer>
        </IconButton>
      </CardActions>
    </Card>
  );
}
