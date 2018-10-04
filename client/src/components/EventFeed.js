import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import API from '../utils/API';
import EventCard from './EventCard';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
    maxWidth: 512,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 496,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  icon: {
    fontSize: '1rem',
    marginRight: '.5rem',
  },
});

// stateful component
class EventFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    API.getEvents()
      .then(res => {
        this.setState({ events: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Fragment>
          <CssBaseline />
          <main>
            <Grid container justify="center" spacing={16}>
              {this.state.events.map(event => (
                <EventCard
                  key={event._id}
                  title={event.eventName}
                  city={event.city}
                  usstate={event.state}
                  // date={event.date} TODO: need to convert UTC to readable date
                  time={event.startTime}
                  description={event.description}
                  id={event._id}
                />
              ))}
            </Grid>
          </main>
        </Fragment>
      </div>
    );
  }
}

export default withStyles(styles)(EventFeed);
