import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
// Would like to make a background image, but sizing needs to be solved
// import Image from "./rawpixel-675364-unsplash.jpg";

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
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
    // Uncomment once background image sizing is solved
    // backgroundImage: `url(${Image})`
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
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
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="display3" color="inherit" gutterBottom>
                    Welcome to Do Something
                  </Typography>
                  <Typography variant="display1" color="inherit" paragraph>
                    The world is a better place when people lend their help and
                    talents to opportunities in need.
                  </Typography>
                  <Typography variant="title" color="inherit">
                    Already a member? Login and do something great.
                  </Typography>
                  <br></br>
                  <Typography variant="title" color="inherit">
                    New to the site? Join up to find opportunities to do
                    great things in your community.
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
