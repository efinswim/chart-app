import { Autocomplete, Box, TextField, Typography } from '@mui/material';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../store/slices/chartSlice';

import { options } from '../data/xaxis-data';

function XAxis() {
  const [labels, setLabels] = useState([
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

  const data = useSelector((state) => state.chart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(labels));
    console.log(labels, '<<<< labels');
  }, [labels, dispatch]);

  return (
    <Box sx={{ marginTop: 1 }}>
      <Typography>X axis labels</Typography>
      <Autocomplete
        onChange={(event, newValue) => {
          console.log('newValue', newValue);
          setLabels(newValue);
        }}
        sx={{ marginTop: 1 }}
        multiple
        defaultValue={options}
        options={options}
        size='small'
        renderInput={(params) => <TextField {...params} key={params.index + 1} label='Months' />}
      />
    </Box>
  );
}

export default XAxis;
