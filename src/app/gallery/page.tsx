"use client";

import { useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./gallery.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────
   DATA  —  14 images across 4 rows (Controlled Chaos)
───────────────────────────────────────────── */
interface CollageItem {
  id: number;
  title: string;
  year: string;
  description: string;
  img: string;
  size: "small" | "medium" | "large";
  offsetX: number;
  offsetY: number;
  rotation: number;
  zIndex: number;
  depthScale: number;
  floats?: boolean;
}

const COLLAGE_ITEMS: CollageItem[] = [
  /* ── ROW 1 (3 items) ── */
  {
    id: 0, title: "LEADERSHIP SUMMIT", year: "2024",
    description: "An intensive summit shaping the next generation of IEEE leaders through real-world challenges, mentorship sessions, and collaborative problem-solving.",
    img: "./1.jpg",
    size: "large", offsetX: 10, offsetY: -10, rotation: -3, zIndex: 3, depthScale: 1.0, floats: true,
  },
  {
    id: 1, title: "TECHNICAL SYMPOSIUM", year: "2024",
    description: "Cutting-edge presentations and workshops exploring the forefront of engineering and technology across all disciplines.",
    img: "./2.jpg",
    size: "medium", offsetX: -15, offsetY: 15, rotation: 4, zIndex: 2, depthScale: 0.98,
  },
  {
    id: 2, title: "DATA VIZ WORKSHOP", year: "2024",
    description: "Hands-on exploration of data storytelling using industry-leading tools, real-world datasets, and guided sessions with practitioners.",
    img: "./3.jpg",
    size: "small", offsetX: -10, offsetY: 0, rotation: -2, zIndex: 4, depthScale: 1.0,
  },

  /* ── ROW 2 (4 items) ── */
  {
    id: 3, title: "GRAND CONCLAVE", year: "2023",
    description: "A landmark event uniting IEEE chapters across the region for two unforgettable days of collaboration, competition, and celebration.",
    img: "./4.jpg",
    size: "small", offsetX: 15, offsetY: 10, rotation: 3, zIndex: 2, depthScale: 0.96,
  },
  {
    id: 4, title: "AI BOOTCAMP", year: "2024",
    description: "A comprehensive bootcamp diving into neural networks, machine learning models, and practical AI applications.",
    img: "./5.jpg",
    size: "medium", offsetX: -5, offsetY: -15, rotation: -4, zIndex: 3, depthScale: 0.98,
  },
  {
    id: 5, title: "HACKATHON FINALS", year: "2024",
    description: "36 hours of relentless coding, caffeine, and creativity as top teams battled it out for the grand prize.",
    img: "./6.jpg",
    size: "large", offsetX: -20, offsetY: 5, rotation: 2, zIndex: 5, depthScale: 1.0, floats: true,
  },
  {
    id: 6, title: "ROBOTICS EXPO", year: "2023",
    description: "Showcasing autonomous robots and innovative hardware solutions built by student members over the semester.",
    img: "./7.jpg",
    size: "small", offsetX: -10, offsetY: -5, rotation: -3, zIndex: 2, depthScale: 0.95,
  },

  /* ── ROW 3 (3 items) ── */
  {
    id: 7, title: "NETWORKING MIXER", year: "2024",
    description: "Connecting students with alumni and industry professionals in an informal, engaging atmosphere.",
    img: "./8.jpg",
    size: "medium", offsetX: 10, offsetY: 12, rotation: 5, zIndex: 3, depthScale: 0.97,
  },
  {
    id: 8, title: "KEYNOTE ADDRESS", year: "2023",
    description: "An inspiring talk by industry veterans on the future of technology and the evolving role of engineers.",
    img: "./9.jpg",
    size: "large", offsetX: -15, offsetY: -8, rotation: -2, zIndex: 4, depthScale: 1.0, floats: true,
  },
  {
    id: 9, title: "TECH TALK SERIES", year: "2024",
    description: "Deep dive sessions into cloud computing architecture and scalable system design.",
    img: "./10.jpg",
    size: "medium", offsetX: -10, offsetY: 15, rotation: 4, zIndex: 2, depthScale: 0.96,
  },

  // /* ── ROW 4 (4 items) ── */
  // {
  //   id: 10, title: "WOMEN IN TECH", year: "2024",
  //   description: "Celebrating achievements and discussing opportunities for women in engineering and technology fields.",
  //   img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900",
  //   size: "small", offsetX: 5, offsetY: -10, rotation: -4, zIndex: 2, depthScale: 0.94,
  // },
  // {
  //   id: 11, title: "OPEN SOURCE DAY", year: "2024",
  //   description: "A collaborative session focused on contributing to major open-source projects and learning version control best practices.",
  //   img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
  //   size: "small", offsetX: -5, offsetY: 10, rotation: 3, zIndex: 3, depthScale: 0.97,
  // },
  // {
  //   id: 12, title: "IDEATHON", year: "2023",
  //   description: "Brainstorming and pitching innovative solutions for sustainable tech and green energy initiatives.",
  //   img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900",
  //   size: "medium", offsetX: -15, offsetY: -5, rotation: -2, zIndex: 4, depthScale: 1.0,
  // },
  // {
  //   id: 13, title: "AWARDS NIGHT", year: "2024",
  //   description: "Honoring outstanding contributions and recognizing the hard work of committee members throughout the year.",
  //   img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=900",
  //   size: "large", offsetX: -20, offsetY: 12, rotation: 5, zIndex: 5, depthScale: 1.0,
  // },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function GalleryPage() {
  const pageRef         = useRef<HTMLDivElement>(null);
  const heroRef         = useRef<HTMLElement>(null);
  const heroContentRef  = useRef<HTMLDivElement>(null);
  const collageRef      = useRef<HTMLDivElement>(null);
  const cardRefs        = useRef<(HTMLDivElement | null)[]>([]);
  const backdropRef     = useRef<HTMLDivElement>(null);
  const expandedViewRef = useRef<HTMLDivElement>(null);
  const footerRef       = useRef<HTMLElement>(null);
  const isExpandedRef   = useRef(false);

  const [selectedItem, setSelectedItem] = useState<CollageItem | null>(null);

  /* ── GSAP SETUP ── */
  useGSAP(() => {
    /* 1 ▸ Hero entrance */
    gsap.fromTo(heroContentRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    /* 2 ▸ Hero scroll-out  ← Scrub makes it REVERSE on scroll-up */
    gsap.fromTo(heroContentRef.current,
      { opacity: 1, y: 0 },
      {
        y: -80, opacity: 0, ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1.5,
        },
      }
    );

    /* 3 ▸ Card initial transforms + float loops */
    COLLAGE_ITEMS.forEach((item, i) => {
      const card = cardRefs.current[i];
      if (!card) return;

      gsap.set(card, {
        x: item.offsetX,
        y: item.offsetY,
        rotation: item.rotation,
        scale: item.depthScale,
        zIndex: item.zIndex,
        transformOrigin: "center center",
      });

      if (item.floats) {
        gsap.to(card, {
          y: item.offsetY + (gsap.utils.random(-8, 8, 1) as number),
          duration: gsap.utils.random(2.5, 4.0) as number,
          delay:    gsap.utils.random(0, 2.0) as number,
          repeat: -1, yoyo: true, ease: "sine.inOut",
        });
      }
    });

    /* 4 ▸ Centre expanded view via GSAP */
    gsap.set(expandedViewRef.current, { xPercent: -50, yPercent: -50 });

    /* 5 ▸ Collage subtle parallax */
    gsap.to(collageRef.current, {
      y: -40, ease: "none",
      scrollTrigger: {
        trigger: collageRef.current,
        start: "top bottom", end: "bottom top", scrub: true,
      },
    });

    /* 6 ▸ Footer fade-in */
    gsap.set(footerRef.current, { opacity: 0, y: 40 });
    gsap.to(footerRef.current, {
      opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: pageRef });

  /* ── HOVER LISTENERS ── */
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    COLLAGE_ITEMS.forEach((item, i) => {
      const card = cardRefs.current[i];
      if (!card) return;

      const onEnter = () => {
        if (isExpandedRef.current) return;
        gsap.to(card, {
          scale: item.depthScale + 0.06, 
          y: item.offsetY - 4,
          duration: 0.3, ease: "power2.out", overwrite: "auto",
          zIndex: 20,
        });
      };
      const onLeave = () => {
        if (isExpandedRef.current) return;
        gsap.to(card, {
          scale: item.depthScale,
          y: item.offsetY, 
          duration: 0.45, ease: "power2.out", overwrite: "auto",
          zIndex: item.zIndex,
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* ── INTERACTIONS ── */
  const handleCardClick = (item: CollageItem) => {
    if (isExpandedRef.current) return;
    isExpandedRef.current = true;

    flushSync(() => setSelectedItem(item));

    const tl = gsap.timeline();
    
    // 1. Background dims + blur
    gsap.set(backdropRef.current, { pointerEvents: "auto" });
    tl.fromTo(backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    
    // 2. Collage slightly zooms out and blurs
    tl.to(collageRef.current, {
      scale: 0.95, filter: "blur(4px)", duration: 0.5, ease: "power2.out"
    }, "<");

    // Glow fades in
    const glow = document.getElementById("expanded-glow");
    if (glow) {
        tl.fromTo(glow, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "<");
    }

    // 3. Image expands to center with scale bounce (0.95 -> 1.02 -> 1.0)
    gsap.set(expandedViewRef.current, { pointerEvents: "auto" });
    tl.fromTo(expandedViewRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1.02, duration: 0.4, ease: "power2.out" },
      "-=0.3"
    ).to(expandedViewRef.current, {
      scale: 1, duration: 0.25, ease: "bounce.out"
    });

    // 4. Content panel fades in, upward motion
    const panel = document.getElementById("expanded-panel");
    if (panel) {
      tl.fromTo(panel, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.1"
      );
    }

    // 5. Close button appears
    const closeBtn = document.getElementById("gallery-close-btn");
    if (closeBtn) {
      tl.fromTo(closeBtn,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" },
        "-=0.2"
      );
    }
  };

  const handleClose = () => {
    if (!isExpandedRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(backdropRef.current,     { pointerEvents: "none" });
        gsap.set(expandedViewRef.current, { pointerEvents: "none" });
        isExpandedRef.current = false;
        setSelectedItem(null);
      }
    });

    // Fade out panel and close button
    tl.to(["#expanded-panel", "#gallery-close-btn"], {
      opacity: 0, scale: 0.9, y: 10, duration: 0.2, ease: "power2.in"
    });

    // Image scale down and fade out
    tl.to(expandedViewRef.current, {
      opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.in"
    }, "<");

    tl.to("#expanded-glow", { opacity: 0, duration: 0.3 }, "<");

    // Restore collage and backdrop
    tl.to(collageRef.current, {
      scale: 1, filter: "blur(0px)", duration: 0.4, ease: "power2.out"
    }, "-=0.1");

    tl.to(backdropRef.current, {
      opacity: 0, duration: 0.4, ease: "power2.out"
    }, "<");
  };

  /* ── RENDER ── */
  return (
    <div className={styles.page} ref={pageRef}>

      {/* ══════════ NAVBAR ══════════ */}
      <nav className={styles.navbar}>
        <a href="/" className={styles.navLogo}>IEEE SB</a>
        <div className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="#">Events</a>
          <a href="/gallery" className={styles.navActive}>Gallery</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent} ref={heroContentRef}>
          <p className={styles.heroEyebrow}>IEEE SB SSN</p>
          <h1 className={styles.heroTitle}>CHRONICLE</h1>
          <p className={styles.heroSubtext}>
            A living archive of innovation,<br />
            capturing moments, people, and ideas<br />
            that shaped IEEE SB.
          </p>
          <div className={styles.scrollCue}>
            {/* <span className={styles.scrollText}>Scroll to explore</span> */}
            <div className={styles.scrollLine} />
          </div>
        </div>
      </section>

      {/* ══════════ COLLAGE ══════════ */}
      <section className={styles.collageSection}>
        <div className={styles.collageWrapper}>
          <div className={styles.collageContainer} ref={collageRef}>
            {COLLAGE_ITEMS.map((item, index) => (
              <div
                key={item.id}
                id={`photo-card-${item.id}`}
                className={`${styles.photoCard} ${styles[item.size]}`}
                ref={(el) => { cardRefs.current[index] = el; }}
                onClick={() => handleCardClick(item)}
              >
                <div className={styles.photoFrame}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className={styles.photoImg}
                  />
                  <div className={styles.photoCaption}>
                    <span className={styles.captionTitle}>{item.title}</span>
                    <span className={styles.captionYear}>{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BACKDROP ══════════ */}
      <div
        className={styles.backdrop}
        ref={backdropRef}
        onClick={handleClose}
      />

      {/* ══════════ EXPANDED VIEW ══════════ */}
      <div className={styles.expandedView} ref={expandedViewRef}>
        <div id="expanded-glow" className={styles.expandedGlow} />
        
        {selectedItem && (
          <div className={styles.expandedContainer}>
            {/* Close button */}
            <button
              id="gallery-close-btn"
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close expanded image"
            >
              ✕
            </button>

            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className={styles.expandedImg}
            />

            {/* Floating Glass Info Panel */}
            <div id="expanded-panel" className={styles.expandedInfoPanel}>
              <div className={styles.expandedInfoRow}>
                <div className={styles.infoBadge}>{selectedItem.year}</div>
                <h2 className={styles.infoTitle}>{selectedItem.title}</h2>
              </div>
              <div className={styles.panelDivider} />
              <p className={styles.infoDesc}>{selectedItem.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* ══════════ FOOTER ══════════ */}
      <footer className={styles.footer} ref={footerRef}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>IEEE SB SSN</div>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>LinkedIn</a>
            <a href="#" className={styles.footerLink}>Instagram</a>
          </div>
        </div>
        <div className={styles.footerBottom}>© 2026 IEEE SB SSN</div>
      </footer>

    </div>
  );
}
