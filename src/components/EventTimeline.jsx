// 文件：src/components/EventTimeline.jsx
import React from 'react';
import './EventTimeline.css';

const events = [
  { date: '2017-12', title: 'PM2.5 达到峰值', description: '当月PM2.5浓度达到年内最高点。' },
  { date: '2020-02', title: '疫情封锁', description: '新冠疫情封锁期间污染物显著下降。' },
  { date: '2022-07', title: '空气质量最佳', description: 'AQI指数近年最低，空气质量最好。' }
];

const EventTimeline = () => (
  <section className="timeline-wrapper">
    <div className="timeline-inner">
      <h3 className="timeline-title">数据记录事件</h3>
      <div className="timeline-line-wrapper">
        <div className="timeline-line" />
        <ul className="timeline-list">
          {events.map((e, i) => (
            <li key={i} className="timeline-item">
              <div className="timeline-left">
                <span className="timeline-dot" />
                <span className="timeline-date">{e.date}</span>
              </div>
              <div className="timeline-content">
                <h4>{e.title}</h4>
                <p>{e.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EventTimeline;