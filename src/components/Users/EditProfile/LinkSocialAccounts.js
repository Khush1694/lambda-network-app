import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

// local imports
import theme from '../../ui/Theme';
import TextField from '../../TextField';

const useStyles = makeStyles(theme => ({
  linkSocialAccountsContainer: {
    margin: theme.spacing(1),
  },
  socialIcon: {
    fontSize: '2rem',
    margin: theme.spacing(1),
    color: theme.palette.common.black,
  },
}));

const LinkSocialAccounts = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      className={classes.linkSocialAccountsContainer}>
      <Grid item className={classes.title}>
        <Typography variant='subtitle1'>Link Social Accounts</Typography>
      </Grid>
      <Grid item className={classes.github}>
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.socialInputContainer}>
          <Grid item className={classes.icon} xs={2}>
            <GitHubIcon className={classes.socialIcon} />
          </Grid>
          <Grid item className={classes.input} xs={9}>
            <TextField id='github-url-input' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.twitter}>
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.socialInputContainer}>
          <Grid item className={classes.icon} xs={2}>
            <TwitterIcon className={classes.socialIcon} />
          </Grid>
          <Grid item className={classes.input} xs={9}>
            <TextField id='twitter-url-input' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.facebook}>
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.socialInputContainer}>
          <Grid item className={classes.icon} xs={2}>
            <FacebookIcon className={classes.socialIcon} />
          </Grid>
          <Grid item className={classes.input} xs={9}>
            <TextField id='facebook-url-input' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinkSocialAccounts;
