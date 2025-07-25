import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import cropera from './Crop-era.png';
import airbnb from "./airbnb.png"
import portfolio from "./portfolio.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills, projects, and contact details with a futuristic theme.",
    image: portfolio, 
  },
  {
    title: "Crop-Era",
    description: "A smart agri-advisory platform for crop-specific recommendations based on weather and location.",
    image: cropera, 
  },
  {
    title: "Airbnb Clone project",
    description: "A modern full-stack clone of Airbnb with dynamic property listings, user authentication, booking functionality, and responsive UI — built using the MERN stack.",
    image: airbnb, 
  },
];

const Projects = () => {
  return (
    <>
    <motion.span layoutId="magicM" className="char metallic back project" style={{ opacity: "0" }}>
                  M
                </motion.span>
    <div className="projects-container">
       
      <h1 className="projects-heading">
        MY PROJECTS
      </h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
   </>
  );
};

export default Projects;
