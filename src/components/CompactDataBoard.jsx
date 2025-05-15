import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CompactDataBoard = () => {
  const data = {
    labels: ['北京', '上海', '广州', '宁波', '深圳'],
    datasets: [{
      label: 'PM2.5 年均 (μg/m³)',
      data: [38, 34, 32, 24, 29],
      backgroundColor: ['#aaa', '#aaa', '#aaa', '#e6374e', '#aaa']
    }]
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{
        maxWidth: '1100px',
        margin: '3rem auto',
        padding: '2rem',
        borderRadius: '14px',
        background: '#191919',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem',
        alignItems: 'center'
      }}
    >
      <div>
        <Bar data={data} options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: '五大城市 PM2.5 年均浓度对比', color: '#fff' }
          },
          scales: {
            x: { ticks: { color: '#ccc' }},
            y: { ticks: { color: '#ccc' }}
          }
        }} />
      </div>
      <div style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.8 }}>
        <h3 style={{ color: '#e6374e', fontSize: '1.3rem' }}>结论速览</h3>
        <ul>
          <li>宁波低于全国一线城市均值</li>
          <li>距离 WHO 推荐标准仍有约 140%</li>
          <li>需继续治理与结构转型</li>
        </ul>
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#2e2e2e',
          borderRadius: '8px',
          fontSize: '0.85rem',
          color: '#aaa'
        }}>
          📌 WHO 推荐 PM2.5 年均值 ≤ 10 μg/m³
        </div>
      </div>
    </motion.section>
  );
};

export default CompactDataBoard;