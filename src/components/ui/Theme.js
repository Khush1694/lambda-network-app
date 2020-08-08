import { createMuiTheme } from '@material-ui/core/styles';
/**
 * initializes colors and font settings for app theme
 *
 *
 * @returns {default theme css}
 * @constructor
 */

// * fonts
const raleawyFont = 'Raleway, sans-serif';
const robotoFont = 'Roboto, sans-serif';

// * colors
const primaryBlue = '#63B3ED';
const red = '#A01a36';
const lightRed = '#eb5757';
const secondaryOrange = '#f2994a';
const purple = '#9851e0';
const green = '#27ae70';
const gray = '#e0e0e0';
const darkBlue = '#2f80ed';
const textGray = '#9E9E9E';
const black = '#313131';

export default createMuiTheme({
  palette: {
    common: {
      blue: primaryBlue,
      red: red,
      orange: secondaryOrange,
      purple: purple,
      green: green,
      gray: gray,
      darkBlue: darkBlue,
      lightRed: lightRed,
      textGray: textGray,
      black: black,
    },
    action: {
      //       active:
      // rgba(0, 0, 0, 0.54)
      // hover:
      // rgba(0, 0, 0, 0.04)
      // hoverOpacity: 0.04
      // selected:
      // rgba(0, 0, 0, 0.08)
      // selectedOpacity: 0.08
      // disabled:
      // rgba(0, 0, 0, 0.26)
      // disabledBackground:
      // rgba(0, 0, 0, 0.12)
      // disabledOpacity: 0.38
      // focus:
      // rgba(0, 0, 0, 0.12)
      // focusOpacity: 0.12
      // activatedOpacity: 0.12
    },
    primary: { main: primaryBlue },
    secondary: { main: secondaryOrange },
  },
  typography: {
    h1: {
      color: black,
    },
    h2: {
      color: black,
    },
    h3: {
      color: black,
    },
    h4: {
      color: black,
    },
    h5: {
      color: black,
    },
    h6: {
      color: black,
    },
    p: {
      color: black,
    },
    subtitle1: {
      color: black,
    },
    subtitle2: {
      color: textGray,
    },
    body1: { color: black },
    body2: { color: black },
    button: {
      color: 'white',
    },
    tab: {
      color: black,
    },
    caption: {
      color: textGray,
    },
  },
});
