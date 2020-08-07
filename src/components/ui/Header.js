import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

// local imports
import logo from '../../assets/images/Lambda.svg';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    borderBottom: `1px solid ${theme.palette.common.textGray} `,
    paddingLeft: theme.spacing(1),
  },
  title: {
    marginLeft: '1em',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.headerContainer}
    >
      <Grid item className={[classes.logo, classes.item]} xs={1}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item className={[classes.title, classes.item]} xs={9}>
        <Typography variant="body1">Lambda Network</Typography>
      </Grid>
      <Grid item className={[classes.menu, classes.item]} xs={1}>
        <IconButton>
          <MenuIcon color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
