"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { MacBook } from "./MacBook";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactShadows } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
  useEffect(() => {
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    const text3 = document.getElementById("text-3");
    const text4 = document.getElementById("text-4");
    const text5 = document.getElementById("text-5");
    const text6 = document.getElementById("text-6");
    const text7 = document.getElementById("text-7");

    if (!text1 || !text2 || !text3 || !text4 || !text5 || !text6 || !text7) return;

    // Hide text1 when scrolling to section1
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "10% bottom",
          scrub: true,
        },
      })
      .to(text1, {
        opacity: 0,
        ease: "power2.inOut",
      });

    // Show text2 for section1
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text2, {
        opacity: 1,
        ease: "power2.inOut",
      });

    // Show text3 for section2
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text3, {
        opacity: 1,
        ease: "power2.inOut",
      });

    // Show text4 for section3
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section3",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text4, {
        opacity: 1,
        ease: "power2.inOut",
      });

    // Show text5 for section4
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section4",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text5, {
        opacity: 1,
        ease: "power2.inOut",
      });

    // Show text6 for section5
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section5",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text6, {
        opacity: 1,
        ease: "power2.inOut",
      });

    // Show text7 for section6 (final section)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text7, {
        opacity: 1,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <directionalLight intensity={5} position={[1, 3, 3]} />
        <MacBook />
        <ContactShadows opacity={0.3} position={[0, -0.9, 0]} />
      </Canvas>
    </div>
  );
}
