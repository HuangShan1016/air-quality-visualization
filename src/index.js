// 文件：src/index.js
import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ① 引入 Locomotive 提供器和样式
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const containerRef = createRef();

ReactDOM.render(
  <LocomotiveScrollProvider
    options={{
      smooth: true,       // 开启平滑滚动
      multiplier: 0.6,    // 滚动速度倍数 (<1 更慢)
      inertia: 0.8        // 阻尼系数 (0.5–1.0 之间)
    }}
    containerRef={containerRef}
    watch={[]}            // 如果有动态内容变更可传入 state
  >
    {/* ② 标记滚动容器 */}
    <div data-scroll-container ref={containerRef}>
      <App />
    </div>
  </LocomotiveScrollProvider>,
  document.getElementById('root')
);