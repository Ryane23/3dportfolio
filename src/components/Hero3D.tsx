"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float floatIntensity={2} speed={1.5} rotationIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 3]} />
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
  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#C6FF00" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        
        <FloatingAvatar />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
