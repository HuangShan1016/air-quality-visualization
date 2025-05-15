import React, { useEffect, useState } from 'react';

const Reference = () => {
  const references = [
    "1. 宁波市生态环境局. “2023年度生态环境状况公报.” 宁波市生态环境局, 13 June 2024, http://sthjj.ningbo.gov.cn/art/2024/6/13/art_1229051263_58910489.html",
    "2. 宁波市生态环境局. “2023年前三季度宁波市空气质量怎么样？官方数据来啦！” 宁波市生态环境局, 16 Oct. 2023, http://sthjj.ningbo.gov.cn/art/2023/10/16/art_1229051372_58909758.html",
    "3. 宁波市生态环境局. “2024年11月宁波市环境空气质量情况的通报.” 宁波市生态环境局, 13 Jan. 2025, http://sthjj.ningbo.gov.cn/art/2025/1/13/art_1229051286_58911188.html",
    "4. “宁波空气污染：实时PM2.5空气质量指数（AQI）.” 世界空气质量指数项目, https://aqicn.org/city/ningbo/cn/",
    "5. 宁波市环境监测中心. “宁波市空气质量实时发布平台.” 宁波市生态环境监测中心, https://air.znbeemc.cn/",
    "6. 互动百科. “RWKV.” 互动百科, https://www.baike.com/wikiid/7211023479205462072?baike_source=doubao."
  ];

  // 把数组拼成一段完整的文字
  const fullText = references.join('\n');

  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [fullText]); // ✅ 建议加上 fullText 作为依赖

  return (
    <div style={{
      background: '#1c1c1c',
      border: '1px solid #333',
      borderRadius: '12px',
      padding: '1.5rem',
      margin: '3rem auto',
      maxWidth: '800px',
      color: '#ccc',
      fontSize: '0.85em',
      lineHeight: '1.6',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      boxShadow: '0 0 12px rgba(255, 255, 255, 0.05)'
    }}>
      {displayed}
    </div>
  );
};

export default Reference;