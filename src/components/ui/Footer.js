import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footerContainer: {
    position: 'relative',
    left: '0',
    bottom: '0',
    width: '100%',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.footerContainer}>
      <Grid item className={classes.footerText}>
        <Typography variant="caption">
          Copyright &#169; Lambda Network 2020
        </Typography>
      </Grid>
    </Grid>
  );
}
