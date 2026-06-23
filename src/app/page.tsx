"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GALLERY_ITEMS = [
  { title: "LEADERSHIP SUMMIT", year: "2024", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" },
  { title: "TECHNICAL SYMPOSIUM", year: "2024", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2000" },
  { title: "DATA VIZ WORKSHOP", year: "2024", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" },
  { title: "GRAND CONCLAVE", year: "2023", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000" },
  { title: "WINTER SCHOOL", year: "2023", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" },
  { title: "HACKATHON 3.0", year: "2023", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" },
  { title: "AI SYMPOSIUM", year: "2022", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000" },
  { title: "ROBOTICS EXPO", year: "2022", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" },
  { title: "TECH TALKS", year: "2022", img: "https://www.tech-talk.com/wp-content/uploads/2023/02/Leadership-quiet-people.png" },
  { title: "INNOVATION LAB", year: "2021", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" },
];

const COLLAGE_ITEMS = [
  { title: "HACKATHON 3.0", year: "2023", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" },
  { title: "AI SYMPOSIUM", year: "2022", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000" },
  { title: "ROBOTICS EXPO", year: "2022", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" },
  { title: "TECH TALKS", year: "2022", img: "https://www.tech-talk.com/wp-content/uploads/2023/02/Leadership-quiet-people.png" },
  { title: "INNOVATION LAB", year: "2021", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" },
  { title: "TEAM COLLABORATION", year: "2024", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
  { title: "WORKSHOP SESSIONS", year: "2024", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
  { title: "STAGE PRESENCE", year: "2023", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { title: "EVENT HIGHLIGHTS", year: "2023", img: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800" },
  { title: "THE COMMUNITY", year: "2023", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
];

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  
  const landingBgRef = useRef<HTMLDivElement>(null);
  const landingTextRef = useRef<HTMLDivElement>(null);
  const landingShapesRef = useRef<(HTMLDivElement | null)[]>([]);
  const landingSubtextLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // Gallery 1 Refs
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);
  const overlaysRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Gallery 2 Refs
  const gallerySectionRef2 = useRef<HTMLDivElement>(null);
  const stripRef2 = useRef<HTMLDivElement>(null);
  const progressRef2 = useRef<HTMLDivElement>(null);
  const panelsRef2 = useRef<(HTMLElement | null)[]>([]);
  const overlaysRef2 = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef2 = useRef<(HTMLDivElement | null)[]>([]);

  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Landing Animation
    gsap.from(landingSubtextLinesRef.current, {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    landingShapesRef.current.forEach((shape) => {
      if (!shape) return;
      gsap.to(shape, {
        x: "random(-150, 150)",
        y: "random(-150, 150)",
        rotation: "random(0, 360)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    gsap.to(landingTextRef.current, {
      y: -150,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: landingBgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(landingShapesRef.current, {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: landingBgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Helper for common logic between the two galleries
    const setupGallery = (
      sectionRef: React.RefObject<HTMLDivElement | null>,
      stripRef: React.RefObject<HTMLDivElement | null>,
      progressRef: React.RefObject<HTMLDivElement | null>,
      panelsRef: React.MutableRefObject<(HTMLElement | null)[]>,
      overlaysRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
      textsRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
      itemsCount: number,
      isReversed: boolean
    ) => {
      if (!stripRef.current || !sectionRef.current || !progressRef.current) return;

      const N = itemsCount;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${N * 800}`, 
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const isMobile = window.innerWidth <= 768;
            const maxExpandVw = isMobile ? 80 : 60;
            const minWidthPx = 30;

            panelsRef.current.forEach((panel, i) => {
              if (!panel) return;
              
              // In reversed mode, the last item peaks at progress 0, and the first at progress 1
              const peak = isReversed ? (N - 1 - i) / (N - 1) : i / (N - 1);
              
              const dist = Math.abs(progress - peak);
              const threshold = 1 / (N - 1);
              let factor = 1 - (dist / threshold);
              if (factor < 0) factor = 0;

              const easedFactor = gsap.parseEase("power2.out")(factor);
              const vwInPx = window.innerWidth * (maxExpandVw / 100);
              
              const newWidth = minWidthPx + factor * (vwInPx - minWidthPx);
              
              gsap.set(panel, { 
                width: newWidth,
                boxShadow: `0 0 ${20 * easedFactor}px rgba(0, 98, 155, ${easedFactor * 0.4})`
              });

              if (overlaysRef.current[i] && textsRef.current[i]) {
                gsap.set(overlaysRef.current[i], { opacity: easedFactor });
                gsap.set(textsRef.current[i], { opacity: easedFactor, y: 20 * (1 - easedFactor) });
              }
            });
          }
        }
      });

      const getXOffsets = () => {
        const isMobile = window.innerWidth <= 768;
        const maxExpandPx = window.innerWidth * (isMobile ? 0.8 : 0.6);
        const minWidthPx = 30;
        const gapPx = 32; 
        const wTotal = N * minWidthPx + (maxExpandPx - minWidthPx) + (N - 1) * gapPx;

        const leftAlignedX = -maxExpandPx / 2;
        const rightAlignedX = -wTotal + maxExpandPx / 2;
        
        return { leftAlignedX, rightAlignedX };
      };

      tl.fromTo(stripRef.current, 
        {
          x: () => {
            const { leftAlignedX, rightAlignedX } = getXOffsets();
            return isReversed ? rightAlignedX : leftAlignedX;
          }
        },
        {
          x: () => {
            const { leftAlignedX, rightAlignedX } = getXOffsets();
            return isReversed ? leftAlignedX : rightAlignedX;
          },
          ease: "none",
        }
      );

      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${N * 800}`,
          scrub: true,
        }
      });
    };

    // 2. Setup Gallery 1 (Left to Right View motion / Strip moves Left)
    setupGallery(
      gallerySectionRef, stripRef, progressRef, panelsRef, overlaysRef, textsRef, GALLERY_ITEMS.length, false
    );

    // 3. Setup Gallery 2 (Right to Left View motion / Strip moves Right)
    setupGallery(
      gallerySectionRef2, stripRef2, progressRef2, panelsRef2, overlaysRef2, textsRef2, COLLAGE_ITEMS.length, true
    );

    // 4. Footer Reveal
    gsap.to(footerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      }
    });

  }, { scope: mainRef });

  return (
    <div className={styles.main} ref={mainRef}>
      
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>IEEE SB</div>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
        </div>
      </nav>

      <section className={styles.landing} ref={landingBgRef}>
        <div className={styles.floatingShape} style={{ width: 300, height: 300, top: "20%", left: "10%", background: "var(--primary-blue)" }} ref={el => {landingShapesRef.current[0] = el}}></div>
        <div className={styles.floatingShape} style={{ width: 400, height: 400, bottom: "10%", right: "15%", background: "var(--accent-blue)" }} ref={el => {landingShapesRef.current[1] = el}}></div>
        <div className={styles.floatingShape} style={{ width: 250, height: 250, top: "40%", left: "50%", background: "#a8d8ea" }} ref={el => {landingShapesRef.current[2] = el}}></div>

        <div className={styles.landingContent} ref={landingTextRef}>
          <h1>PROOF THAT <span className={styles.highlight}>INNOVATION</span> HAPPENED</h1>
          <p className={styles.landingSubtext}>
            <span className={styles.landingSubtextLine} ref={el => {landingSubtextLinesRef.current[0] = el}}>Documenting moments of precision,</span>
            <span className={styles.landingSubtextLine} ref={el => {landingSubtextLinesRef.current[1] = el}}>engineering breakthroughs, and</span>
            <span className={styles.landingSubtextLine} ref={el => {landingSubtextLinesRef.current[2] = el}}>the evolution of ideas at IEEE SB.</span>
          </p>
        </div>
      </section>

      {/* Primary Gallery - Moves Left */}
      <section className={styles.gallerySection} ref={gallerySectionRef}>
        <div className={styles.gallerySticky}>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineProgress} ref={progressRef}></div>
          </div>

          <div className={styles.galleryStrip} ref={stripRef}>
            {GALLERY_ITEMS.map((item, index) => (
              <article
                key={index}
                className={styles.imagePanel}
                ref={(el) => {
                  panelsRef.current[index] = el;
                }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div
                  className={styles.imageOverlay}
                  ref={(el) => {
                    overlaysRef.current[index] = el;
                  }}
                ></div>
                <div
                  className={styles.imageText}
                  ref={(el) => {
                    textsRef.current[index] = el;
                  }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Gallery - Moves Right (Reversed) */}
      <section className={styles.gallerySection} ref={gallerySectionRef2}>
        <div className={styles.gallerySticky}>
          {/* Timeline stays on the left */}
          <div className={styles.timelineContainer}>
            <div className={styles.timelineProgress} ref={progressRef2}></div>
          </div>

          <div className={styles.galleryStrip} ref={stripRef2}>
            {COLLAGE_ITEMS.map((item, index) => (
              <article
                key={index}
                className={styles.imagePanel}
                ref={(el) => {
                  panelsRef2.current[index] = el;
                }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div
                  className={styles.imageOverlay}
                  ref={(el) => {
                    overlaysRef2.current[index] = el;
                  }}
                ></div>
                <div
                  className={styles.imageText}
                  ref={(el) => {
                    textsRef2.current[index] = el;
                  }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer} ref={footerRef}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>IEEE SB SSN</div>
          <div className={styles.footerLinks}>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2026 IEEE SB SSN
        </div>
      </footer>
      
    </div>
  );
}
