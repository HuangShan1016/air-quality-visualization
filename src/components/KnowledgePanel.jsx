import React from 'react';
import { motion } from 'framer-motion';

const KnowledgePanel = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', color: '#ccc' }}
    >
      <h2>什么是 PM2.5？</h2>
      <p>PM2.5 指的是直径小于或等于 2.5 微米的颗粒物...</p>
      
      <h3>空气污染的危害</h3>
      <ul>
        <li>加重哮喘、支气管炎等呼吸疾病</li>
        <li>提高中风和心脏病发病率</li>
        <li>对儿童发育和老年人健康有明显影响</li>
      </ul>

      <h3>日常应对措施</h3>
      <ul>
        <li>污染日减少户外运动</li>
        <li>使用口罩或空气净化器</li>
        <li>关注政府发布的空气质量预警</li>
      </ul>
    </motion.section>
  );
};

export default KnowledgePanel;
