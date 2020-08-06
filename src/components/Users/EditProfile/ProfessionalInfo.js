import React from 'react';
import Grid from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';
import SkillsChipInput from './SkillsChipInput';

const useStyles = makeStyles(theme => ({}));

const ProfessionalInfo = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.personInfoContainer}>
      <Grid item className={classes.title}></Grid>
      <Grid item className={classes.jobTitle}></Grid>
      <Grid item className={classes.company}></Grid>
      <Grid item className={classes.personalWebsite}></Grid>
      <Grid item className={classes.location}></Grid>
      <Grid item className={classes.SkillsChipInput}>
        <SkillsChipInput />
      </Grid>
    </Grid>
  );
};

export default ProfessionalInfo;
