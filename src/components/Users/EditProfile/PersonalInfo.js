import React from 'react';
import Grid from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';

const useStyles = makeStyles(theme => ({}));

const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.personInfoContainer}>
      <Grid item className={classes.title}></Grid>
      <Grid item className={classes.name}></Grid>
      <Grid item className={classes.email}></Grid>
      <Grid item className={classes.about}></Grid>
      <Grid item className={classes.location}></Grid>
    </Grid>
  );
};

export default PersonalInfo;
