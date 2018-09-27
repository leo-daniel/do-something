import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { PlaceTwoTone, CalendarTodayTwoTone } from "@material-ui/icons";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
    // backgroundImage: 'url("https://images.unsplash.com/photo-1500837744038-ec60054ed01e")',
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1500837744038-ec60054ed01e")'
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
    maxWidth: 512
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 496
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  icon: {
    fontSize: "1rem",
    marginRight: ".5rem",
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              variant="display3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Volunteer Events
            </Typography>
            <Typography
              variant="title"
              align="center"
              color="textSecondary"
              paragraph
            >
              There are thousands of volunteer opportunities across the country.
              Our goal is to make donating your time, effort, and skills as easy
              as possible.
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container justify="center" spacing={24}>
            {cards.map(card => (
              <Grid item key={card}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    // image={'https://images.unsplash.com/photo-1500837744038-ec60054ed01e'}
                    title="Image title"
                  /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography variant="headline" component="h2">
                      The Name of the Event
                    </Typography>
                    <Typography variant="subheading" component="h3">
                      <PlaceTwoTone className={classes.icon} />
                      City, State
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subheading"
                      component="h3"
                    >
                      <CalendarTodayTwoTone className={classes.icon} />
                      Nov 1, 3pm
                    </Typography>
                    <Typography>
                      {/* TODO: add a prop that populates an event description */}
                      A brief bit of information to draw people into the event.
                      Volunteer your time. Do something.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {/* TODO: add a prop that takes a person to this event/:id page */}
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Do Something
        </Typography>
        <Typography
          variant="subheading"
          align="center"
          color="textSecondary"
          component="p"
        >
          A collaboration between GB, MB, LD, RM, & SJ
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);

class EventFeed extends React.Component {
    
}
