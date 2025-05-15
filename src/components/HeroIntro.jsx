// 文件：src/components/HeroIntro.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { colors, fonts } from '../theme';
import './HeroIntro.css'; // ⚠️ 请确认你有正确引入样式

const HeroIntro = () => {
  return (
    <section className="hero-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="hero-card"
      >
        <h2 className="hero-title">
          空气质量，影响的不只是今天
        </h2>
        <p className="hero-subtitle">
          - 此网站整理了宁波近八年来的 PM2.5 数据 -
        </p>
        <motion.svg
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="hero-arrow"
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke={colors.secondary}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroIntro;