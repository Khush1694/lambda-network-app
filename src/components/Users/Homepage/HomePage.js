import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';
import UserProfileCard from '../EditProfile/UserProfileCard';
import ProfileStepper from './ProfileStepper';
import HomePageActionBar from './HomePageActionBar';
import PostsContainer from '../../PostsContainer';

const useStyles = makeStyles(theme => ({
  homePageContainer: {},
  contentContainer: {},
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
      <Grid item className={classes.contentContainer}>
        <Routes>
          <Route to="/" element={<PostsContainer />}></Route>
          <Route to="/comments"></Route>
          <Route to="/awards"></Route>
          <Route to="/votes"></Route>
        </Routes>
      </Grid>
    </Grid>
  );
};

export default HomePage;
