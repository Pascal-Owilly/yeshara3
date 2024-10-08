import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../../components/navbar/Navbar';
import MainInfo from '../../components/mainInfo/MainInfo';
import About from '../../components/about/About';
import Stats from '../../components/stats/Stats';
import Guide from '../../components/guide/Guide';
import Footer from '../../components/footer/Footer';

export default function Home() {
//   const animationUrl = 'https://prod.spline.design/MRH3HYRMZTjVEKDo/scene.splinecode';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="column">
        <div style={{ height: '100vh', maxHeight: '1220px' }}>
          <div className="landing">
            <MainInfo />
          </div>
        </div>
        <About />
        <Stats />
        <Guide />
      </div>
    </>
  );
}
