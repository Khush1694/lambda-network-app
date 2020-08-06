import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';

const useStyles = makeStyles(theme => ({}));

const LinkSocialAccounts = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.linkSocialAccountsContainer}
    >
      <Grid item className={classes.title}></Grid>
      <Grid item className={classes.github}>
        <Grid
          container
          direction="row"
          className={classes.socialInputContainter}
        >
          <Grid item className={classes.icon}></Grid>
          <Grid item className={classes.input}></Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.google}>
        <Grid
          container
          direction="row"
          className={classes.socialInputContainter}
        >
          <Grid item className={classes.icon}></Grid>
          <Grid item className={classes.input}></Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.twitter}>
        <Grid
          container
          direction="row"
          className={classes.socialInputContainter}
        >
          <Grid item className={classes.icon}></Grid>
          <Grid item className={classes.input}></Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.facebook}>
        <Grid
          container
          direction="row"
          className={classes.socialInputContainter}
        >
          <Grid item className={classes.icon}></Grid>
          <Grid item className={classes.input}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinkSocialAccounts;
