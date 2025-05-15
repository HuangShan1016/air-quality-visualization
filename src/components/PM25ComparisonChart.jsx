import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const PM25ComparisonChart = () => {
  const data = {
    labels: ['宁波（2023）', '全国平均', 'WHO 推荐'],
    datasets: [{
      data: [24, 32, 10],
      backgroundColor: ['#e6374e', '#999', '#4caf50'],
      borderColor: '#111'
    }]
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'center', color: '#ccc' }}
    >
      <h3>PM2.5 年均浓度对比</h3>
      <Pie data={data} />
    </motion.section>
  );
};

export default PM25ComparisonChart;