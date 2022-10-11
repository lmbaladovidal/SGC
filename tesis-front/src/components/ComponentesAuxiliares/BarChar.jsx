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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import '../../index.css'

export const options = {
  responsive: true,
  maintainAspectRatio:true,
  plugins: {
    legend: {
      position: 'top' 
        },
/*     title: {
      display: true,
      text: 'Chart.js Bar Chart',
    }, */
  },
};

const labels = ['Julio', 'Agosto', 'Septiembre', 'Octubre'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Ventas Ultimo Cuatrimestre',
      data: [79,88,74,90],
      backgroundColor: 'rgba(185, 29, 115, 0.75)',
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.75)',
    },
  ],
};

export function BarChar() {
  return(
        <div className='chart-container'>
            <Bar className='bar' options={options} data={data} />
        </div>
  )
}