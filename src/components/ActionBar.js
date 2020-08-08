import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import ForumIcon from '@material-ui/icons/Forum';
import StarIcon from '@material-ui/icons/Star';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';

import theme from './ui/Theme';

const useStyles = makeStyles(theme => ({
  postContainer: {},
  upArrow: {
    color: theme.palette.common.green,
  },
  downArrow: {
    color: theme.palette.common.lightRed,
  },
  forumIcon: {
    color: theme.palette.common.purple,
  },
  starIcon: {
    color: theme.palette.common.orange,
  },
  shareIcon: {
    color: theme.palette.common.darkBlue,
  },
}));

export default function ActionBar() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.actionsContainer}
    >
      <Grid item className={classes.votes} xs={3}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.votesContainer}
        >
          <Grid item>
            <ArrowUpwardIcon className={classes.upArrow} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">999</Typography>
          </Grid>
          <Grid item>
            <ArrowDownwardIcon className={classes.downArrow} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.comments} xs={3}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.commentsContainer}
        >
          <Grid item>
            <ForumIcon className={classes.forumIcon} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">1.2k</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.stars} xs={5}>
        <Grid item>
          <StarIcon className={classes.starIcon} />
        </Grid>
      </Grid>
      <Grid item className={classes.share} xs={1}>
        <Grid item>
          <ShareIcon className={classes.shareIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
}
