import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import ForumIcon from '@material-ui/icons/Forum';
import StarIcon from '@material-ui/icons/Star';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Avatar from '@material-ui/core/Avatar';

// Local Imports
import ActionBar from './ActionBar';
import joshSurprised from '../assets/images/joshsurprised.png';

import theme from './ui/Theme';

const useStyles = makeStyles(theme => ({
  postContainer: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    boxShadow: '1px 1px #888888',
    // border: '1px solid red',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/watermyplants/image/upload/v1596504978/orchid_ztlzx8.jpg)',
    // width: 100,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    size: 'contain',
    width: 80,
    height: 80,
    border: '1px solid red',
  },
  contentItem: {
    padding: theme.spacing(2),
  },
  actions: {
    border: '1px solid red',
    height: 30,
  },
}));
const Post = props => {
  const classes = useStyles();
  const { id } = props;
  return (
    <Grid
      container
      direction="column"
      // raised={true}
      className={classes.postContainer}
    >
      <Grid item className={classes.poster}>
        <Grid container alignItems="center" className={classes.posterContainer}>
          <Grid item className={classes.posterAvatar} xs={2}>
            <Avatar
              alt="Josh Surprised"
              src={joshSurprised}
              className={classes.largeAvatar}
            />
          </Grid>
          <Grid item className={classes.posterStatus} xs={9}>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              className={classes.status}
            >
              <Grid item>
                <Typography variant="subtitle1">@User</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">• 24h</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.menu} xs={1}>
            <MoreVertIcon />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.postContent}>
        <Grid container direction="row" className={classes.contentContainer}>
          <Grid
            item
            className={[classes.contentItem, classes.contentText]}
            xs={8}
          >
            <Typography variant="body1">
              Bacon ipsum dolor amet cupim doner spare ribs ham
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.contentItem, classes.contentImage]}
            xs={4}
          >
            <div className={classes.image}></div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.actions}>
        <ActionBar />
      </Grid>
    </Grid>
  );
};

export default Post;
