// 文件：src/components/AllYearsChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const AllYearsChart = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // 构造从 2016-01 到 2023-12 的标签
  const labels = Array.from({ length: 96 }, (_, i) => {
    const year = 2016 + Math.floor(i / 12);
    const month = (i % 12 + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'PM2.5',
        data: Array.from({ length: 96 }, () => Math.floor(25 + Math.random() * 20)),
        borderColor: '#e6374e',
        tension: 0.3,
        pointRadius: 3,
        fill: false
      },
      {
        label: 'PM10',
        data: Array.from({ length: 96 }, () => Math.floor(40 + Math.random() * 25)),
        borderColor: '#aaa',
        tension: 0.3,
        pointRadius: 3,
        fill: false
      },
      {
        label: 'NO₂',
        data: Array.from({ length: 96 }, () => Math.floor(15 + Math.random() * 15)),
        borderColor: '#66c',
        tension: 0.3,
        pointRadius: 3,
        fill: false
      },
      {
        label: 'AQI',
        data: Array.from({ length: 96 }, () => Math.floor(60 + Math.random() * 40)),
        borderColor: '#fff',
        tension: 0.3,
        pointRadius: 3,
        fill: false
      }
    ]
  };

  const options = {
    animation: { duration: 2000, easing: 'easeOutQuart' },
    interaction: { mode: 'index', intersect: false },
    plugins: {
      title: {
        display: true,
        text: '历史 PM2.5 月均浓度趋势 (2016–2023)',
        color: '#fff',
        font: { family: 'Noto Sans SC', size: 18 }
      },
      tooltip: {
        backgroundColor: '#222',
        titleColor: '#e6374e',
        bodyColor: '#eee',
        borderColor: '#e6374e',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: ctx => `${ctx.dataset.label}：${ctx.raw} μg/m³`
        }
      },
      legend: {
        labels: { color: '#ccc', font: { family: 'Noto Sans SC', size: 12 } }
      }
    },
    scales: {
      x: {
        ticks: { color: '#aaa' },
        grid: { color: 'rgba(255,255,255,0.08)' }
      },
      y: {
        ticks: { color: '#aaa' },
        grid: { color: 'rgba(255,255,255,0.08)' }
      }
    },
    elements: {
      point: { hoverRadius: 6, hoverBorderWidth: 3 },
      line: { hoverBorderWidth: 4, borderWidth: 2 }
    }
  };

  return (
    <div ref={ref} style={{ maxWidth: '1000px', margin: '4rem auto' }}>
      {inView && <Line data={data} options={options} />}
    </div>
  );
};

export default AllYearsChart;