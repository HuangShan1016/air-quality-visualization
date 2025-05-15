// 文件：src/components/PM25YearWithPie.jsx（覆盖）
import React from 'react';
import { motion } from 'framer-motion';
import Year2023Chart from './Year2023Chart';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PM25YearWithPie = () => {
  const monthly = [35, 30, 28, 25, 20, 18, 15, 17, 22, 26, 32, 36];
  const cats = { 优良: 0, 良好: 0, '轻度污染': 0 };
  monthly.forEach(v => {
    if (v < 20) cats.优良++;
    else if (v <= 35) cats.良好++;
    else cats['轻度污染']++;
  });

  const pieData = {
    labels: Object.keys(cats),
    datasets: [{
      data: Object.values(cats),
      backgroundColor: ['#f96c86', '#e6374e', '#ad1f3f'],
      borderColor: '#fff',
      borderWidth: 2,
      hoverOffset: 8
    }]
  };

  const pieOptions = {
    maintainAspectRatio: false,
    animation: { duration: 1200, easing: 'easeOutQuart' },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ccc',
          font: { family: 'Noto Sans SC', size: 12 }
        }
      },
      tooltip: {
        backgroundColor: '#222',
        titleColor: '#f96c86',
        bodyColor: '#eee',
        borderColor: '#f96c86',
        borderWidth: 1,
        callbacks: {
          label: ctx => `${ctx.label}：${ctx.raw} 个月`
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '2rem 1rem' }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',               // 缩小间距
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        {/* 折线图：占比 2/3 */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            flex: '2 1 0',
            maxWidth: '900px',      // 放大宽度
            height: '500px',        // 放大高度
            background: '#111',
            padding: '1rem',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px'
          }}
        >
          <Year2023Chart />
        </motion.div>

        {/* 饼图：占比 1/3 */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            flex: '1 1 0',
            maxWidth: '450px',      // 放大宽度
            height: '500px',        // 同步高度
            background: '#111',
            padding: '1rem',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px'
          }}
        >
          <Pie data={pieData} options={pieOptions} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PM25YearWithPie;