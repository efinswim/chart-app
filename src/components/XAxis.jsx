import {
  Autocomplete,
  Box,
  TextField,
  Typography,
} from '@mui/material';

import React, { useState } from 'react';

import { options } from '../data/xaxis-data';

function XAxis() {

  return (
    <Box sx={{ marginTop: 1 }}>
      <Typography>X axis labels</Typography>
      <Autocomplete
        sx={{ marginTop: 1 }}
        multiple
        defaultValue={options}
        options={options}
        size='small'
        renderInput={(params) => <TextField {...params} label='Months' />}
      />
    </Box>
  );
}

export default XAxis;
