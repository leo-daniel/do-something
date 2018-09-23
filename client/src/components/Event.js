import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { url } from 'inspector';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function EventCard(props) {
    const { classes } = props;
    return (
      <Card className={classes.card} style={{backgroundImage: url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96e8c52b31b6e86b4abf5a20d9845793&auto=format&fit=crop&w=2250&q=80')}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
  
  EventCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(EventCard);