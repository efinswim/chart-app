import { Autocomplete, Box, TextField, Typography } from '@mui/material';

import React from 'react';

import { yValues } from '../data/yaxis-data'

function YAxis({ yLabels, setYLabels }) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography>Y axis labels</Typography>
      <Autocomplete
        onChange={(event, newValue) => {
          setYLabels(newValue);
        }}
        sx={{ marginTop: 1 }}
        multiple
        defaultValue={yValues}
        options={yValues}
        size='small'
        renderInput={(params) => <TextField {...params} key={params.index + 1} label='Y Data' />}
      />
    </Box>
  );
}

export default YAxis;
