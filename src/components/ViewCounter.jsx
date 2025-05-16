// 文件：src/components/ViewCounter.jsx
import React, { useEffect, useState } from 'react';
import './ViewCounter.css';

const ViewCounter = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    fetch('https://counterapi.dev/api/HuangShan1016/air-visual-site')
      .then(res => res.json())
      .then(data => {
        const target = data.count || 0;
        // 平滑数字动画
        let current = 0;
        const step = Math.max(Math.floor(target / 30), 1);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            setDisplay(target);
            clearInterval(interval);
          } else {
            setDisplay(current);
          }
        }, 20);
        setCount(target);
      });
  }, []);

  return (
    <div className="view-counter">
      <div className="view-number">{display.toLocaleString()}</div>
      <div className="view-label">已访问本站</div>
    </div>
  );
};

export default ViewCounter;