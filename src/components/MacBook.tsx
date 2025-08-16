import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MacBook() {
  const topModel = useGLTF(
    "/assets/Macbook_Top.glb"
  );
  const bottomModel = useGLTF(
    "/assets/Macbook_Bottom.glb"
  );
  const groupRef = useRef<THREE.Group>(null);
  const topRef = useRef<THREE.Mesh>(null);
  const bottomRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current || !topRef.current || !bottomRef.current) return;

    // First animation - opening the laptop
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        x: 0.0,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.rotation,
        {
          y: Math.PI - 0.4,
          ease: "power2.inOut",
        },
        ">"
      )
      .to(
        topRef.current.rotation,
        {
          x: Math.PI / 2 + 0.1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        groupRef.current.position,
        {
          x: 1.3,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        groupRef.current.scale,
        {
          x: 0.7,
          y: 0.7,
          z: 0.7,
          ease: "power2.inOut",
        },
        "<"
      );

    // Second animation - rotating and moving
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI + 0.4,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: -1.3,
          ease: "power2.inOut",
        },
        "<"
      );

    // Third animation - M4 chip showcase
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
        y: Math.PI * 1.5,
        z: 0.2,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: 0,
          y: -0.3,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        groupRef.current.scale,
        {
          x: 0.9,
          y: 0.9,
          z: 0.9,
          ease: "power2.inOut",
        },
        "<"
      );

    // Fourth animation - battery section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section4",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI * 2,
        z: 0,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: 1.5,
          y: -0.5,
          ease: "power2.inOut",
        },
        "<"
      );

    // Fifth animation - connectivity section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section5",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI * 2.5,
        x: -0.2,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: -1.5,
          y: -0.2,
          ease: "power2.inOut",
        },
        "<"
      );

    // Final animation - dramatic finish
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI * 3,
        x: 0.3,
        z: 0.1,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: 0,
          y: 0,
          z: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        groupRef.current.scale,
        {
          x: 1.2,
          y: 1.2,
          z: 1.2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        topRef.current.rotation,
        {
          x: Math.PI / 2 + 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.7, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={1.3}
    >
      <mesh ref={topRef}>
        <primitive object={topModel.nodes.Top} />
      </mesh>
      <mesh ref={bottomRef}>
        <primitive object={bottomModel.nodes.Bottom} />
      </mesh>
    </group>
  );
}
