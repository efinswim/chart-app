import { Autocomplete, Box, TextField, Typography } from '@mui/material';

import React from 'react'

import { valueSlots } from '../data/yaxis-data'

function YAxis() {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography>Y axis labels</Typography>
      <Autocomplete
        sx={{ marginTop: 1 }}
        multiple
        defaultValue={valueSlots()}
        options={valueSlots()}
        size='small'
        renderInput={(params) => <TextField {...params} label='Data' />}
      />
    </Box>
  );
}

export default YAxis;