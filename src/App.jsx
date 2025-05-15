// 文件：src/App.jsx
import React from 'react';
import HeroOpening            from './components/HeroOpening';
import Navbar                 from './components/Navbar';
import HeroTitle              from './components/HeroTitle';
import HeroIntro              from './components/HeroIntro';
import PM25YearWithPie        from './components/PM25YearWithPie';
import AllYearsChart          from './components/AllYearsChart';
import EventTimeline          from './components/EventTimeline';
import PM25Counter            from './components/PM25Counter';
import PollutionLegend        from './components/PollutionLegend';
import KnowledgePanel         from './components/KnowledgePanel';
import CompactDataBoard       from './components/CompactDataBoard';
import GridGalleryCenter      from './components/GridGalleryCenter';
import BookFlipIntro          from './components/BookFlipIntro';
import PM25ComparisonChart    from './components/PM25ComparisonChart';
import PM25Table2023          from './components/PM25Table2023';
import Reference              from './components/Reference';
import Footer                 from './components/Footer';

// （可选）高阶组件：给模块加阻尼滑动效果
const wrap = (Component, speed = 1, repeat = true) => props => (
  <div
    data-scroll
    data-scroll-speed={speed}
    data-scroll-repeat={repeat}
    style={{ width: '100%' }}
  >
    <Component {...props} />
  </div>
);

const App = () => (
  <div style={{
    background: '#111',
    color: '#fff',
    minHeight: '100vh',
    overflowX: 'hidden'
  }}>
    {/* 开场 */}
    <HeroOpening />

    {/* 导航 */}
    {React.createElement(wrap(Navbar, 0.8), {})}

    {/* 标题 */}
    {React.createElement(wrap(HeroTitle, 0.8), {})}

    {/* 简介 */}
    {React.createElement(wrap(HeroIntro, 0.8), {})}

    {/* 2023 年折线 + 饼图 组合 */}
    {React.createElement(wrap(PM25YearWithPie, 0.8), {})}

    {/* 全年趋势 */}
    {React.createElement(wrap(AllYearsChart, 0.8), {})}

    {/* 事件时间轴 */}
    {React.createElement(wrap(EventTimeline, 0.8), {})}

    {/* 实时计数 */}
    {React.createElement(wrap(PM25Counter, 0.8), {})}

    {/* 图例 */}
    {React.createElement(wrap(PollutionLegend, 0.8), {})}

    {/* 知识面板 */}
    {React.createElement(wrap(KnowledgePanel, 0.8), {})}

    {/* “温室效应”模块 */}
    {React.createElement(wrap(GridGalleryCenter, 0.8), {})}

    {/* 紧凑数据板 */}
    {React.createElement(wrap(CompactDataBoard, 0.8), {})}

    {/* 翻书动画引导 */}
    {React.createElement(wrap(BookFlipIntro, 0.8), {})}

    {/* 年度比较 */}
    {React.createElement(wrap(PM25ComparisonChart, 0.8), {})}

    {/* 数据表 */}
    {React.createElement(wrap(PM25Table2023, 0.8), {})}

    {/* 参考文献 */}
    {React.createElement(wrap(Reference, 0.8), {})}

    {/* 页脚 */}
    {React.createElement(wrap(Footer, 0.8), {})}
  </div>
);

export default App;