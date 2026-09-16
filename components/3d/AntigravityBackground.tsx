'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AntigravityBackgroundProps {
  isDark?: boolean;
}

// Minimalist Wireframe Tech Node
function MinimalTechNode({
  position,
  scale = 0.5,
  speed = 0.6,
  offset = 0,
  isDark = true,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  offset?: number;
  isDark?: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const basePos = useRef(position);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;

    // Gentle upward & sinusoidal floating
    meshRef.current.position.y = basePos.current[1] + Math.sin(t) * 0.18;
    meshRef.current.position.x = basePos.current[0] + Math.cos(t * 0.7) * 0.08;

    // Slow tranquil rotation
    meshRef.current.rotation.x += 0.003 * speed;
    meshRef.current.rotation.y += 0.005 * speed;
  });

  const primaryColor = isDark ? '#00f2fe' : '#0284c7';

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh>
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial
          color={primaryColor}
          wireframe
          transparent
          opacity={isDark ? 0.35 : 0.25}
        />
      </mesh>
      {/* Inner subtle core */}
      <mesh scale={0.35}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial
          color={isDark ? '#4facfe' : '#38bdf8'}
          transparent
          opacity={isDark ? 0.6 : 0.4}
        />
      </mesh>
    </group>
  );
}

// Sparse Antigravity Particle Field with Upward Drift
function SparseAntigravityParticles({ isDark = true }: { isDark?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 380;

  // Initialize sparse positions with custom vertical drift velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6; // Z
      vel[i] = 0.003 + Math.random() * 0.006; // Slow vertical upward drift speed
    }

    return [pos, vel];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Antigravity slow upward drift
      array[i * 3 + 1] += velocities[i];

      // Seamless reset when drifting past top threshold
      if (array[i * 3 + 1] > 5) {
        array[i * 3 + 1] = -5;
        array[i * 3] = (Math.random() - 0.5) * 12;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? '#00f2fe' : '#0284c7'}
        size={isDark ? 0.032 : 0.028}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.55 : 0.4}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </Points>
  );
}

// Clean Minimal Antigravity Scene
export default function AntigravityBackground({ isDark = true }: AntigravityBackgroundProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle mouse-parallax interaction
  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer; // -1 to 1

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.08,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.06,
      0.03
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      x * 0.15,
      0.03
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      y * 0.12,
      0.03
    );
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.7} />
      <pointLight position={[-4, 3, 2]} color="#00f2fe" intensity={isDark ? 1.5 : 0.8} distance={12} />
      <pointLight position={[4, -3, 2]} color="#4facfe" intensity={isDark ? 1.5 : 0.8} distance={12} />

      <group ref={groupRef}>
        {/* Sparse Minimalist Floating Tech Nodes */}
        <MinimalTechNode
          position={[-3.8, 1.6, -1.5]}
          scale={0.5}
          speed={0.5}
          offset={0}
          isDark={isDark}
        />
        <MinimalTechNode
          position={[3.9, 1.8, -1.8]}
          scale={0.45}
          speed={0.55}
          offset={2}
          isDark={isDark}
        />
        <MinimalTechNode
          position={[-3.6, -1.8, -1.2]}
          scale={0.4}
          speed={0.45}
          offset={3.5}
          isDark={isDark}
        />
        <MinimalTechNode
          position={[3.7, -1.5, -1.0]}
          scale={0.48}
          speed={0.6}
          offset={1.2}
          isDark={isDark}
        />

        {/* Sparse Antigravity Particle Field */}
        <SparseAntigravityParticles isDark={isDark} />
      </group>
    </>
  );
}
