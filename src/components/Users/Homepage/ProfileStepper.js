import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../ui/Theme';

const useStyles = makeStyles(theme => ({
  profileStepperContainer: {},
  title: {},
  remainingSteps: {},
  stepper: {},
}));

export default function ProfileStepper() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.profileStepperContainer}
    >
      <Grid item className={classes.title}>
        <Typography variant="h6">Title</Typography>
      </Grid>
      <Grid item className={classes.remainingSteps}>
        <Typography variant="h6">remaining steps</Typography>
      </Grid>
      <Grid item className={classes.stepper}>
        stepper
      </Grid>
    </Grid>
  );
}
