import React, { useState, useEffect } from "react";
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
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import PaymentIcon from "@material-ui/icons/Payment";
import axios from "axios";

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
    fontWeight: "600",
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
    // justifyContent: "space-between",
  },
  mediaCard: {
    width: "100%",
  },
  drawerImage: {
    display: "flex",
    marginTop: "20px",
    marginRight: "10px",
    width: "300px",
    height: "500px",
    borderRadius: "10px",
  },
  mediaQuery: {
    display: "flex",
    flexDirection: "column",
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

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function EventCard(props) {
  let [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem("data")).id;
    let eventAdmin = props.userID;
    if (currentUser === eventAdmin) {
      setIsAdmin(true);
    }
  }, []);
  async function payment(e) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Something went wrong while loading razorpay script");
      return;
    }
    let amount = props.rate * 100;
    const { data } = await axios({
      method: "POST",
      data: { amount },
      url: "http://localhost:5000/razorpay",
    });
    console.log(data);
    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount.toString(),
      currency: data.currency,
      name: props.name,
      description: "Non refundable payment",
      image: "http://localhost:5000/Logo2.png",
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      readOnly: {
        name: false,
        email: false,
      },
      prefill: {
        name: "Something Random",
        email: "sdfdsjfh2@ndsfdf.com",
        contact: "9899999999",
      },
    };
    var paymentObjectRZP = new window.Razorpay(options);
    paymentObjectRZP.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    paymentObjectRZP.open();
    e.preventDefault();
  }
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const favouriteColor = favourite ? "#ff4040" : "rgba(0, 0, 0, 0.54)";
  const addToFavourites = () => {
    setFavourite(!favourite);
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setDrawerState(true)}
      onKeyDown={() => setDrawerState(false)}
    >
      <div className={classes.top}>
        <div className={classes.infoPanel}>
          <h2>{props.name.toUpperCase()}</h2>
          <p>{props.genre} / English</p>
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<PaymentIcon />}
              onClick={payment}
            >
              Pay ₹ {props.rate}
            </Button>
          </Typography>
        </div>
        <div className={classes.mediaQuery}>
          <CardMedia className={classes.drawerImage} image={props.image} />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "10px",
              marginTop: "10px",
            }}
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Rating name="read-only" value="2" readOnly />
          </Box>
        </div>
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
        <IconButton
          id={props.name.toUpperCase()}
          style={{ color: favouriteColor }}
          onClick={addToFavourites}
          aria-label="add to favorites"
        >
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
          {isAdmin && <button>Yo</button>}
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
