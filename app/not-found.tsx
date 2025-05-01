"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import * as THREE from "three";
import { ArrowLeft } from "lucide-react";

function RocketModel() {
  const groupRef = useRef<THREE.Group>(null);
  const mtl = useLoader(MTLLoader, "/model/12217_rocket_v1_l1.mtl");
  const obj = useLoader(OBJLoader, "/model/12217_rocket_v1_l1.obj", (loader) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return (
    <group 
      ref={groupRef} 
      scale={[0.007, 0.007, 0.007]} 
      position={[0, -0.1, 0]} 
      rotation={[0, Math.PI / 2, 0]} // Horizontal orientation
    >
      <primitive object={obj} />
    </group>
  );
}

function RocketScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ 
        width: "100%", 
        height: "100px",
        background: "transparent",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      <RocketModel />
    </Canvas>
  );
}

export default function NotFound() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);
  const [rocketPosition, setRocketPosition] = useState("-100%");
  
  useEffect(() => {
    // Create random stars
    const newStars = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(newStars);
    
    // Animate rocket to stop under 404
    setTimeout(() => {
      setRocketPosition("0%");
    }, 500);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="container-custom relative z-20 flex flex-col items-center text-center pt-10">
        <div className="relative mb-4">
          {/* Enhanced 404 text with better animation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {['4', '0', '4'].map((digit, index) => (
              <motion.span
                key={index}
                className="inline-block text-9xl md:text-[12rem] font-bold"
                style={{
                  background: 'linear-gradient(to bottom, #60a5fa, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
                initial={{ 
                  y: -100, 
                  opacity: 0,
                  rotateY: 90
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  rotateY: 0
                }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {digit}
              </motion.span>
            ))}
          </motion.div>
        </div>
          
        {/* Rocket right below 404 */}
        <motion.div
          className="w-full h-20 mb-12" // Smaller gap to 404, larger gap to text below
          initial={{ x: "-100%" }}
          animate={{ x: rocketPosition }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 50,
            damping: 10
          }}
        >
          <RocketScene />
        </motion.div>
        
        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Houston, we have a problem!
          </h2>
          
          <p className="text-slate-300 max-w-md mx-auto mb-8">
            The page you're looking for has been lost in space. Our astronauts are working on finding it.
          </p>
          
          <Link 
            href="/"
            className="space-button inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Return to Mission Control</span>
          </Link>
        </motion.div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
    </div>
  );
} 