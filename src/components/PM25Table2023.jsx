import React from 'react';
import { motion } from 'framer-motion';

const levels = ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'];
const days = [123, 156, 45, 21, 14, 6];

const PM25Table2023 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ maxWidth: 600, margin: '2rem auto', color: '#ccc' }}
    >
      <h3>2023 年宁波空气质量分布（日数）</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#333' }}>
            <th>等级</th>
            {levels.map(level => <th key={level}>{level}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>天数</td>
            {days.map((d, i) => (
              <td key={i} style={{ border: '1px solid #444', padding: '0.5rem' }}>{d}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </motion.section>
  );
};

export default PM25Table2023;