import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../ui/Theme';

const useStyles = makeStyles(theme => ({
  profileStepperContainer: {
    padding: theme.spacing(2),
  },
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
        <Typography variant="h6">@user, finish your account</Typography>
      </Grid>
      <Grid item align="center" className={classes.remainingSteps}>
        <Typography variant="h6">3</Typography>
        <Typography variant="h6">
          more steps to complete your profile
        </Typography>
      </Grid>
      <Grid item className={classes.stepper}></Grid>
    </Grid>
  );
}
