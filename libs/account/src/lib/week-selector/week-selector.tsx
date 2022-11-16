import { CalendarToday, CalendarTodayOutlined, CalendarViewDay } from '@mui/icons-material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CurrentIngredients from '../current-ingredients/current-ingredients';
import PropTypes from 'prop-types';
import React from 'react';
import RequestIngredients from '../request-ingredients/request-ingredients';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

const PREFIX = 'WeekSelector';

const classes = {
  root: `${PREFIX}-root`,
  appbar: `${PREFIX}-appbar`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,

    backgroundColor: theme.palette.background.paper,
  },

  [`& .${classes.appbar}`]: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '500px',
    margin: '0 auto',
  },
}));

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Root
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Root>
  );
}

export function WeekSelector() {
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
          scrollButtons
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          allowScrollButtonsMobile
        >
          <Tab label="31/5/2021" icon={<CalendarTodayOutlined />} {...a11yProps(0)} />
          <Tab label="7/6/2021" icon={<CalendarToday />} {...a11yProps(1)} />
          <Tab label="14/6/2021" icon={<CalendarToday />} {...a11yProps(2)} />
          <Tab label="21/6/2021" icon={<CalendarToday />} {...a11yProps(3)} />
          <Tab label="28/6/2021" icon={<CalendarToday />} {...a11yProps(4)} />
          <Tab label="5/7/2021" icon={<CalendarToday />} {...a11yProps(5)} />
          <Tab label="12/7/2021" icon={<CalendarToday />} {...a11yProps(6)} />
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
