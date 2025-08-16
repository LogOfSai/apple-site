import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AirPods() {
  const groupRef = useRef<THREE.Group>(null);
  const leftPodRef = useRef<THREE.Mesh>(null);
  const rightPodRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section4",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.position, {
        x: -2,
        y: 0.5,
        z: 0,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.rotation,
        {
          x: Math.PI / 4,
          y: Math.PI / 6,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useFrame((state) => {
    if (leftPodRef.current && rightPodRef.current) {
      leftPodRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
      rightPodRef.current.rotation.z = -Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]} scale={0.6}>
      {/* Case */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.8, 1.2]} />
        <meshStandardMaterial color="#f8f8f8" metalness={0.1} roughness={0.1} />
      </mesh>
      
      {/* Left AirPod */}
      <mesh ref={leftPodRef} position={[-0.4, 0.5, 0]}>
        <capsuleGeometry args={[0.15, 0.8]} />
        <meshStandardMaterial color="#f8f8f8" metalness={0.1} roughness={0.1} />
      </mesh>
      
      {/* Right AirPod */}
      <mesh ref={rightPodRef} position={[0.4, 0.5, 0]}>
        <capsuleGeometry args={[0.15, 0.8]} />
        <meshStandardMaterial color="#f8f8f8" metalness={0.1} roughness={0.1} />
      </mesh>
    </group>
  );
}
