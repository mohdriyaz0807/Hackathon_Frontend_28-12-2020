import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme , AppBar, Tabs, Tab,Typography,Box} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MakeOrder from './MakeOrder'
import YourOrders from './YourOrders'

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  roots: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    margin: 'auto',
    marginTop:'25%',
    marginBottom:'25%',
    paddingBlock:'5%',
  }
}));

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let id=window.location.href.split('?')
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  if(localStorage.getItem('token')===(id[1].split('&')[2])){
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Create New" {...a11yProps(0)} />
          <Tab label="Cart" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MakeOrder name={id[1].split('&')[1]}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <YourOrders id={id[1].split('&')[0]}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  )}
  else{
    return(
      <div className={classes.roots}>
          <Alert severity="info">Your session Ended , Please Login Again</Alert>
      </div>
    )
  }
}

export default Dashboard