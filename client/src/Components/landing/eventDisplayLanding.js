import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 250,
    backgroundColor: "#8e35de",
    color: "#fff",
    borderRadius: "10px",
    marginRight: "20px",
  },
  media: {
    cursor: "default",
    height: 380,
  },
  cardInfo: {
    marginTop: "20px",
  },
  cardInfoHeader: {
    fontSize: "20px",
    fontWeight: 500,
  },
  cardInfoPara: {
    fontSize: "15px",
    color: "#756969",
    marginTop: "5px",
  },
});

export default function EventDisplayLanding({ eventImage, name, eventGenre }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={eventImage} />
        </CardActionArea>
      </Card>
      <div className={classes.cardInfo}>
        <h3 className={classes.cardInfoHeader}>{name}</h3>
        <p className={classes.cardInfoPara}>{eventGenre}</p>
      </div>
    </div>
  );
}
