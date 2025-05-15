import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const labels = Array.from({ length: 8 * 12 }, (_, i) => {
  const year = 2016 + Math.floor(i / 12);
  const month = (i % 12 + 1).toString().padStart(2, '0');
  return `${year}-${month}`;
});

const data = {
  labels,
  datasets: [{
    label: 'PM2.5 月均浓度 (μg/m³)',
    data: Array.from({ length: 96 }, (_, i) => {
      return i < 84 ? 35 + Math.floor(Math.random() * 10) : [34,27,26,20,18,20,22,25,26,28,30,34][i - 84];
    }),
    borderColor: '#e6374e',
    backgroundColor: 'transparent',
    tension: 0.3
  }]
};

const options = {
  responsive: true,
  scales: {
    x: { title: { display: true, text: '月份', color: '#ccc' }, ticks: { color: '#ccc' }},
    y: { title: { display: true, text: '浓度 (μg/m³)', color: '#ccc' }, ticks: { color: '#ccc' }}
  },
  plugins: {
    legend: { labels: { color: '#ccc' }},
    title: {
      display: true,
      text: '宁波市2016–2023年PM2.5趋势',
      color: '#fff'
    }
  }
};

const AirQuality = () => {
  return <Line data={data} options={options} />;
};

export default AirQuality;