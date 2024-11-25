"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MacBook({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const bottomModel = useGLTF(
    "/nextjs-3d-scroll-animations/assets/Macbook_Bottom.glb"
  );
  const topModel = useGLTF(
    "/nextjs-3d-scroll-animations/assets/Macbook_Top.glb"
  );
  const topRef = useRef<THREE.Mesh>(null);
  const bottomRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (!topRef.current || !bottomRef.current || !groupRef.current) return;

    // Second section: Open up and show the screen
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(
        groupRef.current.position,
        {
          x: viewport.width / 4,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        groupRef.current.rotation,
        {
          x: -Math.PI,
          y: 0.5,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        groupRef.current.scale,
        {
          x: 0.6,
          y: 0.6,
          z: 0.6,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        topRef.current.rotation,
        {
          x: Math.PI / 2 + 0.1,
          ease: "power2.inOut",
        },
        ">"
      );

    // Third section: Rotate to the left
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
        y: -Math.PI / 4,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: -viewport.width / 4,
          ease: "power2.inOut",
        },
        "<"
      );
  }, [viewport.width]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(scrollY.current * 0.002) * 0.2 - 1.0;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={1.4}
      rotation={[-Math.PI / 2.0 - 0.3, Math.PI, Math.PI]}
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
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    const text3 = document.getElementById("text-3");

    console.log(text1);

    if (!text1 || !text2 || !text3) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "50% bottom",
          scrub: true,
        },
      })
      .to(text1, {
        opacity: 0,
        ease: "power2.inOut",
      });

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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(
        text3,
        {
          opacity: 1,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <directionalLight intensity={4.0} position={[0, 0, 5]} />
        <directionalLight intensity={4.0} position={[0, 5, 0]} />
        <directionalLight intensity={2.0} position={[5, 0, 0]} />
        <MacBook scrollY={scrollY} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ContactShadows
          opacity={0.1}
          position={[0, 0, 0]}
          scale={10}
          blur={1.0}
          far={10}
          resolution={1024}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
