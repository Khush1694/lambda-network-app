import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// local imports
import theme from '../../ui/Theme';
import joshSurprised from '../../../assets/images/joshsurprised.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'space-between',
  },
  userProfileContainer: {
    padding: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(1 / 4),
    marginRight: theme.spacing(2),
  },
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  largeAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  userInfo: {
    marginLeft: theme.spacing(2),
  },
}));

const UserProfileCard = () => {
  const classes = useStyles();
  return (
    <Box width="100%">
      <Grid
        container
        direction="row"
        // justifyContent="space-between"
        alignItems="center"
        className={[classes.userProfileContainer, classes.root]}
      >
        <Grid item className={classes.avatar}>
          <Avatar
            alt="Josh Surprised"
            src={joshSurprised}
            className={classes.largeAvatar}
          />
        </Grid>
        <Box width={3 / 4}>
          <Grid item container direction="column" className={classes.userInfo}>
            <Grid
              container
              direction="column"
              className={classes.userInfoContainer}
            >
              <Grid item className={classes.username}>
                <Typography variant="h6">@joshsurprised</Typography>
              </Grid>
              <Grid item className={classes.joinedDate}>
                <Typography variant="subtitle2">
                  Member since: Jan 16, 2017
                </Typography>
              </Grid>
              <Grid item className={classes.followedInfo}>
                <Grid container className={classes.followedInfoContainer}>
                  <Grid item className={classes.followers}>
                    <Typography variant="subtitle1">Followers: 23</Typography>
                  </Grid>
                  <Grid
                    item
                    className={classes.following}
                    style={{ marginLeft: theme.spacing(1) }}
                  >
                    <Typography variant="subtitle1">Following: 23</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default UserProfileCard;
