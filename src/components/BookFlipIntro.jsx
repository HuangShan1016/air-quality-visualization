import React from 'react';
import { motion } from 'framer-motion';

const BookFlipIntro = () => {
  const pages = [
    {
      title: 'PM2.5 是什么？',
      text: 'PM2.5 是直径小于或等于2.5微米的颗粒物，能深入肺泡甚至进入血液。'
    },
    {
      title: '对健康的影响',
      text: '长期暴露可引发心血管、呼吸道疾病，影响儿童肺部发育。'
    },
    {
      title: '宁波近年来趋势',
      text: '宁波自2016年以来PM2.5浓度整体下降，治理措施逐年显效。'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        maxWidth: '800px',
        margin: '4rem auto',
        padding: '2rem',
        borderRadius: '12px',
        background: '#151515',
        color: '#ccc',
        boxShadow: '0 0 10px #000'
      }}
    >
      <h2 style={{ color: '#e6374e', marginBottom: '1rem', textAlign: 'center' }}>基础知识 · 翻页阅读</h2>
      {pages.map((p, i) => (
        <motion.div
          key={i}
          initial={{ rotateY: 90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.4 }}
          style={{
            background: '#222',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            transformStyle: 'preserve-3d'
          }}
        >
          <h4 style={{ color: '#ff90b3', marginBottom: '0.5rem' }}>{p.title}</h4>
          <p style={{ fontSize: '0.95rem' }}>{p.text}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default BookFlipIntro;