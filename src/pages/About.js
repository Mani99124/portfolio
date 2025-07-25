
import React, { useEffect, useState } from 'react';
import './About.css';
import { motion } from 'framer-motion';

function ScoreCounter({ end, isPercentage }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(isPercentage ? parseFloat(start).toFixed(1) : start.toFixed(2));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [end, isPercentage]);

  return (
    <p className="score">
      {isPercentage ? `${count}%` : count}
    </p>
  );
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 60,
    }
  }),
};

function About() {
  return (
    <>
     
      <motion.span layoutId="magicM" className="char metallic back" style={{ opacity: "0" }}>
        M
      </motion.span>

      <div className="education-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="about-me"
          style={{ marginBottom: "60px", maxWidth: "800px", marginInline: "auto" }}
        >
          <h2 className="timeline-title">About Me</h2>
          <p style={{ fontSize: "16px", color: "#aaa", lineHeight: "1.8", textAlign: "center" }}>
            I'm Manikanth, a passionate Electronics and Communication Engineering student from GNIT with a strong foundation in MERN stack development and problem-solving using Data Structures and Algorithms.
            I'm driven by innovation, actively working on smart agriculture solutions and real-time weather-adaptive systems. My interests lie in blending technology with real-world challenges.
          </p>
        </motion.div>

        
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          My Education
        </motion.h2>

        {/* Education Cards */}
        <div className="timeline-container">
          {[
            {
              score: 10,
              label: "in SSC",
              title: "Sri Chaitanya Techno",
              desc: "Curriculum: Techno"
            },
            {
              score: 9.12,
              label: "in B.Tech",
              title: "Guru Nanak Institute of Technology",
              desc: "Department: ECE"
            },
            {
              score: 94.5,
              label: "in Inter",
              title: "Sri Chaitanya Junior Kalashala",
              desc: "Curriculum: MPC",
              isPercentage: true
            }
          ].map((item, i) => (
            <motion.div
              className="timeline-item"
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <ScoreCounter end={item.score} isPercentage={item.isPercentage} />
              <div className="timeline-dot">{item.label}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
