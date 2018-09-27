import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { PlaceTwoTone, CalendarTodayTwoTone } from "@material-ui/icons";

const styles = theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 496
  },
  cardContent: {
    flexGrow: 1
  },
  icon: {
    fontSize: "1rem",
    marginRight: ".5rem"
  }
});

function Event(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography variant="subheading" component="h3">
            <PlaceTwoTone className={classes.icon} />
            {props.city}, {props.state}
          </Typography>
          <Typography gutterBottom variant="subheading" component="h3">
            <CalendarTodayTwoTone className={classes.icon} />
            {props.date} at {props.time}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href={`/${props.eventId}`}>Learn More</a>
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
}

export default withStyles(styles)(Event);
