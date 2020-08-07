import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  homePageActionBarContainer: {
    backgroundColor: 'none',
  },
  appBar: {
    backgroundColor: 'rgba(99, 179, 237, 0.2)',
  },
  tab: {
    ...theme.typography.tab,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <AppBar
      position="static"
      color="white"
      elevation={0}
      className={classes.appBar}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            background: '#313131',
          },
        }}
        textColor="black"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          className={classes.tab}
          label="Posts"
          component={Link}
          to="/user-home"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.tab}
          label="Comments"
          component={Link}
          to="/user-home/comments"
          {...a11yProps(1)}
        />
        <Tab
          className={classes.tab}
          label="Awards"
          component={Link}
          to="/user-home/awards"
          {...a11yProps(2)}
        />
        <Tab
          className={classes.tab}
          label="Voted"
          component={Link}
          to="/user-home/votes"
          {...a11yProps(3)}
        />
      </Tabs>
    </AppBar>
  );
}
