import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from '../../ui/Theme';
import SkillsChipInput from './SkillsChipInput';
import TextField from '../../TextField';
import AutoComplete from '../../AutoComplete';
import { Select } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(1),
  },
  inputGridItem: {
    marginRight: theme.spacing(2),
  },
}));

const ProfessionalInfo = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' className={classes.personInfoContainer}>
      <Grid item className={classes.title}>
        <Typography variant='subtitle1'>Professional Info</Typography>
      </Grid>
      <Grid item className={[classes.jobTitle, classes.inputGridItem]}>
        <AutoComplete id={'job-title'} label={'Job Title'}  />
      </Grid>
      <Grid item className={[classes.company, classes.inputGridItem]}>
        <TextField
          id='website'
          label={'Personal Website'}
          className={classes.input}
        />
      </Grid>
      <Grid item className={[classes.personalWebsite, classes.inputGridItem]}>
        <TextField id='company' label={'Company'} className={classes.input} />
      </Grid>
      <Grid item className={[classes.SkillsChipInput, classes.inputGridItem]}>
        <SkillsChipInput />
      </Grid>
    </Grid>
  );
};

export default ProfessionalInfo;
