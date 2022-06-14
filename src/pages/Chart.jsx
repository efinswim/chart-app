
import { Box, Container } from '@mui/material';
import React from 'react';
import BarChart from '../components/BarChart';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';

function Chart() {
  return (
    <Container>
      <Box>
        <XAxis />
        <YAxis />
        <BarChart />
      </Box>
    </Container>
  );
}

export default Chart;
