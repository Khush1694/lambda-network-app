import React from 'react';
import Grid from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';

const useStyles = makeStyles(theme => ({}));

const classes = useStyles();

const UserProfileCard = () => {
  return (
    <Grid containter direction="row" className={classes.userProfileContainer}>
      <Grid item className={classes.avatar}></Grid>
      <Grid item className={classes.userInfo}>
        <Grid
          container
          direction="column"
          className={classes.userInfoContainer}
        >
          <Grid item className={classes.username}></Grid>
          <Grid item className={classes.joinedDate}></Grid>
          <Grid item className={classes.followedInfo}>
            <Grid container className={classes.followedInfoContainer}>
              <Grid item className={classes.followers}></Grid>
              <Grid item className={classes.following}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfileCard;
