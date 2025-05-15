import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const PM25Counter = () => {
  const [pm25, setPm25] = useState(0);

  useEffect(() => {
    const controls = animate(0, 24, {
      duration: 2.2,
      onUpdate(value) {
        setPm25(Math.floor(value));
      }
    });
    return () => controls.stop();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: '#e6374e',
        fontSize: '2.8rem',
        fontWeight: 'bold'
      }}
    >
      宁波 2023 年 PM2.5 年均浓度：{pm25} μg/m³
    </motion.section>
  );
};

export default PM25Counter;