// 文件：src/components/AuthorInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AuthorInfo = ({
  authors = ['Nick Cao', 'Peter Zhou', 'Toby Wang']
}) => {
  const text = `By ${authors.join(', ')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '3rem 0',
        width: '100%',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          color: 'rgba(200, 200, 200, 0.7)',
          fontSize: '1.2rem',
          fontWeight: 400,
          letterSpacing: '1px',
          margin: 0,
          textAlign: 'center',
          fontFamily: `'Noto Sans SC', sans-serif`
        }}
      >
        {text}
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{
          width: '60%',
          height: '1.5px',
          marginTop: '0.6rem',
          background: 'linear-gradient(to right, rgba(180,180,180,0.3), rgba(80,80,80,0.7))',
          transformOrigin: 'left center',
          borderRadius: '999px',
        }}
      />
    </motion.div>
  );
};

export default AuthorInfo;