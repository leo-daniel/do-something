import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";
import { PlaceTwoTone, CalendarTodayTwoTone } from "@material-ui/icons";

const styles = theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 512,
    maxHeight: 1024
  },
  cardContent: {
    flexGrow: 1
  },
  icon: {
    fontSize: "1rem",
    marginRight: ".5rem"
  },
  link: {
    textDecoration: "none"
  }
});

function EventCard(props) {
  // props passed from Events.js
  const { classes } = props;

  return (
    <Fragment>
      <Grid item xs={12}>
      <Card className={classes.card} >
        <CardContent className={classes.cardContent}>
          <Typography variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography variant="subheading" component="h3">
            <PlaceTwoTone className={classes.icon} />
            {props.city}, {props.usstate}
          </Typography>
          <Typography gutterBottom variant="subheading" component="h3">
            <CalendarTodayTwoTone className={classes.icon} />
            {/* {props.date} at */}{props.time}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href={`events/${props.id}`} className={classes.link}>Learn More</a>
          </Button>
        </CardActions>
      </Card>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(EventCard);
