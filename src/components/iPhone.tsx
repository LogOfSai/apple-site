import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function iPhone() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section3",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: 0,
          y: 0,
          z: 0,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, 0]} scale={0.8}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 1.6, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.051]}>
        <boxGeometry args={[0.7, 1.4, 0.01]} />
        <meshStandardMaterial color="#000010" emissive="#001122" />
      </mesh>
      {/* Apple logo */}
      <mesh position={[0, 0, -0.051]}>
        <circleGeometry args={[0.08]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}
