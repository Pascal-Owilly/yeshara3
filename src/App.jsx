import './App.css';
import Spline from '@splinetool/react-spline';
import MainInfo from './components/mainInfo/MainInfo';
import About from './components/about/About';
import Stats from './components/stats/Stats';
import Guide from './components/guide/Guide';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Home from './components/home/Home'; // Create a separate home component for clarity
import FAQs from './components/faqs/FAQs';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact'; // Import Contact Component
import AboutUs from './components/about/AboutUs'; // Import Contact Component

import { useEffect } from 'react';

export default function App() {
  const animationUrl = 'https://prod.spline.design/MRH3HYRMZTjVEKDo/scene.splinecode';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
        } else {
          e.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
        <Route path="/about" element={<AboutUs />} /> {/* Add Contact Route */}
      </Routes>
      <Footer />
    </Router>
  );
}
