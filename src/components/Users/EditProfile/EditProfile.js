import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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
  divider: {
    width: '80%',
    alignSelf: 'center',
    margin: theme.spacing(1),
  },
  professionalInfo: {},
  linkSocialAccounts: {},
}));

const EditProfile = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      className={classes.editProfileMainContainer}>
      <Grid item className={classes.userProfileCard}>
        <UserProfileCard />
      </Grid>
      <Grid item className={classes.personalInfo}>
        <PersonalInfo />
      </Grid>
      <Grid item className={classes.divider}>
        <Divider variant='middle' />
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

export default EditProfile;
