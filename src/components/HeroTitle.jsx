// 文件：src/components/HeroTitle.jsx
import React from 'react';
import './HeroTitle.css';

const HeroTitle = () => {
  return (
    <section className="hero-title-section">
      {/* 多层星体背景 */}
      <div className="starfield starfield-1" />
      <div className="starfield starfield-2" />
      <div className="starfield starfield-3" />

      {/* 多区域圆环分布 */}
      <div className="ring-container">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
        <div className="ring ring-4" />
        <div className="ring ring-5" />
        <div className="ring ring-6" />
      </div>

      {/* 标题文字 */}
      <h1 className="hero-title-text">宁波空气污染数据记录</h1>

      {/* 发光中心线 */}
      <div className="title-underline" />

      {/* 副标题 */}
      <p className="hero-subtitle">- 下滑浏览网站 -</p>
    </section>
  );
};

export default HeroTitle;