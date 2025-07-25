import React from 'react';
import { motion } from 'framer-motion'
import './Preloader.css';
import "../pages/Home.css"; 

function Preloader() {
  return (
    <div className="preloader">
      <div className='logo'>
      <motion.span
          className="char metallic"
          layoutId="magicM"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          M
        </motion.span>
      </div>
    </div>
  );
}

export default Preloader; 