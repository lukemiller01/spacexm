'use client' // Client component to integrate React Hooks

import React from 'react'

// To display charts
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

// Registering a chart from Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

// Adding default styles to ChartJS object
ChartJS.defaults.font.size = 16;
ChartJS.defaults.font.weight = '500';
// ChartJS.defaults.font.family = '';

// Chart options
const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Launches',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          color: '#9A9A9A'
        }
      }
    }
};

// Interface to store the data from the prop
interface Data {
  data: {
      [key: string]: number
  }
}

const LaunchTimeline = ({data}: Data) => {

    // Keys in a dictionary are always strings. If, for any reason, these need to be converted to int: map(function(x) {return parseInt(x)})
    var keys = Object.keys(data); // Years
    var values = Object.values(data); // Launches

    // Adding keys/values to chart
    const parsedData = {
        labels: keys,
        datasets: [
            {
                label: 'Launches',
                data: values.map((item) => item),
                backgroundColor: '#5AAFFF',
            },
        ],
    }

  return (
    <div className='w-full flex flex-col border-white rounded-xl border-2 p-4 text-center gap-4'>
      <h2 className=' text-white'>Yearly Cadence</h2>
      <Bar options={options} data={parsedData} className={' bg-black'}/>
    </div>
  )
}

export default LaunchTimeline