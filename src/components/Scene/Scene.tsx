"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const { nodes } = useGLTF("/assets/Duck.glb");
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (!meshRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(meshRef.current.position, {
        x: viewport.width / 4,
        ease: "power2.inOut",
      })
      .to(
        meshRef.current.rotation,
        {
          y: Math.PI / 2,
          ease: "power2.inOut",
        },
        "<"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(meshRef.current.position, {
        x: -viewport.width / 4,
        ease: "power2.inOut",
      })
      .to(
        meshRef.current.rotation,
        {
          y: -Math.PI / 2,
          ease: "power2.inOut",
        },
        "<"
      );
  }, [viewport.width]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y =
        0.3 + Math.sin(scrollY.current * 0.002) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={0.007} rotation={[0, -2.5, 0]}>
      <primitive object={nodes.LOD3spShape} />
    </mesh>
  );
}

export default function Scene() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.utils
      .toArray<HTMLElement>(["#section1 > div", "#section2 > div"])
      .forEach((section, i) => {
        gsap.fromTo(
          section,
          { x: i % 2 === 0 ? 100 : -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={2.0} position={[5, 5, 5]} />
        <Model scrollY={scrollY} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ContactShadows
          opacity={0.3}
          scale={100}
          blur={0.2}
          far={10}
          resolution={1024}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
