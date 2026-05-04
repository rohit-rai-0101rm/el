import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroDoor from './components/HeroDoor';
import VideoSection from './components/VideoSection';
import LegacySections from './components/LegacySections';

function App() {
  useEffect(() => {
    const cleanups = [];

    // ── FADE-IN OBSERVER ──
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
    cleanups.push(() => fadeObserver.disconnect());

    // ── SPECS: INTERSECTION-DRIVEN IMAGE SWITCH ──
    const specItems = document.querySelectorAll('.spec-item');
    const specImages = document.querySelectorAll('.specs-sticky img');

    if (specItems.length && specImages.length) {
      const specObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const idx = parseInt(entry.target.dataset.img, 10);
              specItems.forEach(i => i.classList.remove('active'));
              specImages.forEach(img => img.classList.remove('active'));
              entry.target.classList.add('active');
              if (specImages[idx]) specImages[idx].classList.add('active');
            }
          });
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      );
      specItems.forEach(item => specObserver.observe(item));
      cleanups.push(() => specObserver.disconnect());
    }

    // ── CUBE: SCROLL-DRIVEN ROTATION ──
    const cubeWrapper = document.getElementById('cubeWrapper');
    const aboutSection = document.getElementById('about');
    if (cubeWrapper && aboutSection) {
      const onCubeScroll = () => {
        const rect = aboutSection.getBoundingClientRect();
        const total = aboutSection.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / total));
        cubeWrapper.style.transform = `rotateX(${progress * 360}deg)`;
      };
      window.addEventListener('scroll', onCubeScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onCubeScroll));
    }

    // ── REVIEWS: DRAG TO SCROLL ──
    const track = document.getElementById('reviewsTrack');
    if (track) {
      let isDown = false, startX = 0, scrollLeft = 0;
      const onDown = (e) => { isDown = true; track.classList.add('dragging'); startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; };
      const onLeave = () => { isDown = false; track.classList.remove('dragging'); };
      const onUp = () => { isDown = false; track.classList.remove('dragging'); };
      const onMove = (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - track.offsetLeft; track.scrollLeft = scrollLeft - (x - startX) * 1.5; };
      track.addEventListener('mousedown', onDown);
      track.addEventListener('mouseleave', onLeave);
      track.addEventListener('mouseup', onUp);
      track.addEventListener('mousemove', onMove);
      cleanups.push(() => {
        track.removeEventListener('mousedown', onDown);
        track.removeEventListener('mouseleave', onLeave);
        track.removeEventListener('mouseup', onUp);
        track.removeEventListener('mousemove', onMove);
      });
    }

    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroDoor />
        <VideoSection />
        <LegacySections />
      </main>
    </>
  );
}

export default App;
