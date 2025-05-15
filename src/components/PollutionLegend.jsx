import React from 'react';
import { motion } from 'framer-motion';

const colorMap = {
  '优': '#4caf50',
  '良': '#8bc34a',
  '轻度污染': '#ffc107',
  '中度污染': '#ff9800',
  '重度污染': '#f44336',
  '严重污染': '#b71c1c'
};

const PollutionLegend = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        maxWidth: 700,
        margin: '3rem auto',
        background: '#1c1c1c',
        padding: '1.5rem',
        borderRadius: '12px',
        color: '#ccc'
      }}
    >
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>污染等级颜色图例</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.75rem' }}>
        {Object.entries(colorMap).map(([label, color]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{
              width: '100%',
              height: '40px',
              backgroundColor: color,
              borderRadius: '6px'
            }} />
            <div style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>{label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default PollutionLegend;