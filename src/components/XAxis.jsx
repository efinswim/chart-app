import { Autocomplete, Box, TextField, Typography } from '@mui/material';

import React from 'react';

import { xValues } from '../data/xaxis-data';

function XAxis({ xLabels, setXLabels }) {
  return (
    <Box sx={{ marginTop: 1 }}>
      <Typography>X axis labels</Typography>
      <Autocomplete
        onChange={(event, newValue) => {
          setXLabels(newValue);
        }}
        sx={{ marginTop: 1 }}
        multiple
        defaultValue={xValues}
        options={xValues}
        size='small'
        renderInput={(params) => <TextField {...params} key={params.index + 1} label='X Data' />}
      />
    </Box>
  );
}

export default XAxis;
