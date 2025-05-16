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
import ViewCounter            from './components/ViewCounter';  // ✅ 新增引用

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
    overflowX: 'hidden',
    position: 'relative'
  }}>
    {/* 👁️ 右上角浏览次数显示组件 */}
    <ViewCounter />

    {/* 开场 */}
    <HeroOpening />
    {React.createElement(wrap(Navbar, 0.8), {})}
    {React.createElement(wrap(HeroTitle, 0.8), {})}
    {React.createElement(wrap(HeroIntro, 0.8), {})}
    {React.createElement(wrap(PM25YearWithPie, 0.8), {})}
    {React.createElement(wrap(AllYearsChart, 0.8), {})}
    {React.createElement(wrap(EventTimeline, 0.8), {})}
    {React.createElement(wrap(PM25Counter, 0.8), {})}
    {React.createElement(wrap(PollutionLegend, 0.8), {})}
    {React.createElement(wrap(KnowledgePanel, 0.8), {})}
    {React.createElement(wrap(GridGalleryCenter, 0.8), {})}
    {React.createElement(wrap(CompactDataBoard, 0.8), {})}
    {React.createElement(wrap(BookFlipIntro, 0.8), {})}
    {React.createElement(wrap(PM25ComparisonChart, 0.8), {})}
    {React.createElement(wrap(PM25Table2023, 0.8), {})}
    {React.createElement(wrap(Reference, 0.8), {})}
    {React.createElement(wrap(Footer, 0.8), {})}
  </div>
);

export default App;