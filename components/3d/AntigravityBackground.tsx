'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AntigravityBackgroundProps {
  isDark?: boolean;
}

// Subtle Floating Bubbles & Soft Stars Field
function FloatingBubblesAndStars({ isDark = true }: { isDark?: boolean }) {
  const bubblesRef = useRef<THREE.Points>(null);
  const starsRef = useRef<THREE.Points>(null);

  // 160 Soft Floating Bubbles
  const bubbleCount = 160;
  const [bubblePositions, bubbleVelocities] = useMemo(() => {
    const pos = new Float32Array(bubbleCount * 3);
    const vel = new Float32Array(bubbleCount);

    for (let i = 0; i < bubbleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;     // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;  // Z
      vel[i] = 0.002 + Math.random() * 0.004;      // Gentle upward floating speed
    }

    return [pos, vel];
  }, [bubbleCount]);

  // 240 Distant Soft Stars
  const starCount = 240;
  const starPositions = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = -2 - Math.random() * 6; // Background depth
    }
    return pos;
  }, [starCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Floating bubbles animation
    if (bubblesRef.current) {
      const posAttr = bubblesRef.current.geometry.attributes.position;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < bubbleCount; i++) {
        // Slow vertical antigravity floating
        array[i * 3 + 1] += bubbleVelocities[i];
        // Subtle lateral sinusoidal sway
        array[i * 3] += Math.sin(time * 0.5 + i) * 0.0008;

        // Seamless wrap when drifting past top threshold
        if (array[i * 3 + 1] > 6) {
          array[i * 3 + 1] = -6;
          array[i * 3] = (Math.random() - 0.5) * 16;
        }
      }

      posAttr.needsUpdate = true;
    }

    // Stars gentle slow drift
    if (starsRef.current) {
      starsRef.current.rotation.y = time * 0.008;
      starsRef.current.rotation.x = time * 0.004;
    }
  });

  return (
    <>
      {/* Soft Ambient Stars */}
      <Points ref={starsRef} positions={starPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#e2e8f0' : '#94a3b8'}
          size={isDark ? 0.024 : 0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.45 : 0.35}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>

      {/* Floating Luminous Bubbles */}
      <Points ref={bubblesRef} positions={bubblePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#38bdf8' : '#0284c7'}
          size={isDark ? 0.045 : 0.038}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.65 : 0.45}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </Points>
    </>
  );
}

// Clean Minimal Hero Background Scene
export default function AntigravityBackground({ isDark = true }: AntigravityBackgroundProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle mouse-parallax interaction
  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer; // -1 to 1

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.05,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.04,
      0.03
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      x * 0.12,
      0.03
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      y * 0.1,
      0.03
    );
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.8} />
      <pointLight position={[-4, 3, 2]} color="#00f2fe" intensity={isDark ? 1.2 : 0.6} distance={14} />
      <pointLight position={[4, -3, 2]} color="#4facfe" intensity={isDark ? 1.2 : 0.6} distance={14} />

      <group ref={groupRef}>
        {/* Minimal clean floating bubbles and soft stars only */}
        <FloatingBubblesAndStars isDark={isDark} />
      </group>
    </>
  );
}
