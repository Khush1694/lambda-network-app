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
const secondaryRed = '#A01a36';
const orange = '#f2994a';
const purple = '#9851e0';
const green = '#27ae70';
const gray = '#e0e0e0';
const darkBlue = '#2f80ed';
const textGray = '#9E9E9E';
const black = '#313131';

export default createMuiTheme({
  palette: {
    common: {
      primary: primaryBlue,
      secondary: secondaryRed,
      orange: orange,
      purple: purple,
      green: green,
      gray: gray,
      darkBlue: darkBlue,
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
    primary: {
      main: primaryBlue,
    },
    secondary: {
      main: secondaryRed,
    },
  },
  typography: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    plantCardHeader: {},
    p: {},
    subtitle1: {},
    subtitle2: {
      color: textGray,
    },
    copyright: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    iconButtonText: {},
    header: {},
  },
});
