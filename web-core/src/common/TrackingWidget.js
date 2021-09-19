import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckoutWidget from '../ticket/CheckoutWidget';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TrackingWidget(props) {
  const [tabId, setTabId] = React.useState(0);
  const handleChange = (ev, newValue) => setTabId(newValue);

  return (
    <form>
      <Grid container>
        <Grid item xs={11} md={11} lg={10}>
          <Box
            sx={{ 
              maxWidth: 500,
              minWidth: 200,
              minHeight: 500,
          }}
          >
            <Tabs
              value={tabId}
              onChange={handleChange}
              centered
            >
              <Tab label="New Order" />
              <Tab label="Tracking" />
            </Tabs>
            <TabPanel value={tabId} index={0}>
              <CheckoutWidget />
            </TabPanel>
            <TabPanel value={tabId} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}