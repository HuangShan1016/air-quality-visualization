import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import './PM25YearWithPie.css'; // 别忘记引入 CSS

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const PM25YearWithPie = () => {
  const lineData = {
    labels: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    datasets: [
      {
        label: 'PM2.5 (μg/m³)',
        data: [35,30,28,25,20,18,15,17,22,26,32,36],
        borderColor: '#e6374e',
        backgroundColor: '#e6374e',
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '2023年月均 PM2.5 趋势',
        color: '#eee',
        font: { size: 16 },
      },
      legend: {
        labels: { color: '#ccc', font: { family: 'Noto Sans SC' } },
      },
      tooltip: {
        backgroundColor: '#222',
        titleColor: '#e6374e',
        bodyColor: '#eee',
        borderColor: '#e6374e',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: ctx => `PM2.5：${ctx.raw} μg/m³`,
        },
      },
    },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#aaa' } },
      y: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#aaa' } },
    },
  };

  const pieData = {
    labels: ['冬季', '春季', '夏季', '秋季'],
    datasets: [
      {
        data: [33, 22, 15, 30],
        backgroundColor: [
          'rgba(230,55,78,0.8)',
          'rgba(230,55,78,0.6)',
          'rgba(230,55,78,0.4)',
          'rgba(230,55,78,0.9)',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '2023年 PM2.5 四季平均分布',
        color: '#eee',
        font: { size: 16 },
      },
      legend: {
        position: 'bottom',
        labels: { color: '#ccc', font: { family: 'Noto Sans SC' } },
      },
      tooltip: {
        backgroundColor: '#222',
        bodyColor: '#eee',
        borderColor: '#fff',
        borderWidth: 1,
        callbacks: {
          label: ctx => `${ctx.label}：${ctx.raw}%`,
        },
      },
    },
  };

  return (
    <div className="pm25-year-with-pie">
      <div className="line-chart">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="pie-chart">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default PM25YearWithPie;