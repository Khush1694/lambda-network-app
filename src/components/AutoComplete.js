/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  autocomplete: {
    width: '100%',
    marginLeft: theme.spacing(1),
    marginTop: 0,
  },
  textField: {
    marginTop: theme.spacing(1),
  },
}));

export default function FreeSolo({ id, label }) {
  const classes = useStyles();
  return (
    <Autocomplete
      className={classes.autocomplete}
      id={id}
      freeSolo
      options={jobs.map(job => job.title)}
      renderInput={params => (
        <TextField
          className={classes.textField}
          {...params}
          label={label}
          margin='normal'
          variant='outlined'
        />
      )}
    />
  );
}
// dummy data
const jobs = [
  { title: 'Fullstack of pancakes' },
  { title: 'Software ninjaneer' },
];
