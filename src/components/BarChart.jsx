import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ xLabels, yLabels }) {
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: 'Fully Rounded',
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
      <Bar data={data} />
    </Box>
  );
}

export default BarChart;
