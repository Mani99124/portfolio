import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import './App.css';

function AnimatedRoutes({ loading }) {
  const location = useLocation();

  // Update radial glow position when location changes
  useEffect(() => {
    const activeLink = document.querySelector('.navbar a.active');
    const navbar = document.querySelector('.navbar');

    if (activeLink && navbar) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = navbar.getBoundingClientRect();

      const left = rect.left + rect.width / 2 - navRect.left;
      const top = rect.bottom - navRect.top;

      navbar.style.setProperty('--glow-left', `${left}px`);
      navbar.style.setProperty('--glow-top', `${top}px`);
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleSidebarClose = () => setSidebarOpen(false);

  // Determine active link for styling
  const getLinkClass = (path) => (location.pathname === path ? 'active' : '');

  return (
    <>
      <button
        className="sidebar-toggle"
        aria-label="Open navigation menu"
        onClick={handleSidebarToggle}
      >
        &#9776;
      </button>


      <nav
        className={`navbar sidebar ${sidebarOpen ? 'open' : ''}`}
        aria-label="Main navigation"
      >
        <ul>
          <li>
            <Link to="/" onClick={handleSidebarClose} className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleSidebarClose} className={getLinkClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={handleSidebarClose} className={getLinkClass('/skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleSidebarClose} className={getLinkClass('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleSidebarClose} className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <AnimatedRoutes loading={loading} />
      </div>
    </>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
