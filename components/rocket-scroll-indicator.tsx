"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RocketModel({ scrollDirection }: { scrollDirection: "up" | "down" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      const animate = () => {
        if (meshRef.current) {
          // Rotate rocket based on scroll direction
          const targetRotationX = scrollDirection === "down" ? Math.PI : 0;
          meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1;
          meshRef.current.rotation.y += 0.01;
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [scrollDirection]);

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[0.5, 2, 32]} />
      <meshStandardMaterial
        color={0x3b82f6}
        metalness={0.8}
        roughness={0.2}
        emissive={0x1e40af}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function RocketScrollIndicator() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      setLastScrollY(currentScrollY);
      
      if (containerRef.current) {
        containerRef.current.style.top = `${Math.min(
          Math.max(20, currentScrollY + window.innerHeight / 2),
          document.body.scrollHeight - window.innerHeight - 100
        )}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      ref={containerRef} 
      className="fixed right-4 w-16 h-16 z-50 transition-all duration-300 ease-out"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        <RocketModel scrollDirection={scrollDirection} />
      </Canvas>
    </div>
  );
}