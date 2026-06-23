"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  { id: 1, src: "./1.jpg", title: "Leadership Summit", year: "2024" },
  { id: 2, src: "./6.jpg", title: "Tech Symposium", year: "2024" },
  { id: 3, src: "./2.jpg", title: "Data Viz Workshop", year: "2024" },
  { id: 4, src: "./3.jpg", title: "Grand Conclave", year: "2023" },
  { id: 5, src: "./4.jpg", title: "Hack Summit", year: "2024" },
  { id: 6, src: "./5.jpg", title: "Team Meet", year: "2023" },
];

export default function CollageGallery() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    // Floating animation (subtle)
    gsap.to(".floating", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  }, []);

  const handleClick = (id) => {
    setActive(id);

    gsap.to(`#img-${id}`, {
      scale: 1.2,
      zIndex: 999,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(".image-item", {
      opacity: 0.3,
      duration: 0.3,
    });

    gsap.to(`#img-${id}`, {
      opacity: 1,
    });
  };

  const handleClose = () => {
    setActive(null);

    gsap.to(".image-item", {
      scale: 1,
      opacity: 1,
      zIndex: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full h-16 bg-[#f8f9fb]/80 backdrop-blur border-b border-[#e0e3e5] flex justify-between items-center px-8 z-50">
        <div className="font-semibold text-lg">IEEE SB</div>
        <div className="flex gap-6 text-sm text-[#414750]">
          <span>Home</span>
          <span>Events</span>
          <span className="text-[#004976] font-medium">Gallery</span>
          <span>About</span>
        </div>
      </nav>

      {/* LANDING */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-semibold mb-4">
          CHRONICLE
        </h1>
        <p className="max-w-xl text-[#414750] leading-relaxed">
          A visual archive of moments, people, and ideas —  
          captured across time at IEEE SB.
        </p>
      </section>

      {/* COLLAGE */}
      <section
        ref={containerRef}
        className="relative h-[120vh] w-full overflow-hidden"
      >
        {images.map((img, index) => {
          const randomTop = Math.random() * 70;
          const randomLeft = Math.random() * 70;
          const rotate = (Math.random() - 0.5) * 10;

          return (
            <div
              key={img.id}
              id={`img-${img.id}`}
              className="image-item floating absolute cursor-pointer"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                transform: `rotate(${rotate}deg)`,
              }}
              onClick={() => handleClick(img.id)}
            >
              <div className="bg-white p-2 rounded-md shadow-sm">
                <img
                  src={img.src}
                  className="w-48 h-auto object-cover rounded"
                />
              </div>

              {active === img.id && (
                <div className="mt-2 text-sm">
                  <p className="font-medium">{img.title}</p>
                  <p className="text-[#414750]">{img.year}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* CLICK OUTSIDE TO CLOSE */}
      {active && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-40"
        ></div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#e6f7fb] py-6 px-8 mt-20 flex justify-between text-sm">
        <div>IEEE SB SSN</div>
        <div className="flex gap-4">
          <span>LinkedIn</span>
          <span>Instagram</span>
        </div>
      </footer>
    </div>
  );
}