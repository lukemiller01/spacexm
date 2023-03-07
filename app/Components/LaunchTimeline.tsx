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

// Interface for Data
// import { Data } from '../page';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

ChartJS.defaults.font.size = 16;
ChartJS.defaults.font.weight = '500';
// ChartJS.defaults.font.family = '';

// Options for charts
const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
        display: false
      },
      title: {
        display: false,
        text: 'Launches',
      },
    },
};

// Interface to store the data from the prop
interface Data {
    data: {
        [key: string]: number
    }
}

const LaunchTimeline = ({data}: Data) => {

    console.log(typeof data)
    console.log(data)

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
    <Bar options={options} data={parsedData} className={'bg-black'}/>
  )
}

export default LaunchTimeline