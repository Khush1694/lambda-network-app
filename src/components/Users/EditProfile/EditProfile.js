import React from 'react';
import Grid from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';
import UserProfileCard from './UserProfileCard';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import LinkSocialAccounts from './LinkSocialAccounts';

const useStyles = makeStyles(theme => ({
  editProfileMainContainer: {},
  userProfileCard: {},
  personalInfo: {},
  professionalInfo: {},
  linkSocialAccounts: {},
}));

const classes = useStyles();

const Profile = () => {
  return (
    <Grid
      container
      direction="column"
      className={classes.editProfileMainContainer}
    >
      <Grid item className={classes.userProfileCard}>
        <UserProfileCard />
      </Grid>
      <Grid item className={classes.personalInfo}>
        <PersonalInfo />
      </Grid>
      <Grid item className={classes.professionalInfo}>
        <ProfessionalInfo />
      </Grid>

      <Grid item className={classes.linkSocialAccounts}>
        <LinkSocialAccounts />
      </Grid>
    </Grid>
  );
};

export default Profile;
