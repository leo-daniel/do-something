import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, Paper, Typography } from "@material-ui/core";
import drill from "./drill.jpg";

const styles = theme => ({
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
  heroContainer: {
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    backgroundImage: `url(${drill})`,
    backgroundSize: "cover",
    marginBottom: "0%",
    paddingBottom: "7rem"
  },
  heroContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("sm")]: {
      paddingRight: 0
    }
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.heroContainer}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.heroContent}>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Give Back
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    Volunteer in your community,
                    <br />
                    and help make the world better.
                  </Typography>
                  <Typography variant="subheading" color="inherit">
                    Log in or sign up to start.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </div>
    </React.Fragment>
  );
}
Hero.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Hero);
