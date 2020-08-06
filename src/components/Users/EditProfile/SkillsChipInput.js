import React from 'react';
import Grid from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';

const useStyles = makeStyles(theme => ({}));

const SkillsChipInput = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.skillsChipContainer}
    ></Grid>
  );
};

export default SkillsChipInput;
