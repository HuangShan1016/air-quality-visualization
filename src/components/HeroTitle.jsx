// 文件：src/components/HeroTitle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './HeroTitle.css';

const HeroTitle = () => {
  return (
    <section className="hero-title-section">
      <motion.div
        className="hero-title-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 背景装饰圆圈 */}
        <div className="decorative-circles">
          <motion.span
            className="circle circle-1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />
          <motion.span
            className="circle circle-2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          />
          <motion.span
            className="circle circle-3"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          />
        </div>

        {/* 标题文字 */}
        <h1 className="hero-title-text">宁波空气可视化</h1>

        {/* 四周小方框 */}
        <div className="title-boxes">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="little-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 1] }}
              transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroTitle;