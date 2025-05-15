// 文件：src/components/HeroOpening.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroOpening = () => {
  const fullText = '这几年，宁波的空气怎么样了？';
  const [displayedText, setDisplayedText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const seed = useRef(Math.random() * 1000);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef();

  // 打字 + 1.5s 后触发消失
  useEffect(() => {
    window.scrollTo(0, 0);
    let i = 0;
    const typing = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
        setTimeout(() => setFadeOut(true), 1500);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  // 请求动画帧循环（给波浪用）
  useEffect(() => {
    function loop() {
      rafRef.current = requestAnimationFrame(loop);
    }
    loop();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // 生成“指纹式”统一波浪
  const generateWavePaths = () => {
    const t = (Date.now() - startTimeRef.current) / 1000;
    const H = window.innerHeight;
    const spacing = 16;
    const count = Math.floor(H / spacing) + 4;
    const maxAmp = 30;
    const paths = [];

    for (let i = 0; i < count; i++) {
      const y = i * spacing + 10;
      const norm = (i - count / 2) / (count / 2);
      const amp = Math.cos(norm * Math.PI) * maxAmp * (0.5 + 0.5 * Math.sin(t)) + 5;
      const phase = seed.current + t * 1.2;
      const offset = Math.sin(phase + i * 0.25) * amp;

      // 三段路径拼接以保证无空缺
      const d = `
        M0,${y}
        Q480,${y - offset} 960,${y}
        T1920,${y}
        T2880,${y}
      `;

      paths.push(
        <path
          key={i}
          d={d}
          stroke="#e6374e"
          strokeWidth="1.3"
          fill="none"
          opacity="0.25"
        />
      );
    }
    return paths;
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            y: -250,
            scale: 1.2,
            filter: 'blur(8px)',
            transition: { duration: 2.6, ease: [0.22, 1, 0.36, 1] }
          }}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0,
            height: '100vh',
            background: '#000',
            overflow: 'hidden',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center'
          }}
          onClick={() => setFadeOut(true)}  // 点击可跳过
        >
          {/* 打字标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            style={{
              color: '#f96c86',
              fontSize: '2.4rem',
              zIndex: 2
            }}
          >
            {displayedText}
          </motion.h1>

          {/* 作者信息：灰色小字 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
              color: '#888',
              fontSize: '0.9rem',
              marginTop: '0.5rem',
              zIndex: 2
            }}
          >
            By Nick Cao, Peter Zhou, Toby Wang
          </motion.p>

          {/* 分隔线：深灰细横线 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.5, duration: 0.8, ease: 'easeOut' }}
            style={{
              width: '60%',
              height: '1px',
              background: '#444',
              margin: '0.2rem auto 1rem',
              transformOrigin: 'left center',
              zIndex: 2
            }}
          />

          {/* 波浪条纹 */}
          <svg
            viewBox="0 0 2880 1000"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: 'calc(100% + 240px)',
              height: '100%',
              pointerEvents: 'none',
              animation: 'waveScroll 8s linear infinite',
              zIndex: 1
            }}
          >
            {generateWavePaths()}
          </svg>

          {/* 底部垂直渐变 */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0,
            width: '100%', height: '160px',
            background: 'linear-gradient(to top, #7a2d40aa 0%, transparent 100%)',
            animation: 'bottomGlow 4s ease-in-out infinite alternate',
            zIndex: 0
          }} />

          <style>{`
            @keyframes waveScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-240px); }
            }
            @keyframes bottomGlow {
              0% { opacity: 0.2; }
              100% { opacity: 0.5; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroOpening;