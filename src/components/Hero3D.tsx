"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function FloatingAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float floatIntensity={1.2} speed={1.5} rotationIntensity={0.8}>
      <mesh ref={meshRef}>
        <primitive object={new THREE.IcosahedronGeometry(1, 3)} />
        <MeshDistortMaterial
          color="#0a0a0a"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={1}
          roughness={0.2}
          wireframe={true}
          emissive="#C6FF00"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none sm:pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: isMobile ? 60 : 45 }} 
        gl={{ alpha: true }}
        className="w-full h-full"
        // Adjust performance for mobile
        frameloop={isMobile ? "raf" : "always"}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#C6FF00" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        
        <FloatingAvatar />
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
    </div>
  );
}