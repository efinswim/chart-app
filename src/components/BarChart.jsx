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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Fully Rounded',
      data: [1, 6, 7, 10, 20, 30, 2, 12, 12, 41, 52, 23, 29, 50, 5, 66, 99, 100],
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


function BarChart() {
  return (
    <Box><Bar data={data} /></Box>
  )
}

export default BarChart