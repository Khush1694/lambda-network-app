import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';
import UserProfileCard from '../EditProfile/UserProfileCard';
import ProfileStepper from './ProfileStepper';
import HomePageActionBar from './HomePageActionBar';

const useStyles = makeStyles(theme => ({
  homePageContainer: {},
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.homePageContainer}>
      <Grid item className={classes.finishProfileStepper}>
        <ProfileStepper />
      </Grid>
      <Grid item className={classes.userProfileCard}>
        <UserProfileCard />
      </Grid>
      <Grid item className={classes.actionBar}>
        <HomePageActionBar />
      </Grid>
      <Grid item className={classes.contentContainer}></Grid>
    </Grid>
  );
};

export default HomePage;
