import React from 'react';
import { Box } from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart({ xLabels, yLabels }) {
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: 'Chart',
        data: yLabels,
        borderColor: 'red',
        backgroundColor: 'red',
        borderWidth: 2,
        borderRadius: 2,
        borderSkipped: false,
      },
    ],
  };
  //data.labels
  //data.datasets[0].data

  return (
    <Box>
      <Line data={data} />
    </Box>
  );
}

export default LineChart;
