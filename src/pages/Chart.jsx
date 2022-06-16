import { Box, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setDataXLabels, setDataYLabels } from '../store/slices/chartSlice';

import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';

function Chart() {
  const [xLabels, setXLabels] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  const [yLabels, setYLabels] = useState([
    '0',
    '5',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
    '60',
    '65',
    '70',
    '75',
    '80',
    '85',
    '90',
    '95',
    '100',
  ]);

  const dataXLabels = useSelector((state) => state.chart.dataXLabels);
  const dataYLabels = useSelector((state) => state.chart.dataYLabels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataXLabels(xLabels));
    dispatch(setDataYLabels(yLabels));
    console.log(dataXLabels, 'dataXLabels');
  }, [xLabels, yLabels, dispatch]);

  return (
    <Container>
      <Box>
        <XAxis xLabels={xLabels} setXLabels={setXLabels} />
        <YAxis yLabels={yLabels} setYLabels={setYLabels} />
        <BarChart xLabels={dataXLabels} yLabels={dataYLabels} />
        <LineChart xLabels={dataXLabels} yLabels={dataYLabels} />
      </Box>
    </Container>
  );
}

export default Chart;
