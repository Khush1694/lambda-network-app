import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

// local imports
import theme from '../../ui/Theme';
import TextField from '../../TextField';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(1),
  },
  inputGridItem: {
    marginRight: theme.spacing(2),
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' className={classes.personInfoContainer}>
      <Grid item className={classes.title}>
        <Typography variant='subtitle1'>Personal Info</Typography>
      </Grid>
      <Grid item className={[classes.name, classes.inputGridItem]}>
        <TextField id='name' label={'Name'} className={classes.input} />
      </Grid>
      <Grid item className={[classes.email, classes.inputGridItem]}>
        <TextField id='email' label={'Email'} className={classes.input} />
      </Grid>
      <Grid item className={[classes.about, classes.inputGridItem]}>
        <TextField
          id='about'
          label={'About Me'}
          multiline={true}
          rows={2}
          className={classes.input}
        />
      </Grid>
      <Grid item className={[classes.location, classes.inputGridItem]}>
        <TextField id='location' label={'Location'} className={classes.input} />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
