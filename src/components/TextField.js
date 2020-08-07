import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textInput: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '1rem',
      //   width: '25ch',
    },
  },
}));

export default function BasicTextFields({
  label,
  name,
  value,
  id,
  onClick,
  onChange,
  error,
  helperText,
  multiline,
  placeHolder,
  rows,
  rowsMax,
}) {
  const classes = useStyles();

  return (
    <TextField
      id={id} // * Use this prop to make label and helperText accessible for screen readers.
      fullWidth
      className={classes.textInput}
      label={label}
      variant='outlined'
      name={name}
      value={value}
      onClick={onClick}
      onChange={onChange}
      error={error}
      helperText={helperText}
      placeHolder={placeHolder}
      multiline={multiline ? multiline : false}
      rows={rows ? rows : undefined}
      rowsMax={rowsMax ? rowsMax : undefined}
    />
  );
}
