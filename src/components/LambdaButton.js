import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// size takes lg, md, or sm as a size property
// Color can take default, inherity, primary, or secondary
const useStyles = makeStyles(theme => ({}));

export default function LambdaButton({
  size,
  endIcon,
  disableRipple,
  disabled,
  to,
  color,
  buttonText,
  textColor,
}) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      fullWidth
      disableRipple={disableRipple ? disableRipple : undefined}
      endIcon={endIcon ? endIcon : undefined}
      size={size ? size : undefined}
      disabled={disabled ? disabled : undefined}
      component={Link}
      to={to ? to : undefined}
      color={color}
    >
      <Typography variant="button"> {buttonText}</Typography>
    </Button>
  );
}
