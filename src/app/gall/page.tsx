'use client';

import React, { useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

const events = [
  {
    id: "circuit-fiesta-2024-1",
    year: "2024",
    title: "CIRCUIT FIESTA",
    desc: "Hands-on engineering, automated hardware development sprints, and real-time laboratory challenge tracks.",
    positions: [
      { top: '10%', left: '18%', width: '220px', height: '290px', rot: 3 },
      { top: '12%', left: '42%', width: '290px', height: '200px', rot: -4 },
      { top: '10%', left: '66%', width: '240px', height: '240px', rot: 3 },
      { top: '28%', left: '12%', width: '270px', height: '210px', rot: -5 },
      { top: '26%', left: '72%', width: '280px', height: '220px', rot: 4 },
      { top: '44%', left: '20%', width: '200px', height: '280px', rot: -2 },
      { top: '42%', left: '45%', width: '310px', height: '230px', rot: 5 },
      { top: '45%', left: '68%', width: '230px', height: '290px', rot: -3 },
      { top: '64%', left: '14%', width: '290px', height: '220px', rot: 4 },
      { top: '62%', left: '40%', width: '250px', height: '270px', rot: -4 },
      { top: '65%', left: '62%', width: '220px', height: '200px', rot: 2 },
      { top: '24%', left: '54%', width: '200px', height: '230px', rot: -3 },
    ],
    images: [
      { src: "./1.jpg", label: "PCB Layout Design" },
      { src: "./2.jpg", label: "Soldering Lab" },
      { src: "./3.jpg", label: "Oscilloscope Sync" },
      { src: "./8.jpg", label: "Robotic Setup" },
      { src: "./4.jpg", label: "Firmware Sprint" },
      { src: "./5.jpg", label: "IoT Deployments" },
      { src: "./6.jpg", label: "Microcontroller Lab" },
      { src: "./3.jpg", label: "Hardware Diagnosis" },
      { src: "./7.jpg", label: "Sensors Dynamic" },
      { src: "./8.jpg", label: "Embedded Testing" },
      { src: "./9.jpg", label: "Logic Analysis" },
      { src: "./10.jpg", label: "Final Demo Run" },
    ]
  },
  {
    id: "technophilia-2024",
    year: "2024",
    title: "TECHNOPHILIA",
    desc: "Our flagship technical symposium — two days of intensive innovation, code-breaking hackathons, and high-impact connections.",
    positions: [
      { top: '12%', left: '16%', width: '260px', height: '190px', rot: -4 },
      { top: '8%', left: '38%', width: '210px', height: '260px', rot: 3 },
      { top: '10%', left: '62%', width: '280px', height: '200px', rot: -3 },
      { top: '26%', left: '22%', width: '220px', height: '280px', rot: 5 },
      { top: '24%', left: '72%', width: '240px', height: '300px', rot: -5 },
      { top: '44%', left: '10%', width: '280px', height: '210px', rot: 3 },
      { top: '42%', left: '38%', width: '260px', height: '220px', rot: -4 },
      { top: '40%', left: '68%', width: '230px', height: '290px', rot: 6 },
      { top: '62%', left: '20%', width: '290px', height: '210px', rot: -4 },
      { top: '64%', left: '44%', width: '220px', height: '260px', rot: 2 },
      { top: '60%', left: '70%', width: '300px', height: '220px', rot: -3 },
      { top: '18%', left: '50%', width: '200px', height: '200px', rot: 4 },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", label: "Keynote Hall" },
      { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", label: "Inauguration" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", label: "Tech Debates" },
      { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", label: "Hackathon Day" },
      { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80", label: "Project Expo" },
      { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", label: "Coding Arena" },
      { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", label: "Mentorship Grid" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", label: "Panel Track" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", label: "Networking Mixer" },
      { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", label: "AI Track Labs" },
      { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", label: "Awards Show" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", label: "Closing Night" },
    ]
  },
  {
    id: "circuit-fiesta-2024-2",
    year: "2024",
    title: "CIRCUIT FIESTA II",
    desc: "Hands-on engineering, automated hardware development sprints, and real-time laboratory challenge tracks.",
    positions: [
      { top: '10%', left: '18%', width: '220px', height: '290px', rot: 3 },
      { top: '12%', left: '42%', width: '290px', height: '200px', rot: -4 },
      { top: '10%', left: '66%', width: '240px', height: '240px', rot: 3 },
      { top: '28%', left: '12%', width: '270px', height: '210px', rot: -5 },
      { top: '26%', left: '72%', width: '280px', height: '220px', rot: 4 },
      { top: '44%', left: '20%', width: '200px', height: '280px', rot: -2 },
      { top: '42%', left: '45%', width: '310px', height: '230px', rot: 5 },
      { top: '45%', left: '68%', width: '230px', height: '290px', rot: -3 },
      { top: '64%', left: '14%', width: '290px', height: '220px', rot: 4 },
      { top: '62%', left: '40%', width: '250px', height: '270px', rot: -4 },
      { top: '65%', left: '62%', width: '220px', height: '200px', rot: 2 },
      { top: '24%', left: '54%', width: '200px', height: '230px', rot: -3 },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", label: "PCB Layout Design" },
      { src: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=800&q=80", label: "Soldering Lab" },
      { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", label: "Oscilloscope Sync" },
      { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", label: "Robotic Setup" },
      { src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80", label: "Firmware Sprint" },
      { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", label: "IoT Deployments" },
      { src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80", label: "Microcontroller Lab" },
      { src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80", label: "Hardware Diagnosis" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", label: "Sensors Dynamic" },
      { src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80", label: "Embedded Testing" },
      { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80", label: "Logic Analysis" },
      { src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80", label: "Final Demo Run" },
    ]
  }
];

export default function GalleryPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const streamRef = useRef<HTMLElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewerActive = false;
    let viewerScrollY = 0;
    let activeSlideIndex = 0;
    let wheelDebounce: NodeJS.Timeout | null = null;
    let scrollAccumulator = 0;
    let currentEventImagesCount = 0;

    const canvas = document.getElementById('galaxy-canvas') as HTMLCanvasElement;
    let galaxyCtx = canvas?.getContext('2d');
    let W = 0, H = 0, stars: any[] = [];
    let animationFrameGalaxyId: number;

    function resizeGalaxy() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function buildStars() {
      stars = [];
      const density = window.innerWidth < 768 ? 120 : 300;
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.5 + 0.3,
          a: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
          ox: Math.random() * W,
          oy: Math.random() * H,
        });
      }
    }

    let tGalaxy = 0;
    function loopGalaxy() {
      animationFrameGalaxyId = requestAnimationFrame(loopGalaxy);
      if (!galaxyCtx) return;
      tGalaxy += 0.0005;
      galaxyCtx.clearRect(0, 0, W, H);

      stars.forEach(s => {
        const py = (s.oy + tGalaxy * s.speed * 60) % H;
        const px = s.ox;
        const twinkle = s.a * (0.6 + 0.4 * Math.sin(tGalaxy * 4 + s.x));
        galaxyCtx!.beginPath();
        galaxyCtx!.arc(px, py, s.r, 0, Math.PI * 2);
        galaxyCtx!.fillStyle = `rgba(230,237,243,${twinkle})`;
        galaxyCtx!.fill();
      });
    }

    window.addEventListener('resize', () => { resizeGalaxy(); buildStars(); });
    resizeGalaxy(); buildStars(); loopGalaxy();

    let mx = -100, my = -100, cx = -100, cy = -100;
    let animationFrameCursorId: number;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    function cursorLoop() {
      animationFrameCursorId = requestAnimationFrame(cursorLoop);
      if (!cursorRef.current) return;
      cx += (mx - cx) * 0.16; cy += (my - cy) * 0.16;
      cursorRef.current.style.left = cx + 'px'; cursorRef.current.style.top = cy + 'px';
    }
    cursorLoop();

    // Responsive positioning matrix setup
    const initializePlanets = () => {
      const planets = systemRef.current?.querySelectorAll('.planet-wrapper');
      if (planets) {
        planets.forEach((planet, index) => {
          const baseDiameter = window.innerWidth < 480 ? 190 : window.innerWidth < 768 ? 220 : 220;
          const baseGap = window.innerWidth < 768 ? 95 : 140;
          const orbitDiameter = baseDiameter + index * baseGap; 
          const speed = 20 + index * 12; 

          gsap.set(planet, {
            width: orbitDiameter,
            height: orbitDiameter
          });

          gsap.set(planet.querySelector('.orbit-line'), {
            width: orbitDiameter,
            height: orbitDiameter,
          });

          // Clear previous tweens to prevent timeline overlap on resize
          gsap.killTweensOf(planet.querySelector('.planet-node'));
          gsap.killTweensOf(planet.querySelector('.planet-badge'));

          gsap.to(planet.querySelector('.planet-node'), {
            rotation: 360,
            duration: speed,
            repeat: -1,
            ease: 'none',
            transformOrigin: 'center center'
          });
          
          gsap.to(planet.querySelector('.planet-badge'), {
            rotation: -360,
            duration: speed,
            repeat: -1,
            ease: 'none',
            transformOrigin: 'center center'
          });
        });
      }
    };

    initializePlanets();
    window.addEventListener('resize', initializePlanets);

    const sections = document.querySelectorAll('.gallery-screen');
    sections.forEach((sec) => {
      const meta = sec.querySelector('.collage-meta');
      const items = sec.querySelectorAll('.collage-item');

      gsap.set(items, { scale: 0.75, opacity: 0, y: 80 });
      gsap.set(meta, { y: 60, opacity: 0 });

      ScrollTrigger.create({
        trigger: sec,
        start: 'top 65%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(meta, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' });
          gsap.to(items, { scale: 1, opacity: 1, y: 0, duration: 1.4, stagger: 0.03, ease: 'power4.out' });
        },
        onLeaveBack: () => {
          gsap.to(meta, { y: 60, opacity: 0, duration: 0.8 });
          gsap.to(items, { scale: 0.75, opacity: 0, y: 80, duration: 0.8 });
        }
      });
    });

    function goToSlide(index: number, animate = true) {
      if (!trackRef.current) return;
      index = Math.max(0, Math.min(currentEventImagesCount - 1, index));
      activeSlideIndex = index;

      const isMobile = window.innerWidth < 768;
      const slideWidth = window.innerWidth * (isMobile ? 0.88 : 0.76);
      const gap = window.innerWidth * 0.04;
      const targetX = -(index * (slideWidth + gap));

      gsap.to(trackRef.current, {
        x: targetX,
        duration: animate ? 0.8 : 0,
        ease: 'power3.out'
      });

      const slides = trackRef.current.querySelectorAll('.viewer-slide');
      slides.forEach((s, i) => {
        const isActive = i === index;
        s.classList.toggle('is-active', isActive);
        gsap.to(s, {
          scale: isActive ? 1 : 0.88,
          opacity: isActive ? 1 : 0.3,
          duration: animate ? 0.8 : 0,
          ease: 'power3.out'
        });
      });

      if (progressRef.current) {
        progressRef.current.textContent = `${index + 1} / ${currentEventImagesCount}`;
      }
    }

    function openViewer(eventIndex: number, imageIndex: number) {
      if (viewerActive || !viewerRef.current || !trackRef.current) return;
      viewerActive = true;
      const ev = events[eventIndex];
      currentEventImagesCount = ev.images.length;

      trackRef.current.innerHTML = '';
      gsap.set(trackRef.current, { x: 0 });

      const isMobile = window.innerWidth < 768;
      ev.images.forEach((img, i) => {
        const slide = document.createElement('div');
        slide.className = 'viewer-slide';
        slide.style.position = 'absolute';
        slide.style.left = isMobile ? `${6 + i * 92}vw` : `${12 + i * 80}vw`; 
        slide.style.top = isMobile ? '20vh' : '14vh';
        slide.style.width = isMobile ? '88vw' : '76vw';
        slide.style.height = isMobile ? '55vh' : '72vh';
        slide.innerHTML = `
          <img src="${img.src}" alt="${img.label}">
          <div class="viewer-slide-info">
            <div class="vi-event">${ev.title}</div>
            <div class="vi-year">${ev.year} · ${img.label}</div>
          </div>
        `;
        trackRef.current?.appendChild(slide);
      });

      viewerScrollY = window.scrollY;
      viewerRef.current.classList.add('active');
      document.body.style.overflow = 'hidden';

      gsap.fromTo(viewerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45 });
      goToSlide(imageIndex, false);
    }

    function closeViewer() {
      if (!viewerActive || !viewerRef.current) return;
      gsap.to(viewerRef.current, {
        opacity: 0, duration: 0.4,
        onComplete: () => {
          viewerRef.current?.classList.remove('active');
          document.body.style.overflow = '';
          viewerActive = false;
          window.scrollTo(0, viewerScrollY);
        }
      });
    }

    const handleViewerWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (wheelDebounce) return;
      scrollAccumulator += e.deltaY;

      if (Math.abs(scrollAccumulator) >= 60) {
        const dir = scrollAccumulator > 0 ? 1 : -1;
        goToSlide(activeSlideIndex + dir);
        scrollAccumulator = 0;
        wheelDebounce = setTimeout(() => { wheelDebounce = null; }, 300);
      }
    };
    viewerRef.current?.addEventListener('wheel', handleViewerWheel, { passive: false });

    const handleStreamClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const wrap = target.closest('.collage-item') as HTMLElement;
      if (!wrap) return;
      const ei = parseInt(wrap.dataset.event || '0');
      const ii = parseInt(wrap.dataset.index || '0');
      openViewer(ei, ii);
    };
    streamRef.current?.addEventListener('click', handleStreamClick);

    const handleViewerBackgroundClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('img') || target.closest('.viewer-slide-info') || target.closest('#viewer-progress')) {
        return; 
      }
      closeViewer();
    };
    viewerRef.current?.addEventListener('click', handleViewerBackgroundClick);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer();
      if (!viewerActive) return;
      if (e.key === 'ArrowRight') goToSlide(activeSlideIndex + 1);
      if (e.key === 'ArrowLeft') goToSlide(activeSlideIndex - 1);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', initializePlanets);
      cancelAnimationFrame(animationFrameGalaxyId);
      cancelAnimationFrame(animationFrameCursorId);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handlePlanetClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #030303;
          --accent: #0077c2;
          --text: #ffffff;
          --muted: #a0aec0;
        }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: ${inter.style.fontFamily}, sans-serif;
          overflow-x: hidden;
          cursor: none;
        }
        @media (max-width: 1024px) {
          body { cursor: default !important; }
        }
      `}</style>

      <style jsx>{`
        #cursor {
          position: fixed;
          width: 8px; height: 8px;
          background: rgba(0, 119, 194, 0.9);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
        }
        @media (max-width: 1024px) {
          #cursor { display: none !important; }
        }
        #galaxy-canvas {
          position: fixed;
          inset: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          pointer-events: none;
        }
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2.5rem 4rem;
        }
        .nav-brand { font-size: .9rem; font-weight: 700; letter-spacing: .2em; color: var(--accent); }
        .nav-links { display: flex; gap: 2.5rem; }
        .nav-links a { color: var(--muted); text-decoration: none; font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; }
        .nav-links a.active { color: var(--text); }
        
        @media (max-width: 768px) {
          nav { padding: 1.5rem 2rem; }
          .nav-links { gap: 1.2rem; }
        }

        #hero-screen {
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 6rem;
          position: relative;
          z-index: 10;
        }
        .hero-left {
          flex: 1.2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 20;
        }
        .hero-right {
          flex: 0.8;
          padding-left: 2rem;
          position: relative;
          z-index: 5;
        }
        .hero-title { font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.1; }
        .hero-title em { font-style: normal; color: var(--accent); text-shadow: 0 0 40px rgba(0, 119, 194, 0.2); }
        .hero-sub { color: var(--muted); font-size: 1.05rem; max-width: 44ch; margin-top: 1.5rem; line-height: 1.65; }

        @media (max-width: 1024px) {
          #hero-screen {
            flex-direction: column-reverse;
            height: auto;
            padding: 8rem 2rem 4rem 2rem;
            justify-content: center;
            gap: 4rem;
          }
          .hero-left {
            flex: none;
            width: 100%;
            height: 480px;
          }
          .hero-right {
            flex: none;
            width: 100%;
            padding-left: 0;
            text-align: center;
          }
          .hero-sub { margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 480px) {
          .hero-left { height: 380px; }
        }

        .solar-system {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
          z-index: 30;
        }
        .sun-core {
          position: absolute;
          width: 50px;
          height: 50px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 40px 15px rgba(0, 119, 194, 0.65), 0 0 15px 2px #0077c2;
          z-index: 10;
        }
        @media (max-width: 480px) {
          .sun-core { width: 35px; height: 35px; }
        }
        .planet-wrapper {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .orbit-line {
          position: absolute;
          border: 1px dashed rgba(255, 255, 255, 0.09);
          border-radius: 50%;
          pointer-events: none;
        }
        .planet-node {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .planet-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 40;
          pointer-events: auto;
          -webkit-tap-highlight-color: transparent;
        }
        .planet-dot {
          width: 16px;
          height: 16px;
          background: #ffffff;
          border: 2px solid var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(0, 119, 194, 0.8);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
        }
        .planet-label {
          margin-top: 10px;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          color: var(--muted);
          text-transform: uppercase;
          white-space: nowrap;
          background: rgba(3, 3, 3, 0.9);
          padding: 5px 10px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: color 0.3s, border-color 0.3s, transform 0.3s;
          display: inline-block;
        }
        @media (max-width: 768px) {
          .planet-label {
            font-size: 0.58rem;
            padding: 4px 8px;
            letter-spacing: 0.1em;
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.25);
          }
        }
        .planet-badge:hover .planet-dot {
          transform: scale(1.4);
          background: var(--accent);
          box-shadow: 0 0 25px rgba(0, 119, 194, 1);
        }
        .planet-badge:hover .planet-label {
          color: #ffffff;
          border-color: var(--accent);
          transform: translateY(2px);
        }

        .gallery-screen {
          position: relative;
          height: 155vh; 
          width: 100vw;
          overflow: visible;
          z-index: 2;
          scroll-margin-top: 0px;
        }
        @media (max-width: 1024px) {
          .gallery-screen { height: 120vh; }
        }
        @media (max-width: 768px) {
          .gallery-screen { 
            height: auto; 
            padding: 4rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
        }

        .collage-container {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
        }
        @media (max-width: 768px) {
          .collage-container {
            position: relative;
            inset: auto;
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding-top: 220px;
          }
        }

        .collage-meta {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 30;
          pointer-events: none;
          width: 90%;
          max-width: 680px;
          background: rgba(3, 3, 3, 0.85);
          padding: 3.5rem;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }
        .meta-year { font-size: 1rem; font-weight: 700; letter-spacing: .25em; color: var(--accent); display: block; margin-bottom: .8rem; }
        .meta-title { 
          font-size: clamp(2rem, 4vw, 4.5rem); 
          font-weight: 900; 
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 1.2rem;
          text-transform: uppercase;
          text-shadow: 0 2px 20px rgba(0,0,0,0.9);
        }
        .meta-desc { font-size: .95rem; color: #cbd5e1; line-height: 1.7; font-weight: 300; }

        @media (max-width: 768px) {
          .collage-meta {
            top: 0;
            left: 0;
            transform: none;
            width: 100%;
            position: absolute;
            padding: 2rem 1.5rem;
          }
        }

        .collage-item {
          position: absolute;
          overflow: hidden;
          cursor: pointer;
          border-radius: 6px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s;
          filter: brightness(0.65) contrast(0.9) grayscale(0.2);
          box-shadow: 0 15px 45px rgba(0,0,0,0.9);
        }
        .collage-item:hover {
          transform: scale(1.05) rotate(0deg) !important;
          filter: brightness(1.05) contrast(1) grayscale(0);
          z-index: 40 !important;
          box-shadow: 0 25px 60px rgba(0, 119, 194, 0.25);
        }
        .collage-item img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; }

        @media (max-width: 768px) {
          .collage-item {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            width: 100% !important;
            height: 180px !important;
            transform: none !important;
            filter: none;
          }
        }

        #viewer {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(3, 3, 3, 0.96);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          display: none;
          user-select: none;
        }
        #viewer.active { display: block; }
        #viewer-track {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          will-change: transform;
        }
        :global(.viewer-slide) {
          transform-origin: center center;
          will-change: transform, opacity;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 40px 90px rgba(0,0,0,0.8);
          transition: scale 0.5s ease, opacity 0.5s ease;
        }
        :global(.viewer-slide img) { width: 100%; height: 100%; object-fit: cover; }
        
        :global(.viewer-slide-info) {
          position: absolute;
          bottom: 4rem; left: 5rem;
          z-index: 10;
          pointer-events: none;
        }
        :global(.viewer-slide-info .vi-event) { font-size: 2rem; font-weight: 900; letter-spacing: -0.01em; margin-bottom: .4rem; text-transform: uppercase; }
        :global(.viewer-slide-info .vi-year) { color: var(--accent); font-size: 1rem; font-weight: 700; letter-spacing: 0.1em; }
        
        @media (max-width: 768px) {
          :global(.viewer-slide-info) { bottom: 2rem; left: 1.5rem; }
          :global(.viewer-slide-info .vi-event) { font-size: 1.4rem; }
          :global(.viewer-slide-info .vi-year) { font-size: 0.85rem; }
        }

        #viewer-progress {
          position: absolute;
          bottom: 4rem; right: 5rem;
          font-size: 1.1rem; color: var(--muted); font-weight: 700;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          #viewer-progress { bottom: 2rem; right: 1.5rem; font-size: 0.95rem; }
        }
        #viewer-hint {
          position: absolute;
          top: 3rem; left: 50%;
          transform: translateX(-50%);
          font-size: .8rem; color: var(--muted); letter-spacing: .15em; text-transform: uppercase;
          opacity: 0.6;
          pointer-events: none;
          text-align: center;
          width: 90%;
        }
        @media (max-width: 768px) {
          #viewer-hint { top: 2rem; font-size: 0.7rem; }
        }
      `}</style>

      <canvas id="galaxy-canvas"></canvas>
      <div id="cursor" ref={cursorRef}></div>

      <nav>
        <div className="nav-brand">IEEE SSN</div>
        <div className="nav-links">
          <a href="#">Events</a>
          <a href="#" className="active">Archive Matrix</a>
        </div>
      </nav>

      <header id="hero-screen">
        <div className="hero-left" ref={systemRef}>
          <div className="solar-system">
            <div className="sun-core"></div>
            {events.map((ev) => (
              <div className="planet-wrapper" key={ev.id}>
                <div className="orbit-line"></div>
                <div className="planet-node">
                  <div 
                    className="planet-badge" 
                    onClick={() => handlePlanetClick(ev.id)}
                  >
                    <div className="planet-dot"></div>
                    <span className="planet-label">{ev.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <h1 className="hero-title">A cluster of<br /><em>quantum</em> memory</h1>
          <p className="hero-sub">Thru-scrolling our historic architecture index. Interact with the system matrix or select cards below to initiate cinematic glide paths.</p>
        </div>
      </header>

      <main id="stream" ref={streamRef}>
        {events.map((ev, ei) => (
          <section className="gallery-screen" id={ev.id} key={ev.id}>
            <div className="collage-container">
              
              <div className="collage-meta">
                <span className="meta-year">{ev.year}</span>
                <h2 className="meta-title">{ev.title}</h2>
                <p className="meta-desc">{ev.desc}</p>
              </div>

              {ev.images.map((img, ii) => {
                const pos = ev.positions[ii];
                return (
                  <div
                    key={ii}
                    className="collage-item"
                    data-event={ei}
                    data-index={ii}
                    style={{
                      top: pos.top,
                      left: pos.left,
                      width: pos.width,
                      height: pos.height,
                      transform: `rotate(${pos.rot}deg)`,
                      zIndex: ii + 1
                    }}
                  >
                    <img src={img.src} alt={img.label} loading="lazy" />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      <div id="viewer" ref={viewerRef}>
        <div id="viewer-track" ref={trackRef}></div>
        <div id="viewer-hint">Glide Wheel to Navigate · Click background space to Exit</div>
        <div id="viewer-progress" ref={progressRef}>1 / 12</div>
      </div>
    </>
  );
}