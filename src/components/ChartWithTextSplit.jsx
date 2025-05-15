import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWithTextSplit = () => {
  const data = {
    labels: ['宁波（2023）', '全国平均', 'WHO 推荐'],
    datasets: [{
      data: [24, 32, 10],
      backgroundColor: ['#e6374e', '#8884d8', '#4caf50']
    }]
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        maxWidth: '960px',
        margin: '3rem auto',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: '12px',
        padding: '2rem'
      }}
    >
      <div style={{ flex: '1 1 50%' }}>
        <Pie data={data} />
      </div>
      <div style={{ flex: '1 1 50%', color: '#eee', lineHeight: 1.7 }}>
        <h3 style={{ color: '#e6374e', fontSize: '1.5rem' }}>为何关注 PM2.5 年均浓度？</h3>
        <p>宁波 2023 年 PM2.5 年均为 24 μg/m³，虽低于全国平均，但仍高于 WHO 推荐值。</p>
        <p>通过图示对比，有助于公众判断空气质量标准与达标差距。</p>
      </div>
    </motion.section>
  );
};

export default ChartWithTextSplit;