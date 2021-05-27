import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CalendarToday, CalendarTodayOutlined, CalendarViewDay } from '@material-ui/icons';
import CurrentIngredients from '../current-ingredients/current-ingredients';
import RequestIngredients from '../request-ingredients/request-ingredients';

/* eslint-disable-next-line */
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '500px',
    margin: '0 auto',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

export function WeekSelector() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Week One" icon={<CalendarTodayOutlined />} {...a11yProps(0)} />
          <Tab label="Week Two" icon={<CalendarToday />} {...a11yProps(1)} />
          <Tab label="Week Three" icon={<CalendarToday />} {...a11yProps(2)} />
          <Tab label="Week Four" icon={<CalendarToday />} {...a11yProps(3)} />
          <Tab label="Week Five" icon={<CalendarToday />} {...a11yProps(4)} />
          <Tab label="Week Six" icon={<CalendarToday />} {...a11yProps(5)} />
          <Tab label="Week Seven" icon={<CalendarToday />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CurrentIngredients date={value} />
        <RequestIngredients date={value} />
      </TabPanel>
    </div>
  );
}

export default WeekSelector;
